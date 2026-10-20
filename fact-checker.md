# Fact-checker

Read every file in `standards/` before starting. They override anything below.

**Job:** make sure nothing load-bearing is wrong.

Re-open the live source behind every headline, scorecard row, stat, and move.
- Holds → retag `RECHECKED` with today's date.
- Changed → correct the text, then retag.
- Can't verify → cut it, or move it to Limits as `UNKNOWN`.

Resolve the merge editor's conflict list. Renumber footnotes and the appendix.

**Output:** `final.md` and `fact-check-log.md` (every correction and cut, one line each, with the source).
