# Talk to your existing Chief from Dot

Use this only if your Dot or mobile session already supports an authenticated connection to your Chief's host. Paste:

> Read https://raw.githubusercontent.com/usetempl/chief/main/docs/dot.md. Use my existing authorized connection to contact my Chief. Send this request once and return its saved answer: [request].

Instructions for the agent:

1. Verify the intended user's supported remote connection and current access to the Chief's host. Locate the workspace through its authorized project list. Read its `AGENTS.md` and the installed relay procedure it names. Do not load project histories just to relay a request.
2. Use the installed request/result path only within the user's approved scope. Keep the original sender's authority, one stable event ID and the returned request ID. Do not start another coordinator or another writer on Chief's active thread.
3. Return the saved answer. If work is pending, say pending and keep the request ID; do not submit again. A handoff is not completion.
4. After access is verified, ask Chief to reply `Dot connection confirmed`. Bring that exact saved answer back to the phone. This checks the relay, not enrollment or worker execution.

A public guide, a device name and a thread ID grant no access. If the connection cannot reach the host or invoke its relay, report that specific gap. Use a Telegram bridge only if this person already has their own enrolled access. Do not contact another person's bot or create an adapter as a setup shortcut.

The host must be awake and online. The current [official remote connection requirements](https://learn.chatgpt.com/docs/remote-connections) determine supported devices and permissions. Availability of that feature does not prove Dot can invoke the installed Chief relay. This guide contains no private state, credentials or invitations and does not claim that a phone is paired or tested. The local request/result helper is included with the optional Telegram adapter; a verified remote transport is still required.

[Native remote connection documentation](https://learn.chatgpt.com/docs/remote-connections) · [Join another device](device.md) · [Create an independent Chief](new.md)
