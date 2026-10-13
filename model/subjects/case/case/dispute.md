---
type: entity
title: "Dispute"
---

# Dispute

Subject: [Cases and Decisions](../README.md). ABE: [Case](README.md).

Also known as: Commercial Dispute (Crane Rental), Dispute (Financial Services).

## Definition and detail

A Customer challenge concerning scope, time, condition, responsibility, rate, charge, damage, or Invoice.

Logical attributes: Dispute Identifier; Dispute Type; Status; Opened Date; Customer; Job Order; Invoice; Disputed Amount; Reason; Evidence; Resolution.

### In industries

- **Dispute** (Financial Services): A formal challenge to a Transaction, fee, balance, service, or decision. Attributes: Dispute Identifier; Dispute Type; Dispute Status; Opened Date; Customer; Account; Transaction; Disputed Amount; Currency; Reason; Resolution.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#commercial-dispute) | Commercial Dispute |
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#dispute) | Dispute |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Transaction (review) | may be challenged by | Dispute | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Dispute | may produce | [Adjustment](../../finance/invoice/adjustment.md) | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
