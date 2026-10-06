---
type: entity
title: "Ticket Coupon"
---

# Ticket Coupon

Domain: [Travel](../README.md). ABE: [Travel Document](README.md).

## Definition and detail

A ticketed entitlement for one transport Segment or service portion.

Logical attributes: Coupon Identifier; Coupon Number; Coupon Status; Segment; Fare Basis; Validating Supplier; Used At.

## Source terminology

| Source | Term |
|---|---|
| [patterns/travel.md](../../../../patterns/travel.md#ticket-coupon) | Ticket Coupon |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Ticket (review) | contains | [Ticket Coupon](ticket-coupon.md) | 1:M | [travel](../../../../patterns/travel.md) |
