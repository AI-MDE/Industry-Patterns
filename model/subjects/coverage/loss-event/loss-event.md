---
type: entity
title: "Loss Event"
---

# Loss Event

Subject: [Insurance Coverage and Claims](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

An occurrence or circumstance that may give rise to one or more Claims.

Logical attributes: Loss Event Identifier; Event Type; Occurred Start; Occurred End; Reported Date; Location; Description; Catastrophe Reference; Event Status.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#loss-event) | Loss Event |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Loss Event | gives rise to | [Claim](../coverage/claim.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
