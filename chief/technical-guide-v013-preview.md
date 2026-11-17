# Chief by Templ — technical walkthrough: transcript

Narration: VoiceStudio, mlx-audio (Kokoro) voice am_michael, seed 7. Examples are fictional. Source: Chief v0.1.3 (commit c1ce4c5).

## 01 · One message  (0:00.8)

Someone opens Telegram and sends one message: please fix the broken signup link on the website. This video follows that message through Chief by Templ, step by step, from the phone to the project and back.

## 02 · The core  (0:15.4)

First, what is Chief? The core is a set of instructions and a few Markdown files in a private folder. The agents file holds the rules. The projects file lists each project and its existing lead. The priorities file holds your priorities. Task cards live in five folders, one for each board column. There is no planning engine, no vector database and no model server. Your own Codex model reads these files and makes the decisions.

## 03 · Install  (0:44.0)

Setup starts in the Codex app that you already use. You paste one line that points Codex at the Chief guide. Codex clones the public source. It installs Git only if Git is missing. Then it makes a separate private workspace, outside the public clone. You can choose a nickname, or keep the name Chief. Codex asks before it reads any project history. It proposes your projects and their existing leads, and you accept the list or change it.

## 04 · Telegram adapter  (1:12.5)

Telegram is an optional adapter, and it needs more. Python 3.12 or later, one pinned library called websockets, the Codex command line tool, and a new bot from BotFather. Three setup commands do the work. Prepare copies the code and makes blank records. Connect checks the bot and creates one coordinator thread, without a model turn. Service installs one collector that starts at login. On Linux, you run the collector in the foreground.

## 05 · Authentication  (1:41.9)

Authentication has three parts. Codex keeps its own sign-in, and Chief never copies it. The bot token goes in through a hidden prompt, into an owner-only file that Git ignores. Then you open a private invitation link in your own Telegram and tap Start. That enrolls your account. Messages from anyone else get no reply, no storage and no model access.

## 06 · Persistence  (2:07.1)

Now the message arrives. The collector is a small Python process on your computer. It long-polls Telegram for new updates. While it waits, it makes no model calls. It checks the sender, and it refuses text that looks like a password or a key. Then it saves the request in a local SQLite database, with an ID made from the chat and message numbers. A saved request survives a restart, and the same update is not stored twice.

## 07 · The continuing Chief  (2:35.6)

Next, the adapter gives the request to Chief. It talks to the Codex app server on your computer, through a local socket. Chief is one continuing Codex thread. Setup created it once, and the adapter resumes the same thread every time. If Chief is idle, the adapter starts a new turn. If Chief is busy, it steers the active turn. The input says who sent the message and what authority they have. It adds the text and the part they replied to. The model itself runs in the model service behind your Codex account.

## 08 · Context  (3:09.5)

Because the thread continues, a short message lands in a context that can already be large. Codex manages that context window, and it compacts the context when needed. Chief reads only the records it needs, but that does not erase earlier turns. So each turn still uses model capacity. Chief sets no token budget and no time limit.

## 09 · Project leads  (3:32.9)

Chief now decides. It can answer directly. Or it can choose an existing project lead from the projects file. Here, it chooses the website lead. It sends one focused brief through its route tool. The adapter resumes that lead's own thread and starts a turn there. The lead keeps its own repository, tools, model settings and context. If the lead is busy in the Codex app, the brief waits. Chief does not create a replacement lead. This adapter routes to Codex leads. For a lead in another tool, Chief reports the gap and keeps that lead.

## 10 · Results  (4:08.1)

The website lead fixes the link and runs its checks. When its turn completes, the adapter captures the final answer. That answer comes back to Chief as evidence from the lead. It is not a new instruction from you, and it grants no new authority.

## 11 · Markdown Kanban  (4:24.9)

Chief records the result on the board. Each task is one Markdown file. Its folder is its status. Backlog holds ideas. Todo holds committed work. Doing holds active work. Review waits for a named person's decision. Done holds a verified outcome. A move takes the same file to a new folder. The move adds a line with the time, the old and new columns, and a reason. Here, the card goes from Doing to Review, because you must accept the fix.

## 12 · Delivery  (4:55.0)

Then Chief replies. It calls the reply tool with the exact request ID. The reply goes into a local outbox. Chief's ordinary chat text is not sent. The collector splits a long answer to fit Telegram's message limit. It sends each part and saves a receipt for each one. If a send is uncertain, the collector does not repeat it blindly.

## 13 · /report  (5:19.2)

At any time, you can send /report. The adapter reads the saved cards and sends the board. It makes no model call and no live project check.

## 14 · Local vs service  (5:30.0)

So, what runs where? On your computer: the Codex app and its app server, the collector, SQLite, the Markdown files, and the project checkouts with their tools. In the model service: every model turn, for Chief and for each lead. Telegram's servers carry the messages. Model turns use your existing Codex plan. Chief adds no model of its own, but it does use the model.

## 15 · Memory: what you tell it  (5:54.8)

Now, memory. Chief has no hidden memory store. It has layers, and each layer has a place. Your nickname goes in the coordinator instructions and the setup record. With Telegram, a private profile file also holds it, to name the bot. Your operating style and preferences go in the private instructions and the priorities file. Choices about devices and leads go in the projects file. Chief writes these records when you state a preference or accept a proposal. It does not learn every preference by itself.

## 16 · Memory: private state  (6:27.5)

Runtime settings, such as the coordinator thread ID and the maintenance switch, stay in a private folder on your computer. Secrets stay there too: the bot token, the invitation and the message database. Codex keeps its own sign-in and sessions. Codex also keeps the thread context and its compaction summaries. If your Codex supplies its own memory, Chief treats it as a hint to check against the current files.

## 17 · Memory: three kinds of files  (6:54.7)

That gives three kinds of files. Public source is the code and the guides, with no personal data. An optional private Git backup can hold your instructions, project list, priorities, cards, reports and cleaned chat exports. Local-only state never goes into Git: secrets, runtime settings, databases and sessions. A Git backup restores your records. It does not restore your sign-ins or pending deliveries.

## 18 · Core vs adapters  (7:22.0)

To sum up, the core is plain files and your Codex. It needs no Python and no SQLite. The Telegram adapter is optional. It adds sender checks, a durable inbox, delivery receipts and /report. It does not plan, and it does not rank models.

## 19 · Overview  (7:40.5)

One message. One continuing Chief. Your existing project leads. One private board. Chief, by Templ.
