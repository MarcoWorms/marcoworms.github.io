# Talk to your existing Chief from Dot

Paste into Dot on your phone:

> Read https://worms.io/chief/dot.md. Use my existing authenticated Mac connection to contact my Chief, Alfred. Send this request once and return its answer: [request].

Instructions for the agent:

1. Use the user's existing supported remote connection. On the connected Mac, locate the existing Chief workspace through the available project list and read its `AGENTS.md` and `reports/device-network-bootstrap.md`. Do not load project histories just to relay a request.
2. Use the installed request/result path. Keep the original sender's authority, one stable event ID and the returned request ID. Do not start another coordinator or another writer on Chief's active thread.
3. Return the saved answer. If work is pending, say pending and keep the request ID; do not submit again. A handoff is not completion.
4. First test: ask Chief to reply `Dot connection confirmed`, and bring that exact answer back to the phone.

A public guide, a device name and a thread ID grant no access. If the connection cannot reach the Mac or invoke its relay, report that specific gap. Use the existing Telegram bridge while resolving it.

The Mac must be awake and online. Dot's ability to reach a Mac thread is separate from a verified Chief round trip. This guide does not claim that any particular phone is paired.

[Native remote connection documentation](https://learn.chatgpt.com/docs/remote-connections) · [Join another device](device.md) · [Create an independent Chief](new.md)
