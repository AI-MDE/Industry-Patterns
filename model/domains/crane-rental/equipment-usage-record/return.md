---
type: entity
title: "Return"
---

# Return

Domain: [Crane Rental](../README.md). ABE: [Equipment Usage Record](README.md).

## Definition and detail

The return of Equipment or Components to a Provider-controlled location or transfer of custody.

Logical attributes: Return Identifier; Return Status; Returned At; Asset List; Receiving Location; Received By; Meter Reading; Fuel Level; Condition Summary.

## Source terminology

| Source | Term |
|---|---|
| [patterns/crane-rental-orchestration.md](../../../../patterns/crane-rental-orchestration.md#return) | Return |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Return](return.md) | may produce | Damage Report or Maintenance Work Order (review) | 1:M | [crane-rental-orchestration](../../../../patterns/crane-rental-orchestration.md) |
