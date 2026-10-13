---
type: entity
title: "Agreement Term"
---

# Agreement Term

Subject: [Agreements and Entitlements](../README.md). ABE: [Agreement](README.md).

## Definition and detail

A structured condition of an Agreement.

Logical attributes: Agreement Term Identifier; Term Type; Term Value; Unit; Effective From; Effective Through.

## Equipment Service context

Structured clause: payment schedule, renewal, warranty, penalty, insurance, return, with value, unit, and effective period.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#agreement-term) | Agreement Term |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#agreement-term) | Agreement Term |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Agreement](agreement.md) | contains | Agreement Term | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
