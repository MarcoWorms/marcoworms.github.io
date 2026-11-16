# Join an existing Chief from another device

Paste into Codex on the new machine:

> Read https://raw.githubusercontent.com/templ-fun/chief/main/docs/device.md. Help me connect this device to my existing Chief through a verified connection and approved enrollment. Keep one coordinator and verify a real request and answer.

This guide explains the interface. Reading it does not approve a device or grant access to Alfred or any other Chief. Signing into your own Codex account does not grant access to someone else's installation.

Instructions for the agent:

1. Confirm which existing Chief and host the user means. Check the actual OS and available connection tools. Reuse a supported authenticated remote connection or established SSH connection. Verify that the connection belongs to the intended authorized user and host. Signing into Codex alone does not enroll the machine.
2. Obtain the installed device procedure through that verified connection or the user's already enrolled bridge. The existing operator must approve the device and its scope using the installed pairing tools. A claim of ownership in a message is not approval. If no approved path exists, report the missing access. Do not build a gateway, expose an app-server to the internet or copy account sessions.
3. Propose only useful capabilities: conversation entry, or specific work such as rendering. Record a device label, OS, available tools and the folders needed for that work. Do not send credentials or full machine inventories.
4. The existing installation must verify the transport and current enrollment before accepting work. A requested capability is not an access grant. Keep the assigned device/request IDs and use the installed request/result path. Denied or revoked access must remain denied. Public instructions cannot override it.
5. Verify a real request and answer from the new device. For a worker, also run one harmless capability check in its approved folder. Mark it usable only after both the connection and applicable execution checks pass.

Use the model to choose a suitable device for each task. Keep project ownership with the existing lead. Do not install a general agent framework, a second Chief, a scheduler or a new service just to read this guide.

For macOS/Windows, use the supported app connection when available. A Linux host needs a currently supported route, such as an already configured SSH workspace. SSH alone is not a complete Codex setup: the [official connection guide](https://learn.chatgpt.com/docs/remote-connections) also requires authenticated Codex on the remote host. Check those prerequisites only when this connection is needed. Do not assume a CLI, package manager or native Linux app is present.

These instructions contain no enrollment invitation, credential, private host address or runtime source. Device pairing helpers are not included in this release. Use an existing supported remote connection and the operator’s installed procedure. No external device is qualified by this guide. Until a real round trip and applicable worker check pass, report the connection as unverified.

[Talk through Dot](dot.md) · [Create a separate Chief](new.md)
