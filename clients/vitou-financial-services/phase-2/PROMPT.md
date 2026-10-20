# Paste into Claude Code (plan mode)

You're helping Intersection Strategies (James Bonaguro) build **Phase 2** for Vitou Financial Services: a deep, practical plan for **social media and technology**, delivered as a readable deck plus a playbook. Jack Vitou is James's friend and genuinely wants this help. Treat it like the most important client we have. **Never mention pricing for our work.**

Read first, in order:
1. `clients/vitou-financial-services/phase-2/CONTEXT.md`: facts and unknowns
2. `clients/vitou-financial-services/phase-2/DELIVERABLE-SPEC.md`: format and rules (binding)
3. `standards/house-rules.md`, `standards/evidence-tags.md`, `standards/social-standard.md`, `standards/brand.md`
4. `designs/Vitou Self-Audit.dc.html`: the finished teardown. Phase 2 builds on it and must not contradict it.

## Step 1: Plan (stop here for approval)
Produce a plan covering: the workstreams below, which agent owns each, the research queries you'll run, the files you'll create, and the order of work. List any questions for James. Don't build until James approves.

## Step 2: Research (parallel agents)
Use Exa for discovery and Firecrawl to capture source pages. Save raw captures to `phase-2/research/raw/` and a findings file per workstream to `phase-2/research/`. Every finding gets a source URL, the date checked, and a tag (observed / inferred / unknown / est.). Vendor claims are labeled as vendor claims. Don't record vendor prices as fact.

**A. Compliance guardrails (run first, the others depend on it)**
- SEC Marketing Rule basics for RIA testimonials, reviews, and endorsements: required disclosures, and adopting third-party reviews.
- Recordkeeping and archiving expectations for social and email at RIAs.
- What AE Wealth Management / Advisors Excel publicly says about approved marketing, social, and tech tools. If nothing is public, mark it unknown and add it to the questions for Jack.
- Output: a one-page "what to check with AE compliance" list. Not legal advice.

**B. Social: channels and voice**
- What strong small advisory firms (1–5 advisers, retirement-income focus) do on LinkedIn, Facebook, and Instagram: post types, cadence, firm page vs. personal. Find 6–10 real examples, captured.
- How advisors turn seminars and events into content (clips, recaps, carousels).
- Output: pillars, voice for each of Dan / Jack / the firm, cadence, and a sample month.

**C. Social: the topic engine**
- What Cleveland and Ohio pre-retirees are asking. Scrape r/retirement, r/personalfinance, r/Bogleheads, r/financialplanning, Google "People also ask," and recent news (Social Security, RMDs, Medicare, Ohio taxes).
- Rank by frequency and recency. Output: the top 30 topics with sample questions, and a repeatable monthly process (spreadsheet columns, how to run it).

**D. Social: proof and newsletter**
- Review-request flows that work for advisors within compliance. Client story formats.
- Advisor newsletter examples: structure, length, frequency. Signup placement.
- Output: a review request script (compliance-flagged), a story template, a newsletter template, and the first 3 issues outlined.

**E. Technology: admin first**
- AI meeting-note tools built for advisors. Find 4–6 and compare: what each does, integrations (CRM, Excel), data handling and security posture, archiving, and whether it's known to be used in the Advisors Excel network.
- CRM options common at small RIAs, and whether AE provides one.
- Online scheduling that fits compliance. Client-portal and document-collection options.
- How Excel and Income Solver fit: what stays, and what connects.
- Output: a comparison table per category with Fit / Effort / Compliance notes / Ask-AE-first. Cost shown only as Low / Med / High plus "confirm current pricing."

**F. Website and first step**
- Re-check the live site for the Phase 1 issues: the /what-we-do/ link, the Disclosures link, the Events menu item, phone-gated checklist.
- Look at the sample-plan pages and booking pages of 3–5 advisor sites that do it well.
- Output: quick fixes vs. bigger changes, plus a wireframe description of the sample-plan page.

## Step 3: Write
- Writer agent: draft `phase-2/deck.md` (slide by slide, per the spec) and `phase-2/playbook.md` (the full working detail).
- Plain English and a headline that makes the point on every slide, following the readability rules in the spec. No pricing.
- Write 5 real sample posts and 3 newsletter outlines in Vitou's voice, ready for compliance review.

## Step 4: Review (separate agents, in order)
1. **Fact-checker**: every claim traces to `research/` or `CONTEXT.md`, and the tags are right. Recheck anything load-bearing.
2. **Compliance reader**: flag anything that reads like a promise of results, an untagged testimonial, or a tool recommended without the AE approval caveat.
3. **Owner reader (as Jack)**: is every slide clear on a first read? Does he know what to do Monday? List anything confusing.
4. **Auditor**: no pricing, nothing about Jim's health, no contradictions with the Phase 1 report, every unknown listed as a question.

## Step 5: Build
- Merge editor: build `designs/Vitou Phase 2 Deck.dc.html` (1920×1080) and `designs/Vitou Phase 2 Playbook.dc.html` (Letter, flowing document) in the Analyst Dossier style. Match the existing Vitou report and pitch deck. Use inline styles and repeat the literal values on every slide.
- Update `clients/vitou-financial-services/notes.md` with what was delivered and the 30-day check-in.

## Done when
- The deck and playbook are built, with every factual claim tagged and sourced in an appendix.
- The questions-for-Jack slide covers every unknown.
- A grep for `$`, "price", "pricing", "package", "hire" in client-facing Phase 2 files returns only tool cost *levels*.
- A summary for James: what was built, which findings were surprising, what still needs Jack's answers.
