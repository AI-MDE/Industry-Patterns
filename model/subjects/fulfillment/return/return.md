---
type: entity
title: "Return"
---

# Return

Subject: [Fulfillment and Logistics](../README.md). ABE: [Return](README.md).

Also known as: Return (E-Commerce).

## Definition and detail

The return of Equipment or Components to a Provider-controlled location or transfer of custody.

Logical attributes: Return Identifier; Return Status; Returned At; Asset List; Receiving Location; Received By; Meter Reading; Fuel Level; Condition Summary.

### In industries

- **Return** (E-Commerce): Authorization and tracking for goods or value being returned after fulfillment. Attributes: Return Identifier; Return Number; Return Status; Requested At; Authorized At; Received At; Return Method; Return Reason.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#return) | Return |
| [industry-patterns/e-commerce.md](../../../../industry-patterns/e-commerce.md#return) | Return |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Return | may produce | Damage Report or Maintenance Work Order (review) | 1:M | [crane-rental-orchestration](../../../../industry-patterns/crane-rental-orchestration.md) |
| [Order](../../request/order/order.md) | receives | Return | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Return | contains | [Return Line](return-line.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
| Return | may cause | [Refund](../../finance/payment/refund.md) | 1:M | [e-commerce](../../../../industry-patterns/e-commerce.md) |
