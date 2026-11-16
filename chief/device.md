# Join an existing Chief from another device

Paste into Codex on the new machine:

> Read https://worms.io/chief/device.md. Connect this device to my existing Chief, Alfred. Reuse native connections and keep one coordinator. Offer this device's useful resources, then verify a round trip.

Instructions for the agent:

1. Confirm which existing Chief and host the user means. Reuse the current authenticated Codex remote connection or an established SSH connection. Signing into Codex alone does not enroll the machine.
2. Ask the existing Chief, through that verified connection or the user's enrolled bridge, for its installed device bootstrap procedure. Use its existing pairing tools; do not build a new gateway, expose an app-server to the internet or copy account sessions.
3. Propose only useful capabilities: conversation entry, or specific work such as rendering. Record a device label, OS, available tools and the folders needed for that work. Do not send credentials or full machine inventories.
4. The existing Chief verifies the transport and records the device's approved scope. A requested capability is not an access grant. Keep the assigned device/request IDs and use the installed request/result path.
5. Verify a real request and answer from the new device. For a worker, also run one harmless capability check in its approved folder. Mark it usable only after both the connection and applicable execution checks pass.

Use the model to choose a suitable device for each task. Keep project ownership with the existing lead. Do not install a general agent framework, a second Chief, a scheduler or a new service just to read this guide.

For Mac/Windows, use the supported app connection when available. For a Linux host, use established SSH support. Follow [native connection instructions](https://learn.chatgpt.com/docs/remote-connections); actual platform availability and permissions still apply.

[Talk through Dot](dot.md) · [Create a separate Chief](new.md)
