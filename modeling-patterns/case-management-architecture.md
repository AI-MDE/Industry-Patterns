# Case Management Reference Architecture

## Purpose

Case management is a useful MDE reference application because it is not one fixed solution. It is an assembly of reusable business modeling patterns specialized by industry patterns and then customized for a particular organization.

## Core architecture principle

**The application owns business semantics and the entire business-user experience. BPMN Server owns process orchestration.**

### MDE application owns

- business entities and relationships
- authoritative case/business data
- business rules and decisions
- business operations and validation
- roles and authorization
- pages, forms, dashboards and reports
- Work / To-Do user experience
- business and integration verification

### BPMN Server owns

- process sequence and routing
- process execution state
- human-task lifecycle
- timers, waits and escalations
- events and correlations
- parallel paths and synchronization
- process execution history

BPMN is headless from the business user's perspective. Designer and administrative process tooling can remain separate for process authors and operators.

## Data ownership

The application is the system of record for business state. BPMN is the system of record for process state.

A BPMN process stores references to business objects rather than copies of business objects. Typical process context contains `caseId`, `requestId`, or other correlation IDs plus legitimate orchestration state. Business attributes remain in the application repository.

## Business rules

Business policy belongs in the application. BPMN calls an application rule or operation using a business-object ID. The application loads current data, evaluates the rule, and returns an outcome. BPMN routes using that outcome.

This separates a business-policy change from a process-orchestration change.

## User interaction

All business UI lives in the MDE application. BPMN exposes backend task APIs. The application provides My Work, Available Work, Team Work, Overdue and Completed views and enriches task references with current domain data.

**BPMN tells the application what work is pending; the application tells BPMN when the work is complete.**

## Case management is a composition

Case management should not be treated as one modeling pattern. It is an assembly of patterns such as:

- Case / Work Item
- Request–Review–Decision
- Assignment / Work Queue
- Approval
- Document / Evidence
- State / Lifecycle
- Business Decision
- Escalation / SLA
- Exception
- Audit / History

Industry patterns specialize and compose these reusable modeling patterns into recognizable solutions such as insurance claims, underwriting, professional services, compliance, permits, procurement and customer onboarding.

## Architectural shorthand

- Entity owns business state.
- Rule owns business decisions.
- Page/use case owns business interaction.
- Application owns business data and the complete business-user UI.
- BPMN owns orchestration and process execution state.
- The integration boundary is primarily IDs, operations, outcomes and task lifecycle.
