---
type: primary-entity
title: "Trouble Ticket"
---

# Trouble Ticket

Domain: [Telecommunications](../README.md). ABE: [Trouble Ticket](README.md).

## Definition and detail

A managed case concerning degraded, unavailable, incorrect, or disputed Service behavior.

Logical attributes: Ticket Identifier; Ticket Number; Ticket Type; Ticket Status; Reported At; Customer; Service; Priority; Impact; Assigned Group; Resolved At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/telecommunications.md](../../../../patterns/telecommunications.md#trouble-ticket) | Trouble Ticket |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Trouble Ticket](trouble-ticket.md) | concerns | [Service Instance](../service-instance/service-instance.md) | M:1 | [telecommunications](../../../../patterns/telecommunications.md) |
