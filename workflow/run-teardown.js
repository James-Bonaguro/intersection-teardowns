export const meta = {
  name: "run-teardown",
  description: "Intersection Strategies teardown. stage 'draft': research + draft A. stage 'finish': merge + fact-check + audit + owner check.",
  phases: [
    { name: "research", title: "Research" }, { name: "draft", title: "Draft A" },
    { name: "merge", title: "Merge" }, { name: "fact-check", title: "Fact-check" },
    { name: "audit", title: "Audit" }, { name: "owner", title: "Owner check" }
  ]
};

const a = args ?? {};
const REPO = a.repo_path || "intersection-teardowns";
const slug = a.slug;
const DIR = REPO + "/clients/" + slug + "/";
if (!slug || !["draft", "finish"].includes(a.stage)) {
  return { __hatchWorkflowControl: "blocked", result: { blocked_reason: "missing_inputs",
    message: "Launch with { slug: \"<client-slug>\", stage: \"draft\" | \"finish\", repo_path?: \"intersection-teardowns\" }. The brief must exist at clients/<slug>/brief.json." } };
}

const role = (file) => "Read " + REPO + "/agents/" + file + ".md and every file in " + REPO + "/standards/, then follow them exactly. " +
  "The client brief is " + DIR + "brief.json. Work in " + DIR + ". ";

if (a.stage === "draft") {
  phase("research");
  await agent(role("researcher") + "Captures, if any, are in " + DIR + "captures/. Save " + DIR + "evidence.md. Return done.",
    { key: "research", label: "Research", timeoutMs: 900000 });
  phase("draft");
  await agent(role("writer") + "Use " + DIR + "evidence.md. Save " + DIR + "draft-a.md. Return done.",
    { key: "draft-a", label: "Write draft A", timeoutMs: 600000 });
  return "Draft A saved to " + DIR + "draft-a.md.\nNext: GPT writes draft-b.md from the same brief and prompts, without seeing draft A. Then run stage: \"finish\".";
}

phase("merge");
await agent(role("merge-editor") + "Merge " + DIR + "draft-a.md and " + DIR + "draft-b.md. Save " + DIR + "merged.md. Return done.",
  { key: "merge", label: "Merge drafts", timeoutMs: 600000 });

phase("fact-check");
await agent(role("fact-checker") + "Check " + DIR + "merged.md. Save " + DIR + "final.md and " + DIR + "fact-check-log.md. Return done.",
  { key: "fact-check", label: "Fact-check", timeoutMs: 900000 });

phase("audit");
const auditSchema = { type: "object", required: ["passed", "retryable", "feedback"],
  properties: { passed: { type: "boolean" }, retryable: { type: "boolean" }, feedback: { type: "string" }, open_items: { type: "string" } } };
let pass = 0, audit = { passed: false };
while (pass < 3 && !audit.passed) {
  pass += 1;
  log("Audit pass " + pass + " of 3");
  audit = await agent(role("auditor") + "Audit " + DIR + "final.md. Return the JSON.",
    { key: "audit-" + pass, label: "Audit", schema: auditSchema, timeoutMs: 300000 });
  if (!audit.passed && !audit.retryable) break;
  if (!audit.passed && pass < 3) {
    await agent(role("writer") + "Fix every item below in " + DIR + "final.md and save it. Do not add facts without a tagged source.\n" + audit.feedback + "\nReturn done.",
      { key: "repair-" + pass, label: "Repair", timeoutMs: 600000 });
  }
}

phase("owner");
const ownerSchema = { type: "object", required: ["clear", "confusing_parts", "first_move"],
  properties: { clear: { type: "boolean" }, confusing_parts: { type: "string" }, first_move: { type: "string" } } };
const owner = await agent(role("owner-reader") + "Read " + DIR + "final.md. Return the JSON.",
  { key: "owner", label: "Owner check", schema: ownerSchema, timeoutMs: 300000 });
if (!owner.clear) {
  await agent(role("writer") + "Rewrite these parts of " + DIR + "final.md in plain language, changing no facts: " + owner.confusing_parts + " Return done.",
    { key: "owner-fix", label: "Clarify", timeoutMs: 600000 });
}

return "Final: " + DIR + "final.md\nFact-check log: " + DIR + "fact-check-log.md\n" +
  "Audit: " + pass + " pass(es), " + (audit.passed ? "passed" : "open items: " + (audit.open_items || audit.feedback)) + "\n" +
  "Owner's first move: " + owner.first_move + "\n\nNext: read the fact-check log, then lay final.md into the report template.";
