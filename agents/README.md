# Agents

One file per role. `workflow/run-teardown.js` tells each agent to read its file and the standards, so editing a prompt here changes the next run.

| Stage | Agent | Input | Output |
|---|---|---|---|
| draft | researcher | brief, captures | `evidence.md` |
| draft | writer | brief, evidence | `draft-a.md` |
| — | GPT (manual) | brief, researcher + writer prompts, standards | `draft-b.md` |
| finish | merge-editor | both drafts | `merged.md` |
| finish | fact-checker | merged | `final.md`, `fact-check-log.md` |
| finish | auditor | final | pass / fix list (up to 3 loops) |
| finish | owner-reader | final | clarity flags, first move |
