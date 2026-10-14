# Workday reference intake: objects **and** behavior

This folder holds **source evidence for comparison**, not a parallel Workday domain model and not automatically accepted canonical requirements. Start with [the curated public-documentation seed](public-docs-seed.json).

## Status (2026-10-14)

- **Imported as a review input:** 19 manually curated named records in `public-docs-seed.json`: 7 candidate entities, 7 capabilities, and 5 workflows (counts should be reconfirmed if the seed changes). Each is an interpretation of identified public documentation, **not** a machine-extracted Workday tenant or API schema.
- **Not imported:** the full Data Cloud XLSX catalog, Workday WSDL/XSD schemas, full operation directory, or tenant-specific business-process definitions. Public documentation references are listed in the seed; access and reuse rights require checking.
- **Not merged:** nothing has been added to the canonical `model/` or the requirement registry. Existing concepts keep their single ownership and naming.

## Reference sources

1. [Data Cloud Catalog](https://doc.workday.com/admin-guide/en-us/workday-data-cloud/data-out/data-cloud-catalog.html) — curated table and field definitions, types, keys, reference targets and security domains; current documentation links an XLSX download. It is **not** Workday's complete internal model.
2. [SOAP API Reference](https://community-content.workday.com/en-us/public/products/platform-and-product-extensions/soap-api-reference.html) — publicly documented WSDL/XSD interface operations and message schemas. API messages are **not identical to** persistent business object definitions.
3. [Business Process concepts](https://doc.workday.com/admin-guide/en-us/manage-workday/business-processes/business-process-framework-concepts/dan1370797198449.html) and [HCM Business Process Framework](https://doc.workday.com/workday-education/en-us/course-manuals/hcm-core-for-administrators/business-process-framework.html) — initiators, security groups, conditional steps, approval/review chains, notifications, inheritance and overrides, events, completion.
4. [Financial Management process overview](https://doc.workday.com/workday-education/en-us/course-manuals/financial-management-for-administrators/business-process-overview.html) — financial process examples and links between process definitions, events and business data.

## How to analyze this seed

From the repository root, on a machine with Node.js 22.18+ and installed analyzer dependencies:

```sh
cd tools/reference-model-analyzer
npm install
npm run run -- ../../references/workday/public-docs-seed.json --adapter records-json --out output/workday-public-docs
```

Review `normalized.json`, `report.json` and `report.md`. The importer must preserve unknown/unsupported source records rather than discard them. Verify that `Capability` and `Workflow` records are recognized as intended; if not, extend the record adapter and its tests before broad ingestion. Do not mistake a generated mapping score for verified semantic equivalence.

## Next ingestion stages

1. **Schema extraction:** obtain a permitted Data Cloud XLSX; parse tables, columns, types, PK/FK/FK[] references, descriptions and domains. Keep version, source URL, license, and original labels. Add an `xlsx` adapter rather than hand-converting or losing array relationships.
2. **API extraction:** obtain authorized Workday WSDL/XSD files and operation list; parse operations, message shapes, types, service groups and references. Treat them as *interface/capability evidence*, not proof of canonical entities. Build a dedicated adapter with tests.
3. **Behavior extraction:** capture process types, events, preconditions, roles/authorization, step sequencing and branching, approval/deny/send-back, notifications, subprocesses, business rules, outputs, effective dates, inheritance and audit. Public pages establish reusable patterns; **exact definitions and conditional rules normally require authorized tenant exports**. Do not invent them.
4. **Resolve into one model:** match source aliases and candidate entity semantics against `model/subjects/`, then bind capabilities, use cases, workflows and rules to the existing subject that owns the behavior. Prefer existing general modeling patterns for approvals and workflow control. Create a new canonical concept only when a real semantic gap is demonstrated.
5. **Governance:** keep source provenance and uncertainty for every claim, note licensing/access limitations, review conflicting meanings manually, and run `node tools/coherent-model/validate.mjs` plus its tests after any canonical edit.

## Behavior interpretation example

For **Hire Worker**, candidate behavior extracted from the public business-process examples includes authorized initiation, tasks routed to configured roles/security groups, a compensation proposal step, conditional actions where configured, notifications, and a completed process event. This does **not** imply every Workday tenant uses those exact steps, nor that MDE should prescribe a single hiring workflow.

The MDE canonical model should own **Hiring** as a workforce capability, with implementation choices bound to applicable entities and shared Approval, Workflow, Access Control and Audit patterns. Workday remains a cited source with a separately retained alias/provenance record.

## Implemented behavior import

A vendor-neutral `behavior-json` adapter is available in `tools/reference-model-analyzer/`. It preserves capabilities, use-case/process/workflow definitions, rules, roles and events with original source payload and provenance; unknown constructs remain reviewable. A staged [Workday behavior example](behavior-public-examples.json) exercises the format. Run `npm run run -- ../../references/workday/behavior-public-examples.json --adapter behavior-json --out output/workday-behavior` from the analyzer directory. This is an implemented staging capability, **not** full Workday extraction or verified semantic integration. Full catalog XLSX and WSDL/XSD ingestion and automatic behavior conflict analysis remain pending.
