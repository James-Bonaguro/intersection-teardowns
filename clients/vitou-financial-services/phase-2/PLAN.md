# Phase 2 plan: Vitou social and technology

Step 1 of `PROMPT.md`. Nothing below runs until James approves.
Branch: `vitou-phase-2` (built on `fix/restore-structure`, PR #1).

## Goal
A deck (about 24 slides, 1920×1080) and a playbook (Letter, flowing) that tell Jack exactly what to do on social and technology, in order, starting Monday. Every factual claim sourced and tagged. No pricing. Nothing sent to Jack.

## Rules every agent gets
- Read first: `phase-2/CONTEXT.md`, `phase-2/DELIVERABLE-SPEC.md` (binding), every file in `standards/`, and `designs/Vitou Self-Audit.dc.html` (Phase 2 must not contradict it).
- Public evidence only. No forms, no bookings, no contacting Vitou or any firm.
- Every finding: source URL, date checked (2026-10-xx), tag (`RECHECKED` / `PUBLISHED` / `OBSERVED` / `est.` / `INFERRED` / `UNKNOWN`). Vendor claims labeled as vendor claims. Vendor prices never recorded as fact; cost only as Low / Med / High + "confirm current pricing."
- Never mention Jim's health. AI only ever appears as a recommendation to Vitou, never as our method.
- Tools: Exa for discovery, Firecrawl for page captures. If a site blocks capture (Reddit often does), fall back to search snippets and tag `OBSERVED`.

## Workstreams and who owns them

| # | Workstream | Agent | Output in `phase-2/research/` |
|---|---|---|---|
| A | Compliance guardrails (runs first) | Researcher A | `A-compliance.md` + one-page "check with AE compliance" list |
| B | Social channels and voice | Researcher B | `B-social-channels.md` |
| C | Topic engine | Researcher C | `C-topic-engine.md` (top 30 topics + monthly process) |
| D | Proof and newsletter | Researcher D | `D-proof-newsletter.md` |
| E1 | Meeting notes and CRM | Researcher E1 | `E1-notes-crm.md` |
| E2 | Scheduling, portal, email and social tools | Researcher E2 | `E2-scheduling-tools.md` |
| F | Website recheck and first step | Researcher F | `F-website.md` |

Raw page captures go to `phase-2/research/raw/<workstream>/`.

## Research queries (starting set; agents add as they go)
- **A:** SEC Marketing Rule (206(4)-1) testimonials and endorsements, required disclosures; SEC FAQ on adopting or entangling third-party reviews; SEC risk alerts on the Marketing Rule; FINRA/SEC recordkeeping for social media and texts (books-and-records, 204-2); AE Wealth Management / Advisors Excel public pages on marketing approval, social, technology partners. Nothing public = `UNKNOWN` + question for Jack.
- **B:** small RIA (1–5 advisers, retirement-income) LinkedIn and Facebook examples; advisor Instagram examples; firm page vs. personal profile guidance; seminar-to-content repurposing. Capture 6–10 real firms.
- **C:** r/retirement, r/personalfinance, r/Bogleheads, r/financialplanning recent threads; Google "People also ask" for Social Security timing, RMDs, Medicare/IRMAA, Ohio retirement income tax, Roth conversions; 2026 news on Social Security COLA, RMD rules, Medicare premiums, Ohio tax changes. Rank by frequency and recency.
- **D:** advisor review-request practices under the Marketing Rule; Google review policies for financial firms; client story formats with compliance sign-off; advisor newsletter examples (structure, length, cadence, signup placement).
- **E1:** AI meeting-note tools built for advisors (4–6, e.g. ones that integrate with advisor CRMs); each one's integrations, data handling and security claims, archiving, and any public link to the Advisors Excel network; CRMs common at small RIAs; whether AE provides a CRM.
- **E2:** compliant online scheduling for advisors; client portals and secure document collection; social scheduling and archiving tools used by RIAs; email newsletter tools with archiving; how Excel and Income Solver fit alongside them.
- **F:** recheck vitoufinancial.com for the Phase 1 issues (`/what-we-do/`, Disclosures link, Events menu, phone-gated checklist); 3–5 advisor sites with a strong sample-plan or "what working with us looks like" page and good booking flow.

## Order of work (one workflow, about 20 agents)
1. **Compliance (A)** alone. Its guardrail list is handed to every other agent.
2. **Research B, C, D, E1, E2, F** at the same time.
3. **Write**: playbook writer drafts `phase-2/playbook.md` from all research. Then, at the same time, the sample-content writer (5 posts, 3 newsletter outlines, review-request script, story template) and the deck writer (`phase-2/deck.md`, slide by slide per the spec).
4. **Review, in order**: fact-checker (every claim traces to `research/` or `CONTEXT.md`; recheck load-bearing ones) → compliance reader → owner reader as Jack → auditor (no pricing, no Jim's health, no Phase 1 contradictions, every unknown on the questions slide). Writer fixes after each; up to 2 audit loops.
5. **Build** (2 agents at once): `designs/Vitou Phase 2 Deck.dc.html` and `designs/Vitou Phase 2 Playbook.dc.html`, Analyst Dossier style, matching the Vitou report and pitch deck.
6. **Close**: pricing-word scan on client-facing Phase 2 files; update `clients/vitou-financial-services/notes.md`; summary for James.

## Files created
`phase-2/research/*.md`, `phase-2/research/raw/`, `phase-2/playbook.md`, `phase-2/deck.md`, `phase-2/review-log.md`, `designs/Vitou Phase 2 Deck.dc.html`, `designs/Vitou Phase 2 Playbook.dc.html`, updated `notes.md`.

## Done when
- Deck and playbook built, every factual claim tagged and sourced in an appendix.
- Questions-for-Jack slide covers every unknown.
- Scan for `$`, "price", "pricing", "package", "hire" in client-facing Phase 2 files finds only tool cost levels.
- Summary for James: what was built, surprising findings, what still needs Jack's answers.

## Not included
The optional GPT second opinion, PDF export, sending anything. Slide 2 (James's note to Jack) is a draft for James to rewrite.

## Questions for James
1. Has Jack already told you any of the unknowns (which tools AE approves, current CRM, LinkedIn stats, email list)? If so, add them to `CONTEXT.md` before research starts.
2. Approve the run? It uses a lot of Claude usage.
