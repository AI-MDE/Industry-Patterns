---
type: entity
title: "Delivery"
---

# Delivery

Subject: [Fulfillment and Logistics](../README.md). ABE: [Fulfillment](README.md).

Also known as: Delivery (E-Commerce).

## Definition and detail

The arrival and transfer of Equipment, Components, or custody at a Job Site.

Logical attributes: Delivery Identifier; Delivery Status; Job Order; Movement; Delivered At; Received By; Asset List; Condition; Document Reference.

### In industries

- **Delivery** (E-Commerce): Evidence that fulfillment reached its destination or recipient. Attributes: Delivery Identifier; Delivery Status; Delivered At; Recipient Name; Evidence Reference; Exception Reason.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#delivery) | Delivery |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#delivery) | Delivery |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Delivery | completes | [Transport Movement](shipment.md) | M:1 | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Shipment](shipment.md) | results in | Delivery | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
