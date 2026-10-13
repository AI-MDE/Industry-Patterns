# Professional Services Pattern

## Intent

Model organizations that deliver professional work through client engagements, projects or matters, assignments, time and expenses, approvals, deliverables, billing, and payment.

MDE selection signals include client engagement, project delivery, billable work, approvals, invoicing, resource planning, utilization, or matter management.

## Business overview

The Professional Services profile sits on top of reusable enterprise domains.

The industry-specific delivery flow is:

**Client Role → Engagement → Project/Matter → Professional Assignment → Deliverable/Billing Event**

Shared domains provide agreements, workforce structure, projects and tasks, time and expense recording, approvals, accounting, invoicing, receivables, and payment. Professional Services adds the semantics that distinguish expert client work: engagements, matters, practice areas, professional assignments, deliverables, and professional billing triggers.

## Profile composition

Professional Services does not own the generic enterprise concepts needed to run the business. It composes shared domains and adds professional-service-specific semantics.

### Reused concepts

- Party / Client role
- Agreement / Service Agreement
- Organization and Human Resources
- Skill and workforce capability
- Project, Task, Work Effort, Time Entry, and Approval
- Resource planning and assignment
- Expense, Invoice, Invoice Line, Receivable, Payment, and Client Account
- Service Offering

### Professional Services concepts

- Engagement
- Matter
- Practice Area
- Professional Service Assignment
- Deliverable
- Billing Event
- Professional Billing Rate, when industry-specific pricing behavior is required

## Enterprise extensions

- Practice Area and Service Offering
- Skill and Resource Plan
- Client Account
- Matter
- Hierarchical Work Effort
- Billing Event for milestone-, time-, or expense-driven billing

## Important relationship roles

