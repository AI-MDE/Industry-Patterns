---
type: entity
title: "Case"
---

# Case

Subject: [Cases and Decisions](../README.md). ABE: [Case](README.md).

Also known as: Customer Case (E-Commerce), Warranty or Field Issue (Manufacturing), Matter (Professional Services), Trouble Ticket (Telecommunications).

## Definition and detail

A service inquiry, complaint, delivery problem, dispute, or exception related to commerce activity.

Logical attributes: Case Identifier; Case Type; Case Status; Priority; Opened At; Closed At; Resolution; Customer reference.

### In industries

- **Warranty or Field Issue** (Manufacturing): A reported failure, complaint, return, or service condition associated with deployed output. Attributes: Field Issue Identifier; Issue Type; Status; Reported Date; Product Unit or Lot; Customer; Symptom; Failure Mode; Resolution.
- **Matter** (Professional Services): case-like work unit governed by an Engagement.
- **Trouble Ticket** (Telecommunications): A managed case concerning degraded, unavailable, incorrect, or disputed Service behavior. Attributes: Ticket Identifier; Ticket Number; Ticket Type; Ticket Status; Reported At; Customer; Service; Priority; Impact; Assigned Group; Resolved At.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#customer-case) | Customer Case |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#warranty-or-field-issue) | Warranty or Field Issue |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Matter |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#trouble-ticket) | Trouble Ticket |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Customer (review) | opens | Customer Case | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Trouble Ticket | concerns | [Service Instance](../../network/service-instance/service-instance.md) | M:1 | [telecommunications](../../../../industry-patterns/telecommunications.md) |
