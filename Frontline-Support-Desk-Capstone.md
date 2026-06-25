# Intern Capstone — 4-Day Build

## Frontline: the platform a support team uses to actually resolve tickets, not just collect them

---

### The world you're building for

A company's customer support runs out of a shared inbox, and it shows. Tickets pile up with no clear owner. Two agents reply to the same customer. A request that should go to billing sits with someone who can't help. Customers send a message and hear nothing for days, with no idea whether anyone has even seen it. The manager has no real picture of what's open, what's stuck, or how the team is doing — just a feeling that it's busy.

You're building **Frontline** — the platform that takes a customer's problem from "I have an issue" to "it's resolved," with clear ownership, real conversations, and a record of everything. Over the next four days you'll build a working product that a real customer, a real support agent, and a real support manager could all sign into and use to get through a queue.

This document describes **what the product does**. It does not tell you how to build it — that's the assignment. Read it as a product spec, decide what the thing needs to be, and build it.

---

### The three kinds of people who use Frontline

Everyone signs into their own account, and what they can see and do depends entirely on who they are. The visibility here is layered — an agent sees their slice of the world, a manager sees all of it.

**The Customer** has a problem. They can:
- Open a new ticket describing their issue, choosing a category and attaching screenshots, logs, or files.
- See the status of their own tickets — and only their own — from "open" through to "resolved."
- Hold a real back-and-forth conversation on each ticket and see replies as they arrive.
- After a ticket is resolved, rate how it went.

**The Support Agent** does the resolving. They can:
- See the tickets assigned to them — and only theirs, not the whole company's queue.
- Read the full ticket: the customer's description, the attachments, the conversation so far, and the customer's history.
- Reply to the customer, change a ticket's status, and resolve it.
- Lean on the Agent Copilot (described below).

**The Support Manager** runs the desk. They can:
- See every ticket across every agent and customer — the whole live queue.
- Assign and reassign tickets, escalate, and set priority.
- See how the team is doing and step in where things are stuck.

These boundaries matter. A customer who goes looking for another customer's ticket, or an agent who tries to grab a ticket that isn't theirs, must be cleanly and clearly turned away — never shown data that isn't theirs, never left at a crash or a blank page.

---

### The life of a ticket

This is the heart of the product. Follow one ticket from opened to resolved and you'll see most of what Frontline has to do.

It starts when a **customer opens a ticket**. They describe the problem, pick a category, and attach a screenshot or a log file. The form should be hard to get wrong — if they leave out something essential or attach something unreadable, they're told exactly what to fix, not vaguely refused. The instant the ticket lands, the customer gets a confirmation email, and the ticket appears on the manager's queue.

The **manager (or the desk's rules) assigns the ticket to an agent**. The moment it's assigned, it appears in that agent's personal queue, and the customer is emailed that someone is now on it.

The **agent works the ticket through a real conversation**. Agent and customer go back and forth, and each sees the other's messages **the moment they're sent** — it reads like a live chat, not an email chain with a refresh button. The agent can pull up the customer's history and any attachments. If it turns out the ticket belongs with another team, the agent or manager can reassign or escalate it, and it moves queues live.

Every attachment the customer sends and every message exchanged becomes a permanent part of the ticket. Long after it's closed, an agent or manager can open it and read the whole conversation and pull up every file exactly as it was sent.

When the problem is solved, the **agent resolves the ticket**. The customer gets an email letting them know, and is invited to rate how it went. That rating becomes part of the record the manager can see.

---

### The Agent Copilot

An agent's day is a firehose, so Frontline gives them an assistant they can talk to in plain language — the **Agent Copilot**. It's not a search box and it's not a bot that only talks; it actually *does things* on the agent's behalf, scoped to what that agent is allowed to touch.

An agent should be able to type a real request and have the Copilot carry it out:

- **"What's this customer's history and what else do they have open?"** — the Copilot pulls together the customer's past and current tickets so the agent has context fast.
- **"Reassign this to the billing team and bump it to high priority."** — the Copilot actually makes the change, the same way the agent could by hand (and only what the agent is allowed to do).
- **"Draft a reply explaining the fix."** — the Copilot writes a clear response the agent can review, adjust, and send.

The Copilot should be genuinely useful — an agent should be able to move through tickets noticeably faster with it. When it takes an action, that action shows up everywhere else in the product exactly as if the agent had done it.

---

### The queue is alive

Frontline is not a page people refresh. The queue and every conversation are live.

When a customer opens a ticket, the manager watching the queue sees it appear **on its own, the moment it happens**. When a ticket is reassigned, it leaves one agent's queue and lands in another's instantly. Inside a ticket, a message from the customer shows up on the agent's screen as it's sent, and vice versa. If the manager and an agent both have the queue open, one acting changes what the other sees without them touching anything.

If the product makes anyone hit refresh to see a new ticket or a new reply, it isn't finished.

---

### How the product should behave when things go wrong

A good product stays calm and clear when things get messy. Frontline should:

- **Refuse what shouldn't be allowed, gracefully.** Reaching for another customer's ticket, or a ticket that isn't assigned to you, gets a clear, polite refusal — never someone else's data, never a crash.
- **Reject bad input helpfully.** The ticket form and replies guard against nonsense and explain precisely what's wrong and how to fix it.
- **Explain the impossible.** When an action can't happen — replying on a ticket that's already resolved, resolving a ticket that isn't yours — the person gets a precise, human explanation, not a generic error.
- **Keep accounts and sign-in trustworthy.** People sign in securely and stay signed in sensibly, and their credentials are protected.

The difference between a demo and a product is almost entirely in how it behaves on the bad path. Spend real attention here.

---

### What "done" looks like

By the end of day four, someone should be able to:

1. Sign up as a customer, open a ticket with an attachment, and receive a confirmation email.
2. Have the ticket assigned to an agent — landing in that agent's queue and emailing the customer that it's being worked.
3. Hold a live back-and-forth on the ticket where each side sees the other's messages the instant they're sent, and watch a reassignment move the ticket between queues live.
4. Resolve the ticket, email the customer, and have them leave a rating that the manager can see.
5. Re-open a closed ticket later and still read the whole conversation and pull up every attachment exactly as sent.
6. Move through tickets as an agent using the Copilot — getting customer context, reassigning and re-prioritizing by talking to it, and drafting a reply.

If all six work end to end, and the product stays clear-headed when someone misuses it, you've built Frontline.

---

### A suggested rhythm for the four days

This is guidance, not a rule — pace it however suits you.

- **Day 1** — Accounts and the three sign-in experiences; lock down the role boundaries early. Shape a ticket and its assignment.
- **Day 2** — The full ticket lifecycle end to end: open → assign → converse → reassign → resolve → rate. Get the data and the role rules right first.
- **Day 3** — Make the queue and the conversation real-time, and wire up the emails and the attachment uploads/records so everything persists exactly as sent.
- **Day 4** — Build the Agent Copilot and its three abilities, then harden the bad paths — refusals, validation, clear failures — and polish.

Build something you'd be comfortable handing to a real support team at the start of a real busy week.
