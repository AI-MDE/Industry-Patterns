# Workday behavior-capable catalog objects — evidence audit

Source: user-supplied **Workday_Data_Cloud_Catalog_09162026.xlsx**, extracted on 2026-10-14. This report audits **schema evidence**, not downloaded tenant configuration or Workday's internal application implementation.

## Actual findings

A name-based triage over all 287 Data Cloud business objects identified **35 possible behavior-related objects**, with **290 catalog fields** and **110 declared relationships**. This is a deliberately broad candidate set: ordinary status codes and unrelated events are false positives and must not be treated as executable behavior.

The most promising structurally meaningful source objects are:

| Object | Fields | Relationships | Significance |
| --- | ---: | ---: | --- |
| `business_process_definition` | 7 | 3 | Links to process type, workflow steps and notifications |
| `business_process_type` | 13 | 6 | Includes cancel/correct/rescind permissions and default definition |
| `workflow_step` | 9 | 4 | Step type, order, due date, completion step, security groups |
| `staffing_event` | 79 | 50 | Large operational event object; event relationships need review |
| `onboarding_business_process` | 16 | 6 | Business process lifecycle dates, onboarding status and position |
| `leave_request_event` | 70 | 13 | Leave transaction event, not necessarily an approval workflow |
| `leave_return_event` | 35 | 10 | Return-from-leave event |
| `workflow_step_type` | 0 | 0 | Known type name, no catalog attributes published |
| `workflow_notification` | 0 | 0 | Known type name, no catalog attributes published |

### Explicit catalog relationships

- `business_process_definition.business_process_steps → workflow_step` (FK[], description: all process steps).
- `business_process_definition.business_process_type → business_process_type` (FK).
- `business_process_definition.custom_notifications → workflow_notification` (FK[]).
- `workflow_step.business_process_definition → business_process_definition` (FK).
- `workflow_step.security_groups → security_group` (FK[], authorized performers).
- `workflow_step.due_date → calculated_date` (FK).
- `business_process_type.default_business_process_definition → business_process_definition` (FK).
- `business_process_type.cancelable_by → security_group` (FK[]); parallel privileges for correction and rescission are also included.

These are **actual source-metadata observations**, useful for aligning the MDE metamodel with business-process concepts. Crucially, the catalog describes *fields* and relationships, not the **values** of tenant business-process definitions; it does not say which specific Hire Employee steps are configured or the actual condition expressions.

## Extraction method

Run `python workday/tools/catalog_behavior_candidates.py --catalog-json workday/output/workday-data-cloud-extracted.json --output workday/output/behavior-candidates.json` after producing the catalog JSON with the provided workbook extraction. The script preserves individual source field and relationship descriptions and labels its candidates as schema metadata only. Review false positives, map actual Workday operation documentation, and only then propose canonical reuse.

## External documentation access

Attempted to retrieve the official Workday v47 `Staffing/Hire_Employee.html` and `Staffing.html` directly on 2026-10-14. Neither page was accessible from the browsing interface. No claims of successful bulk WSDL downloads, scraped validation rules, or extracted approval predicates are made.

## Next evidence target

Seek permissioned **tenant Business Process Definitions/configuration export** or complete official operation descriptions, then correlate process definition/type and step instances with Staffing API operation contracts. Retain source provenance and distinguish `explicit-schema`, `published-description`, `tenant-config`, and `inferred` evidence.
