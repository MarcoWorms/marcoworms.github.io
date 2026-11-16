# Start your own Chief

Paste into your signed-in Codex:

> Read https://worms.io/chief/new.md. Clone the instruction pack and set up my own private Chief using my accounts and projects. Keep it lean and onboard me from the context I allow.

Chief is instructions and a small task board. Your existing AI is the coordinator; there is no new model server to install.

## Instructions for Codex

1. Clone only the public instruction folder into a new directory. Use an existing clone if one is already available. Do not download a ZIP or clone another person's private Chief repository.

```sh
git clone --depth 1 --filter=blob:none --no-checkout --single-branch --branch master https://github.com/MarcoWorms/marcoworms.github.io.git chief-guide
git -C chief-guide sparse-checkout set --no-cone /chief/
git -C chief-guide checkout master
```

2. Read `chief/core.md`. Create a separate private workspace with `AGENTS.md`, `projects.md`, `priorities.md` and `tasks/todo`, `tasks/doing`, `tasks/done`. Put the core instructions in its `AGENTS.md`. Keep private records outside the public clone. Reuse an existing Chief if the person already has one.
3. Use this person's installed AI and normal sign-in. Ask whether they want an optional nickname and permit a limited review of their available project conversations. Without history consent, use only the context they supply.
4. Propose a short project list, priorities and existing project leads. Let the person correct it. Record only the useful accepted context; do not copy whole chat histories or create replacement owners.
5. Start in the existing Codex conversation. Add Telegram only if wanted, using their own bot and a supported connector or a separately reviewed small adapter. Keep the bot credential in private local configuration, enroll the intended sender, and verify one actual message and reply before claiming it works. This instruction pack does not ship a Telegram daemon.
6. Demonstrate one real task handoff and its returned result, then show the saved task board. Report any unavailable native interface plainly.

No account, bot, project or history is inherited from the publisher. There is no automatic device enrollment. A remote worker follows [the device guide](device.md) after this independent Chief exists.
