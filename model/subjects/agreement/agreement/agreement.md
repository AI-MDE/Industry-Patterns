---
type: entity
title: "Agreement"
---

# Agreement

Subject: [Agreements and Entitlements](../README.md). ABE: [Agreement](README.md).

Also known as: Equipment Agreement (Equipment Service), Service Agreement (Professional Services), Customer Agreement (Telecommunications).

## Definition and detail

A recorded understanding among Parties that establishes rights, obligations, terms, or constraints.

Logical attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Effective Date; Expiration Date; Description.

### In industries

- **Equipment Agreement** (Equipment Service): Sale or Lease of an Equipment item to a Customer, with effective and expiration dates and lifecycle. Specializes cross-industry Agreement.
- **Service Agreement** (Professional Services): Contractual terms governing the professional service. Attributes: Service Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Effective Date; Expiration Date; Payment Terms; Billing Frequency; Retainer Amount; Fixed Fee Amount.
- **Customer Agreement** (Telecommunications): An Agreement defining products, terms, commitments, pricing, service levels, responsibilities, and effective periods. Attributes: Agreement Identifier; Agreement Number; Agreement Type; Agreement Status; Provider; Customer; Effective Date; Expiration Date; Currency; Renewal Policy.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#agreement) | Agreement |
| [industry-patterns/equipment-service.md](../../../../industry-patterns/equipment-service.md#equipment-agreement) | Equipment Agreement |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Service Agreement |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#customer-agreement) | Customer Agreement |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Agreement | includes | [Agreement Role](agreement-role.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Agreement | contains | [Agreement Term](agreement-term.md) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Agreement | establishes | Commitment or Entitlement (review) | 1:M | [cross-industry](../../../../industry-patterns/cross-industry.md) |
| Service Agreement | governs | [Engagement](engagement.md) | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
| Customer Agreement | governs | [Subscription](subscription.md) | 1:M | [telecommunications](../../../../industry-patterns/telecommunications.md) |

## Integrity rules

- Effective-through dates cannot precede effective-from dates.
