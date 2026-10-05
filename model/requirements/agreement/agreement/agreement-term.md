---
type: entity
title: "Agreement Term"
---

# Agreement Term

Domain: [Agreement](../README.md). ABE: [Agreement](README.md).

## Definition and detail

A structured condition of an Agreement.

Logical attributes: Agreement Term Identifier; Term Type; Term Value; Unit; Effective From; Effective Through.

## Equipment Service context

Structured clause: payment schedule, renewal, warranty, penalty, insurance, return, with value, unit, and effective period.

## Source terminology

| Source | Term |
|---|---|
| [patterns/cross-industry.md](../../../../patterns/cross-industry.md#agreement-term) | Agreement Term |
| [patterns/equipment-service.md](../../../../patterns/equipment-service.md#agreement-term) | Agreement Term |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Agreement](agreement.md) | contains | [Agreement Term](agreement-term.md) | 1:M | [cross-industry](../../../../patterns/cross-industry.md) |
