# Standard operating procedure

Teardowns are portfolio proof and a door-opener for other work, not a product. No pricing, packages, or sales call to action in anything a client sees.

Roles: **James** (owner, approves, delivers) · **Agents** (see `agents/`) · **GPT** (writes the independent second draft).

## 1 · Introduce
- Use `designs/Teardown Pitch Deck.dc.html`. Set the prospect name in its Tweaks.
- Offer two uses: a **self** teardown (their own company) or a **competitor** teardown (a rival).
- Never quote fees or packages anywhere client-facing.

## 2 · Kickoff (15 min)
- Copy `templates/brief.json` to `clients/<slug>/brief.json`.
- Ask the questions in `templates/kickoff-questions.md`. Fill in the brief.
- If the industry is regulated (financial, legal, medical), set `regulated: true`. Every marketing move then allows for compliance review.

## 3 · Capture socials (10 min)
- Follow `templates/social-capture-checklist.md`. Screenshots go in `clients/<slug>/captures/`.
- Subscribe to their newsletter 2–3 weeks before delivery, if one exists.

## 4 · Draft A
- Run `workflow/run-teardown.js` with `stage: "draft"` and the brief. Agents: researcher → writer.
- Output: `clients/<slug>/draft-a.md`.

## 5 · Draft B
- Give GPT the brief, `agents/researcher.md`, `agents/writer.md`, and everything in `standards/`. It must not see draft A.
- Save as `clients/<slug>/draft-b.md`.

## 6 · Finish
- Run `workflow/run-teardown.js` with `stage: "finish"`. Agents: merge editor → fact-checker → auditor (up to 3 passes) → owner reader.
- Output: `final.md` and `fact-check-log.md`.
- **James reads the fact-check log.** Anything cut or corrected that you already told the client about gets addressed before delivery.

## 7 · Layout
- Duplicate `designs/Teardown Report Template.dc.html` as `designs/<Company> Teardown.dc.html`. Lay `final.md` in section by section (`standards/report-structure.md` maps one to one).
- Lay in the cover doc from `templates/cover-doc.md` the same way (fill its `{{placeholders}}`), in the Analyst Dossier style.
- Every page fits letter. Export both to PDF. Save to `clients/<slug>/`.
- Every client package = **report + cover doc**.

## 8 · Deliver
- Send the report and cover doc with `templates/delivery-email.md`. Offer a call, don't require one.

## 9 · Follow up
- At 30 days: is move 1 running? If yes, introduce move 2. If not, find out why.
- Log the answer to two questions in `clients/<slug>/notes.md`: "What did this help you decide?" and "What would you do next?"

## Quality gates (nothing ships without all five)
1. Structure matches `standards/report-structure.md`.
2. Every load-bearing fact is `RECHECKED` or `PUBLISHED`.
3. Social graded against `standards/social-standard.md`.
4. One clear first move.
5. James has read it start to finish.
