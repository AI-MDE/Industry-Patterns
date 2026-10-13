---
type: entity
title: "Worker"
---

# Worker

Subject: [Workforce](../README.md). ABE: [Worker](README.md).

Also known as: Technician (Equipment Service), Professional (Professional Services).

## Definition and detail

Staff member who performs service work. Active or Inactive; never deleted.

### In industries

- **Professional** (Professional Services): Staff member, contractor, partner, consultant, lawyer, accountant, or other service provider. Attributes: Professional Identifier; Professional Name; Professional Role; Professional Status; Standard Billing Rate; Standard Cost Rate; Email Address.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#technician) | Technician |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Professional |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Professional | manages | [Engagement](../../agreement/agreement/engagement.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Professional | participates through | [Project Assignment](../../work/work-effort/assignment.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Professional | records | [Time Entry](../time-entry/time-entry.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Professional | submits | [Expense](../../finance/invoice/expense.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
