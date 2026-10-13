---
type: entity
title: "Settlement"
---

# Settlement

Subject: [Billing and Payments](../README.md). ABE: [Payment](README.md).

Also known as: Settlement (Insurance), Settlement (Telecommunications), Supplier Settlement (Travel).

## Definition and detail

The discharge of financial obligations between participating Parties or institutions.

Logical attributes: Settlement Identifier; Settlement Type; Settlement Status; Settlement Date; Amount; Currency; Settlement Account; Scheme; Finality Time.

### In industries

- **Settlement** (Insurance): An approved resolution of all or part of a Claim or Exposure. Attributes: Settlement Identifier; Settlement Type; Settlement Status; Offered Date; Accepted Date; Gross Amount; Deductible Amount; Net Amount; Payee; Release Reference.
- **Settlement** (Telecommunications): A calculated obligation between Providers for exchanged services or usage. Attributes: Settlement Identifier; Settlement Type; Status; Partner; Period; Gross Amount; Adjustments; Net Amount; Currency; Settled Date.
- **Supplier Settlement** (Travel): A financial settlement between Distributor and Supplier. Attributes: Settlement Identifier; Settlement Period; Currency; Gross Amount; Commission Amount; Adjustments; Net Amount; Settlement Status; Settlement Date.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#settlement) | Settlement |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#settlement) | Settlement |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#settlement) | Settlement |
| [industry-patterns/travel.md](../../../../industry-patterns/travel.md#supplier-settlement) | Supplier Settlement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Clearing Item](../../accounts/payment-order/clearing-item.md) | resolves through | Settlement | M:1 | [financial-services](../../../../industry-patterns/financial-services.md) |
| Claim or Exposure (review) | resolves through | Settlement | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
