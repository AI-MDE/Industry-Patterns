---
type: primary-entity
title: "Loss Event"
---

# Loss Event

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

An occurrence or circumstance that may give rise to one or more Claims.

Logical attributes: Loss Event Identifier; Event Type; Occurred Start; Occurred End; Reported Date; Location; Description; Catastrophe Reference; Event Status.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#loss-event) | Loss Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Loss Event](loss-event.md) | gives rise to | [Claim](claim.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
