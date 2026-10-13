---
type: entity
title: "Time Entry"
---

# Time Entry

Subject: [Workforce](../README.md). ABE: [Time Entry](README.md).

Also known as: Timesheet (Crane Rental), Time Entry (Equipment Service), Labor Entry (Manufacturing).

## Definition and detail

Recorded labor time.

Logical attributes: Time Entry Identifier; Work Date; Hours Worked; Billable Indicator; Time Entry Status; Work Description.

### In industries

- **Timesheet** (Crane Rental): A person's recorded working, travel, standby, overtime, or allowance time. Attributes: Timesheet Identifier; Person; Job Order; Work Date; Time Type; Start Time; End Time; Hours; Approval Status; Approved By.
- **Time Entry** (Equipment Service): Labor recorded by a Technician against a request and optionally a Work Effort: date, hours, billable flag, and approval lifecycle.
- **Labor Entry** (Manufacturing): A Person's recorded production time or activity. Attributes: Labor Entry Identifier; Operator; Role; Operation Execution; Start Time; End Time; Hours; Time Type; Approval Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#timesheet) | Timesheet |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#time-entry) | Time Entry |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#labor-entry) | Labor Entry |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Time Entry |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](../../work/project/project.md) | receives | Time Entry | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Task](../../work/work-effort/work-effort.md) | is supported by | Time Entry | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| [Professional](../worker/worker.md) | records | Time Entry | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
