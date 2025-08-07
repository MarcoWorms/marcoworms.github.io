#!/bin/bash

#########################################
# VPS Security Hardening Script
# For Ubuntu/Debian based systems
# Run as root or with sudo
#########################################

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuration variables
SSH_PORT=${SSH_PORT:-22}  # Change this to your desired SSH port
ADMIN_EMAIL=""  # Set this for unattended-upgrades notifications
ENABLE_CLOUDFLARE=${ENABLE_CLOUDFLARE:-"yes"}  # Set to "yes" to restrict to Cloudflare IPs

# Log file
LOG_FILE="/var/log/vps-hardening.log"

# Function to log messages
log_message() {
    echo -e "${GREEN}[$(date '+%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

log_error() {
    echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ERROR:${NC} $1" | tee -a "$LOG_FILE"
}

log_warning() {
    echo -e "${YELLOW}[$(date '+%Y-%m-%d %H:%M:%S')] WARNING:${NC} $1" | tee -a "$LOG_FILE"
}

# Check if running as root
if [[ $EUID -ne 0 ]]; then
   log_error "This script must be run as root"
   exit 1
fi

log_message "Starting VPS hardening process..."

# Set non-interactive mode for package installations
export DEBIAN_FRONTEND=noninteractive

# Pre-configure packages to avoid prompts
log_message "Pre-configuring package selections..."
echo "postfix postfix/main_mailer_type select No configuration" | debconf-set-selections
echo "postfix postfix/mailname string $(hostname)" | debconf-set-selections
echo "iptables-persistent iptables-persistent/autosave_v4 boolean true" | debconf-set-selections
echo "iptables-persistent iptables-persistent/autosave_v6 boolean true" | debconf-set-selections

#########################################
# 1. System Updates
#########################################
log_message "Updating system packages..."
apt-get update -y
apt-get upgrade -y -q
apt-get dist-upgrade -y -q
apt-get autoremove -y
apt-get autoclean -y

#########################################
# 2. Configure Automatic Updates
#########################################
log_message "Setting up automatic security updates..."
apt-get install -y -q unattended-upgrades apt-listchanges

# Configure unattended-upgrades
cat > /etc/apt/apt.conf.d/50unattended-upgrades <<'EOCONFIG'
Unattended-Upgrade::Allowed-Origins {
    "${distro_id}:${distro_codename}";
    "${distro_id}:${distro_codename}-security";
    "${distro_id}ESMApps:${distro_codename}-apps-security";
    "${distro_id}ESM:${distro_codename}-infra-security";
    "${distro_id}:${distro_codename}-updates";
};
Unattended-Upgrade::DevRelease "false";
Unattended-Upgrade::AutoFixInterruptedDpkg "true";
Unattended-Upgrade::MinimalSteps "true";
Unattended-Upgrade::InstallOnShutdown "false";
Unattended-Upgrade::Remove-Unused-Kernel-Packages "true";
Unattended-Upgrade::Remove-Unused-Dependencies "true";
Unattended-Upgrade::Automatic-Reboot "false";
Unattended-Upgrade::Automatic-Reboot-Time "02:00";
EOCONFIG

# Enable automatic updates
cat > /etc/apt/apt.conf.d/20auto-upgrades <<'EOCONFIG'
APT::Periodic::Update-Package-Lists "1";
APT::Periodic::Download-Upgradeable-Packages "1";
APT::Periodic::AutocleanInterval "7";
APT::Periodic::Unattended-Upgrade "1";
EOCONFIG

systemctl enable unattended-upgrades
systemctl start unattended-upgrades

#########################################
# 3. Configure SSH
#########################################
log_message "Hardening SSH configuration..."

# Backup original SSH config
cp /etc/ssh/sshd_config /etc/ssh/sshd_config.backup.$(date +%Y%m%d)

# Create SSH user group
groupadd -f sshusers

# Get current user
CURRENT_USER=$(who am i | awk '{print $1}')
if [ -z "$CURRENT_USER" ]; then
    CURRENT_USER=$(logname 2>/dev/null || echo "")
fi

if [ ! -z "$CURRENT_USER" ] && [ "$CURRENT_USER" != "root" ]; then
    usermod -a -G sshusers "$CURRENT_USER"
    log_message "Added $CURRENT_USER to sshusers group"
fi

# Configure SSH
mkdir -p /etc/ssh/sshd_config.d/
cat > /etc/ssh/sshd_config.d/99-hardening.conf <<'EOCONFIG'
# SSH Port
Port 22

# Protocol and Host Keys
Protocol 2
HostKey /etc/ssh/ssh_host_ed25519_key
HostKey /etc/ssh/ssh_host_rsa_key

# Authentication
PermitRootLogin prohibit-password
PubkeyAuthentication yes
PasswordAuthentication no
PermitEmptyPasswords no
ChallengeResponseAuthentication no
AuthenticationMethods publickey
AllowGroups sshusers

# Security
StrictModes yes
IgnoreRhosts yes
HostbasedAuthentication no
X11Forwarding no
PermitTunnel no
AllowAgentForwarding no
AllowTcpForwarding no

# Login Settings
LoginGraceTime 30
MaxAuthTries 3
MaxSessions 5
MaxStartups 10:30:60

# Keep Alive
ClientAliveInterval 300
ClientAliveCountMax 2

# Logging
SyslogFacility AUTH
LogLevel VERBOSE

# Other Settings
UsePAM yes
PrintMotd no
PrintLastLog yes
TCPKeepAlive no
Compression delayed
UseDNS no

# Banner
Banner /etc/issue.net
EOCONFIG

# Update SSH port if custom
if [ "$SSH_PORT" != "22" ]; then
    sed -i "s/^Port 22/Port $SSH_PORT/" /etc/ssh/sshd_config.d/99-hardening.conf
fi

#########################################
# 4. Install and Configure Fail2ban
#########################################
log_message "Installing and configuring Fail2ban..."
apt-get install -y -q fail2ban

# Create local jail configuration
cat > /etc/fail2ban/jail.local <<EOCONFIG
[DEFAULT]
bantime = 3600
findtime = 600
maxretry = 5
destemail = ${ADMIN_EMAIL:-root@localhost}
sendername = Fail2Ban
action = %(action_mwl)s

[sshd]
enabled = true
port = $SSH_PORT
filter = sshd
logpath = /var/log/auth.log
maxretry = 3
bantime = 7200

[sshd-ddos]
enabled = true
port = $SSH_PORT
filter = sshd-ddos
logpath = /var/log/auth.log
maxretry = 10
bantime = 3600

[recidive]
enabled = true
filter = recidive
logpath = /var/log/fail2ban.log
action = iptables-allports[name=recidive]
bantime = 86400
maxretry = 3
EOCONFIG

# Create custom filter for SSH DDoS
cat > /etc/fail2ban/filter.d/sshd-ddos.conf <<'EOCONFIG'
[Definition]
failregex = ^.*sshd.*: (Connection closed by|Received disconnect from|Connection reset by) <HOST>.*$
            ^.*sshd.*: (Did not receive identification string from) <HOST>.*$
ignoreregex =
EOCONFIG

systemctl enable fail2ban
systemctl restart fail2ban

#########################################
# 5. Configure UFW Firewall
#########################################
log_message "Configuring UFW firewall..."
apt-get install -y -q ufw

# Disable UFW first
ufw --force disable

# Reset UFW
ufw --force reset

# Set default policies
ufw default deny incoming
ufw default allow outgoing
ufw default deny forward

# Allow SSH
ufw allow $SSH_PORT/tcp comment 'SSH'

# Rate limiting for SSH
ufw limit $SSH_PORT/tcp

# Allow web traffic (will be restricted to Cloudflare if enabled)
if [ "$ENABLE_CLOUDFLARE" != "yes" ]; then
    ufw allow 80/tcp comment 'HTTP'
    ufw allow 443/tcp comment 'HTTPS'
fi

# Enable logging
ufw logging low

# Enable UFW
echo "y" | ufw enable

log_message "UFW firewall enabled"

#########################################
# 6. Configure Cloudflare (optional)
#########################################
if [ "$ENABLE_CLOUDFLARE" = "yes" ]; then
    log_message "Setting up Cloudflare IP whitelist..."
    
    # Create Cloudflare update script
    cat > /usr/local/bin/update-cloudflare-ips.sh <<'EOSCRIPT'
#!/bin/bash

# Get Cloudflare IPs
CF_IPV4=$(curl -s https://www.cloudflare.com/ips-v4)
CF_IPV6=$(curl -s https://www.cloudflare.com/ips-v6)

# Remove old Cloudflare rules
while ufw status numbered | grep -q 'Cloudflare'; do
    RULE_NUM=$(ufw status numbered | grep 'Cloudflare' | head -1 | cut -d']' -f1 | cut -d'[' -f2)
    if [ ! -z "$RULE_NUM" ]; then
        ufw --force delete $RULE_NUM
    else
        break
    fi
done

# Add IPv4 ranges
for ip in $CF_IPV4; do
    ufw allow from $ip to any port 80 comment 'Cloudflare-IPv4'
    ufw allow from $ip to any port 443 comment 'Cloudflare-IPv4'
done

# Add IPv6 ranges
for ip in $CF_IPV6; do
    ufw allow from $ip to any port 80 comment 'Cloudflare-IPv6'
    ufw allow from $ip to any port 443 comment 'Cloudflare-IPv6'
done

ufw reload
echo "Cloudflare IPs updated"
EOSCRIPT

    chmod +x /usr/local/bin/update-cloudflare-ips.sh
    
    # Run it
    /usr/local/bin/update-cloudflare-ips.sh
    
    # Add cron job
    (crontab -l 2>/dev/null | grep -v update-cloudflare-ips; echo "0 0 * * 0 /usr/local/bin/update-cloudflare-ips.sh") | crontab -
    
    log_message "Cloudflare IP restrictions enabled"
else
    log_message "Cloudflare restrictions not enabled (set ENABLE_CLOUDFLARE=yes to enable)"
fi

#########################################
# 7. System Hardening
#########################################
log_message "Applying kernel hardening..."

cat > /etc/sysctl.d/99-hardening.conf <<'EOCONFIG'
# IP Spoofing protection
net.ipv4.conf.all.rp_filter = 1
net.ipv4.conf.default.rp_filter = 1

# Ignore ICMP redirects
net.ipv4.conf.all.accept_redirects = 0
net.ipv6.conf.all.accept_redirects = 0

# Ignore send redirects
net.ipv4.conf.all.send_redirects = 0

# Disable source packet routing
net.ipv4.conf.all.accept_source_route = 0
net.ipv6.conf.all.accept_source_route = 0

# Log Martians
net.ipv4.conf.all.log_martians = 1

# Ignore ICMP broadcasts
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1

# SYN flood protection
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_syn_retries = 2
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_max_syn_backlog = 4096

# Disable IPv6 (uncomment if not needed)
#net.ipv6.conf.all.disable_ipv6 = 1
#net.ipv6.conf.default.disable_ipv6 = 1
#net.ipv6.conf.lo.disable_ipv6 = 1

# Other hardening
kernel.randomize_va_space = 2
fs.protected_hardlinks = 1
fs.protected_symlinks = 1
kernel.panic = 10
kernel.panic_on_oops = 1
EOCONFIG

sysctl -p /etc/sysctl.d/99-hardening.conf

#########################################
# 8. Install Security Tools
#########################################
log_message "Installing additional security tools..."

apt-get install -y -q --no-install-recommends \
    rkhunter \
    chkrootkit \
    aide \
    auditd \
    logwatch

# Initialize AIDE
log_message "Initializing AIDE database..."
aideinit -y -f || log_warning "AIDE init failed - run manually later"

#########################################
# 9. Secure Shared Memory
#########################################
log_message "Securing shared memory..."
if ! grep -q "/run/shm" /etc/fstab; then
    echo "tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0" >> /etc/fstab
fi

#########################################
# 10. Login Banner
#########################################
log_message "Setting up login banner..."
cat > /etc/issue.net <<'EOCONFIG'
********************************************************************
*                                                                  *
* Unauthorized access to this system is forbidden and will be     *
* prosecuted by law. By accessing this system, you agree that     *
* your actions may be monitored and recorded.                     *
*                                                                  *
********************************************************************
EOCONFIG

#########################################
# 11. Final Steps
#########################################
log_message "Restarting services..."
systemctl restart ssh
systemctl restart fail2ban
ufw reload

#########################################
# Summary
#########################################
echo ""
log_message "==========================================="
log_message "VPS Hardening Complete!"
log_message "==========================================="
echo ""
log_message "Summary of changes:"
log_message "✓ System packages updated"
log_message "✓ Automatic updates configured"
log_message "✓ SSH hardened (Port: $SSH_PORT)"
log_message "✓ Password authentication disabled"
log_message "✓ Fail2ban installed and configured"
log_message "✓ UFW firewall configured"
log_message "✓ Kernel parameters hardened"
log_message "✓ Security tools installed"
echo ""

# Show firewall status
log_message "Current firewall rules:"
ufw status numbered

echo ""
log_warning "IMPORTANT:"
log_warning "1. SSH is on port $SSH_PORT - test in NEW terminal: ssh -p $SSH_PORT user@server"
log_warning "2. Make sure you have SSH key access before disconnecting!"
log_warning "3. To enable Cloudflare-only access, run: ENABLE_CLOUDFLARE=yes $0"
log_warning "4. Configure your domain in Cloudflare dashboard separately"
echo ""
log_message "Log file: $LOG_FILE"
