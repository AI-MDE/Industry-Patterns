---
type: entity
title: "Claim Payment"
---

# Claim Payment

Domain: [Insurance](../README.md). ABE: [Loss Event](README.md).

## Definition and detail

A payment made to satisfy an approved benefit, expense, service, or Settlement.

Logical attributes: Claim Payment Identifier; Payment Type; Payment Status; Requested Date; Approved Date; Issued Date; Amount; Currency; Payee; Payment Reference.

## Source terminology

| Source | Term |
|---|---|
| [patterns/insurance.md](../../../../patterns/insurance.md#claim-payment) | Claim Payment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Settlement or approved expense (review) | produces | [Claim Payment](claim-payment.md) | 1:M | [insurance](../../../../patterns/insurance.md) |
