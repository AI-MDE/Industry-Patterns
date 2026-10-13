---
type: entity
title: "Usage Record"
---

# Usage Record

Subject: [Measurement and Usage](../README.md). ABE: [Usage Record](README.md).

Also known as: Equipment Usage Record (Crane Rental), Meter Reading (Equipment Service), Machine Entry (Manufacturing), Product Usage (Manufacturing), Usage Event (Telecommunications).

## Definition and detail

A measured period or quantity of Asset use or availability.

Logical attributes: Usage Identifier; Asset; Job Order; Usage Type; Start Time; End Time; Meter Start; Meter End; Operating Hours; Standby Hours; Source; Verification Status.

### In industries

- **Meter Reading** (Equipment Service): Recorded operating hours, mileage, or cycles at a point in time, with source and reader. Drives usage-based maintenance.
- **Machine Entry** (Manufacturing): A Machine Asset's recorded runtime, setup, idle time, or cycle activity. Attributes: Machine Entry Identifier; Asset; Operation Execution; Start Time; End Time; Runtime; Cycle Count; Downtime; Source.
- **Product Usage** (Manufacturing): A measured or reported use, cycle, operating condition, consumption, or performance event. Attributes: Usage Identifier; Product Unit; Usage Type; Observed At; Value; Unit; Location; Source.
- **Usage Event** (Telecommunications): A raw or source-received record of service consumption or network activity. Attributes: Usage Event Identifier; Event Type; Source; Source Reference; Start Time; End Time; Quantity; Unit; Origin; Destination; Service Identifier; Received At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#equipment-usage-record) | Equipment Usage Record |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#meter-reading-standard) | Meter Reading (Standard) |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#machine-entry) | Machine Entry |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#product-usage) | Product Usage |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#usage-event) | Usage Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Asset (review) | produces | Equipment Usage Record | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Service Instance](../../network/service-instance/service-instance.md) | produces | Usage Event | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
| Usage Event | produces | [Mediation Record](../../../../industry-patterns/telecommunications.md#concepts-applications-typically-add) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |
