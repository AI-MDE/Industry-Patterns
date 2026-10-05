---
type: entity
title: "Time Entry"
---

# Time Entry

Domain: [Professional Services](../README.md). ABE: [Project](README.md).

## Definition and detail

Recorded labor time.

Logical attributes: Time Entry Identifier; Work Date; Hours Worked; Billable Indicator; Time Entry Status; Work Description.

## Source terminology

| Source | Term |
|---|---|
| [patterns/professional-services.md](../../../../patterns/professional-services.md#detailed-logical-model) | Time Entry |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Project](project.md) | receives | [Time Entry](time-entry.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Task](task.md) | is supported by | [Time Entry](time-entry.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
| [Professional](professional.md) | records | [Time Entry](time-entry.md) | 1:M | [professional-services](../../../../patterns/professional-services.md) |
