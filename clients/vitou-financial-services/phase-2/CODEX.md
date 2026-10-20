# For Codex: running Vitou Phase 2

This repo's instructions live in `CLAUDE.md` (repo root), not `AGENTS.md`. Treat it as your AGENTS.md.

## Read first, in order
1. `CLAUDE.md`
2. Every file in `standards/` (they override everything else)
3. `clients/vitou-financial-services/phase-2/CONTEXT.md`
4. `clients/vitou-financial-services/phase-2/DELIVERABLE-SPEC.md` (binding)
5. `clients/vitou-financial-services/phase-2/PROMPT.md`
6. `clients/vitou-financial-services/phase-2/PLAN.md` (Step 1, approved by James on 2026-10-20)
7. `designs/Vitou Self-Audit.dc.html` (Phase 1 report; Phase 2 must not contradict it)

## Run
- Work on branch `vitou-phase-2`. Small commits.
- Run `PLAN.md` from "Order of work" step 1 onward: compliance (A) first, then B, C, D, E1, E2, F (in parallel if you can), then write, review in order, build.
- Use parallel subagents if available. Otherwise run workstreams one at a time, A first.
- If Exa or Firecrawl aren't available, use your own web search and page fetch, and say so in `research/` and the final summary.

## Rules
- Public evidence only. No forms, bookings, or contacting anyone.
- No pricing in anything client-facing. Tool cost only as Low / Med / High + "confirm current pricing."
- Never mention Jim's health. AI never appears as our method.
- Never delete files. Never send, publish, or push anything without James's OK.
- Stop after the two design builds and the closing checks. Report to James: what was built, surprising findings, what still needs Jack's answers.