See [canonical important relationship roles](behavior/professional-services.md#important-relationship-roles).

## Modeling questions

1. Does the organization distinguish engagement, project, matter, and work effort?
2. Is billing based on time, expenses, fixed fees, milestones, retainers, or a combination?
3. Which records require approval, by whom, and in what sequence?
4. Are deliverables formally tracked and accepted?
5. Are skills, resource plans, capacity, and utilization required?
6. At which level are billing rates established and overridden?
7. Are multiple currencies, taxes, or legal entities required?

## Anti-patterns

- **Project as Everything** — collapsing engagement, agreement, work, billing, and delivery into Project.
- **User Equals Professional** — confusing authentication identity with the business role and resource.
- **Invoice Directly from Project** — omitting invoice lines and therefore losing the reason and composition of a charge.

## Current boundary

This pattern provides business context, concepts, relationships, and operational structure. It does not yet contain formal MDE capabilities, use cases, business-rule definitions, state-transition models, pages, or test scenarios.

## Detailed logical model

Use the following selections to navigate the canonical definitions. Detailed relationships belong to the domain; these tables guide the choice of concepts.

### Simple variant

| Concept | Definition | Logical attributes |
|---|---|---|
| Client | Canonical definition: [Client](../model/subjects/party/party/customer.md). | See canonical concept for logical attributes. |
| Professional | Canonical definition: [Professional](../model/subjects/workforce/worker/worker.md). | See canonical concept for logical attributes. |
| Project | Canonical definition: [Project](../model/subjects/work/project/project.md). | See canonical concept for logical attributes. |
| Task | Canonical definition: [Task](../model/subjects/work/work-effort/work-effort.md). | See canonical concept for logical attributes. |
| Time Entry | Canonical definition: [Time Entry](../model/subjects/workforce/time-entry/time-entry.md). | See canonical concept for logical attributes. |
| Expense | Canonical definition: [Expense](../model/subjects/finance/invoice/expense.md). | See canonical concept for logical attributes. |
| Invoice | Canonical definition: [Invoice](../model/subjects/finance/invoice/invoice.md). | See canonical concept for logical attributes. |

### Standard extensions

| Concept | Definition | Logical attributes |
|---|---|---|
| Engagement | Canonical definition: [Engagement](../model/subjects/agreement/agreement/engagement.md). | See canonical concept for logical attributes. |
| Service Agreement | Canonical definition: [Service Agreement](../model/subjects/agreement/agreement/agreement.md). | See canonical concept for logical attributes. |
| Project Assignment | Canonical definition: [Project Assignment](../model/subjects/work/work-effort/assignment.md). | See canonical concept for logical attributes. |
| Billing Rate | Canonical definition: [Billing Rate](../model/subjects/product/offering/price.md). | See canonical concept for logical attributes. |
| Deliverable | Canonical definition: [Deliverable](../model/subjects/work/project/deliverable.md). | See canonical concept for logical attributes. |
| Approval | Canonical definition: [Approval](../model/subjects/case/decision/approval.md). | See canonical concept for logical attributes. |
| Invoice Line | Canonical definition: [Invoice Line](../model/subjects/finance/invoice/invoice-line.md). | See canonical concept for logical attributes. |
| Payment | Canonical definition: [Payment](../model/subjects/finance/payment/payment.md). | See canonical concept for logical attributes. |

### Relationship model

See [canonical relationships](behavior/professional-services.md#relationship-model).

### Enterprise concepts

- **Practice Area** — Canonical concept: [Practice Area](#concepts-applications-typically-add).
- **Service Offering** — Canonical concept: [Service Offering](../model/subjects/product/offering/offering.md).
- **Skill** — Canonical concept: [Skill](../model/subjects/workforce/worker/skill.md).
- **Resource Plan** — Canonical concept: [Resource Plan](#concepts-applications-typically-add).
- **Client Account** — Canonical concept: [Client Account](../model/subjects/party/customer-account/customer-account.md).
- **Matter** — Canonical concept: [Matter](../model/subjects/case/case/case.md).
- **Work Effort** — Canonical concept: [Work Effort](../model/subjects/work/work-effort/work-effort.md).
- **Billing Event** — Canonical concept: [Billing Event](../model/subjects/finance/invoice/charge.md).

### Physical mapping

Keep logical names authoritative. Example physical mappings are Client → `client`, Client Identifier → `client_id`, Service Agreement → `service_agreement`, Project Assignment → `project_assignment`, Time Entry → `time_entry`, Billing Rate → `billing_rate`, and Invoice Line → `invoice_line`. Final naming is generated by the selected technology-stack rules.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Client | [Client](../model/subjects/party/party/customer.md) | [Project](../model/subjects/work/project/README.md) |
| Professional | [Professional](../model/subjects/workforce/worker/worker.md) | [Project](../model/subjects/work/project/README.md) |
| Project | [Project](../model/subjects/work/project/project.md) | [Project](../model/subjects/work/project/README.md) |
| Task | [Task](../model/subjects/work/work-effort/work-effort.md) | [Project](../model/subjects/work/project/README.md) |
| Time Entry | [Time Entry](../model/subjects/workforce/time-entry/time-entry.md) | [Project](../model/subjects/work/project/README.md) |
| Expense | [Expense](../model/subjects/finance/invoice/expense.md) | [Project](../model/subjects/work/project/README.md) |
| Invoice | [Invoice](../model/subjects/finance/invoice/invoice.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Engagement | [Engagement](../model/subjects/agreement/agreement/engagement.md) | [Project](../model/subjects/work/project/README.md) |
| Service Agreement | [Service Agreement](../model/subjects/agreement/agreement/agreement.md) | [Project](../model/subjects/work/project/README.md) |
| Project Assignment | [Project Assignment](../model/subjects/work/work-effort/assignment.md) | [Project](../model/subjects/work/project/README.md) |
| Billing Rate | [Billing Rate](../model/subjects/product/offering/price.md) | [Project](../model/subjects/work/project/README.md) |
| Deliverable | [Deliverable](../model/subjects/work/project/deliverable.md) | [Project](../model/subjects/work/project/README.md) |
| Approval | [Approval](../model/subjects/case/decision/approval.md) | [Project](../model/subjects/work/project/README.md) |
| Invoice Line | [Invoice Line](../model/subjects/finance/invoice/invoice-line.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Payment | [Payment](../model/subjects/finance/payment/payment.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Practice Area | [Practice Area](#concepts-applications-typically-add) | [Project](../model/subjects/work/project/README.md) |
| Service Offering | [Service Offering](../model/subjects/product/offering/offering.md) | [Project](../model/subjects/work/project/README.md) |
| Skill | [Skill](../model/subjects/workforce/worker/skill.md) | [Project](../model/subjects/work/project/README.md) |
| Resource Plan | [Resource Plan](#concepts-applications-typically-add) | [Project](../model/subjects/work/project/README.md) |
| Client Account | [Client Account](../model/subjects/party/customer-account/customer-account.md) | [Project](../model/subjects/work/project/README.md) |
| Matter | [Matter](../model/subjects/case/case/case.md) | [Project](../model/subjects/work/project/README.md) |
| Work Effort | [Work Effort](../model/subjects/work/work-effort/work-effort.md) | [Project](../model/subjects/work/project/README.md) |
| Billing Event | [Billing Event](../model/subjects/finance/invoice/charge.md) | [Project](../model/subjects/work/project/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Practice Area**: service line, department, or specialty; owns Engagements, groups Professionals, and provides Service Offerings.
- **Resource Plan**: forecasts staffing needs and allocates Professional capacity.
