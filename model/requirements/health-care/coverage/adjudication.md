---
type: entity
title: "Adjudication"
---

# Adjudication

Domain: [Health Care](../README.md). ABE: [Coverage](README.md).

## Definition and detail

A Payer decision concerning coverage and financial responsibility.

Logical attributes: Adjudication Identifier; Decision Date; Decision Status; Allowed Amount; Paid Amount; Patient Responsibility Amount; Denial Reason; Adjustment Reason.

## Physical Therapy context

A Payer decision determining allowed, paid, adjusted, denied, and Patient-responsibility amounts.

Logical attributes: Adjudication Identifier; Decision Date; Decision Status; Allowed Amount; Paid Amount; Adjustment Amount; Patient Responsibility; Denial Reason; Remittance Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#adjudication) | Adjudication |
| [patterns/physical-therapy-clinic.md](../../../../patterns/physical-therapy-clinic.md#adjudication) | Adjudication |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Claim](claim.md) | receives | [Adjudication](adjudication.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Adjudication](adjudication.md) | may produce | [Payment](../../finance/invoice/payment.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
| [Claim](claim.md) | receives | [Adjudication](adjudication.md) | 1:M | [physical-therapy-clinic](../../../../patterns/physical-therapy-clinic.md) |
