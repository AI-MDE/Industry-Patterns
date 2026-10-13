---
type: entity
title: "Demand"
---

# Demand

Subject: [Scheduling and Reservations](../README.md). ABE: [Demand](README.md).

Also known as: Manufacturing Requirement (Manufacturing).

## Definition and detail

A schedulable requirement to perform a Service.

Logical attributes may include: Demand Identifier; Service; Subject; Client; Priority; Duration; Earliest Start; Latest Finish; Location Requirement; Requirement Set; Source; Status.

Demand may originate from:

- an on-demand Service Request;
- a Recurring Service Plan;
- a Maintenance Plan;
- an Inspection Plan;
- a condition or event;
- manual scheduling.

The scheduler should not depend on how the Demand was created.

### In industries

- **Manufacturing Requirement** (Manufacturing): A demand for a quantity of Product by a required date and destination. Attributes: Requirement Identifier; Requirement Type; Product Version; Quantity; Unit; Required Date; Destination; Priority; Source.

## Source terminology

| Source | Term |
|---|---|
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#demand) | Demand |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#manufacturing-requirement) | Manufacturing Requirement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Manufacturing Requirement | produces | [Manufacturing Order](../../production/manufacturing-order/manufacturing-order.md) | 1:M | [manufacturing](../../../../industry-patterns/manufacturing.md) |
