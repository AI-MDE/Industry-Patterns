---
type: primary-entity
title: "Charge Event"
---

# Charge Event

Domain: [Crane Rental](../README.md). ABE: [Charge Event](README.md).

## Definition and detail

A billable occurrence or measured quantity arising from the Agreement or Job.

Logical attributes: Charge Event Identifier; Charge Type; Status; Occurred At; Job Order; Resource; Quantity; Unit; Rate; Amount; Currency; Source Evidence.

Charge types may include minimum rental, hourly or daily rental, operating time, standby, overtime, crew, mobilization, demobilization, transport, permit, engineering, rigging, fuel, environmental fee, damage, cleaning, cancellation, or extension.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#charge-event) | Charge Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Job Order](../rental-offering/job-order.md) | produces | [Charge Event](charge-event.md) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
| [Invoice Line](../../finance/invoice/invoice-line.md) | derives from | [Charge Event](charge-event.md) | M:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
