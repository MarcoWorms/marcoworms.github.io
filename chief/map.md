# How Chief works

Chief is instructions and a small private task board. The model reads the request, priorities and relevant context, then answers or chooses the existing project lead. It does not need a planning engine or a hardcoded model ranking system.

![Chief request flow](architecture.png)

This diagram also shows the optional Telegram, device and scheduling adapters used by Alfred. Those adapters enforce access, preserve requests and verify delivery. They are not installed by reading these public instructions. The public guides contain no invitation, credential or device access grant.

[Editable Mermaid diagram](architecture.mmd) · [Instruction core](core.md) · [Start your own Chief](new.md)

Backlog contains uncommitted ideas and research follow-ups. Todo contains work committed for the next available capacity, or recurring tasks waiting for their date. Doing means an owner is working. Review names the human and decision needed. Done records a verified outcome. Each card keeps its movement timestamps; compact reports omit that history.

The project owner keeps implementation and routine progress in its own thread. Chief receives a result or a concrete missing input. A queued handoff never means the work is finished. Testing, deployment and human acceptance remain separate.

For a prompt audit, start with [the core](core.md) and [onboarding](new.md), then inspect the installation's private priorities, project registry, relevant task cards and adapter attribution rules. Private operational records belong outside the public clone.
