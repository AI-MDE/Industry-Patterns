---
type: entity
title: "Ticket Coupon"
---

# Ticket Coupon

Subject: [Travel](../README.md). ABE: [Travel Document](README.md).

## Definition and detail

A ticketed entitlement for one transport Segment or service portion.

Logical attributes: Coupon Identifier; Coupon Number; Coupon Status; Segment; Fare Basis; Validating Supplier; Used At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#ticket-coupon) | Ticket Coupon |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Ticket (review) | contains | Ticket Coupon | 1:M | [travel](../../../../industry-patterns/travel.md) |
