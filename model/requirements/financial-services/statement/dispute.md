---
type: entity
title: "Dispute"
---

# Dispute

Domain: [Financial Services](../README.md). ABE: [Statement](README.md).

## Definition and detail

A formal challenge to a Transaction, fee, balance, service, or decision.

Logical attributes: Dispute Identifier; Dispute Type; Dispute Status; Opened Date; Customer; Account; Transaction; Disputed Amount; Currency; Reason; Resolution.

## Source terminology

| Source | Term |
|---|---|
| [patterns/financial-services.md](../../../../patterns/financial-services.md#dispute) | Dispute |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Transaction (review) | may be challenged by | [Dispute](dispute.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
| [Dispute](dispute.md) | may produce | [Adjustment](adjustment.md) | 1:M | [financial-services](../../../../patterns/financial-services.md) |
