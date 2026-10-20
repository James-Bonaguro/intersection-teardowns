# Intersection Strategies · Teardowns

Private. Teardowns are portfolio proof and a door-opener for other work, not a product we sell. No pricing or sales call to action appears in any client-facing file.

Everything needed to produce and deliver a company teardown: the operating procedure, the standards every report is held to, the agent prompts, the workflow, the templates, and the designs.

A teardown is an outside-in review of a company built only from public evidence: what a prospect sees before they ever make contact, and the few moves that would change it.

## Start here

| If you want to… | Open |
|---|---|
| Run a teardown end to end | `SOP.md` |
| Check what "good" looks like | `standards/` |
| Change how an agent behaves | `agents/` |
| Start a new client | `templates/brief.json` → `clients/<slug>/brief.json` |
| Edit the report or pitch deck design | `designs/` |

## Layout

```
SOP.md                    the procedure, kickoff to follow-up
CLAUDE.md                 instructions for any AI assistant working in this repo
standards/                rules every report must pass
  house-rules.md
  evidence-tags.md
  social-standard.md
  report-structure.md
  brand.md
agents/                   one prompt per role; the workflow loads these
workflow/run-teardown.js  runs the agents in order
templates/                brief, outline, checklists, emails
designs/                  report template, pitch deck, live client reports
  reference/              outside references (Muse cover doc v1)
research/                 internal research; never client-facing
clients/<slug>/           brief, captures, drafts, final, fact-check log, PDF
```

## Rule of one

Each rule lives in exactly one file. Agents, the SOP, and the workflow point to `standards/`; they never restate it. Change a standard once and everything downstream follows.

Contact: James Bonaguro · james@intersectionstrategies.co · 708-420-5462
