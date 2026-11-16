# Chief by Templ

![Chief by Templ: projects, task board and memory](overview-v4.png)

[Full-size image](overview-v4.png) · [Editable Mermaid](architecture.mmd) · [Technical reference](architecture-details.md)

One Chief can coordinate many projects. Each project keeps its existing lead, repository, tools and context. The model chooses the lead; the adapters carry the request and result.

The board uses Backlog, Todo, Doing, Review and Done. Markdown stores tasks and timestamped moves; SQLite stores transport state; Codex manages each thread’s context and compaction. Private Git can preserve selected files and sanitized records.
