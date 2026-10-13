---
type: entity
title: "Approval"
---

# Approval

Subject: [Cases and Decisions](../README.md). ABE: [Decision](README.md).

Also known as: Plan Approval or Certification (Physical Therapy).

## Definition and detail

Formal approval of time, expense, deliverable, invoice, or project change.

Logical attributes: Approval Identifier; Approval Subject Type; Approval Status; Requested Date; Approved Date; Rejection Reason; Approval Notes.

### In industries

- **Plan Approval or Certification** (Physical Therapy): An attestation, approval, or certification of a Plan of Care when required. Attributes: Approval Identifier; Approval Type; Approval Status; Requested Date; Decision Date; Approving Party; Effective From; Effective Through; Conditions; Signature Reference.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#plan-approval-or-certification) | Plan Approval or Certification |
| [industry-patterns/professional-services.md](../../../../industry-patterns/professional-services.md#detailed-logical-model) | Approval |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Time Entry, Expense, or Deliverable (review) | receives | Approval | 1:M | [professional-services](../../../../industry-patterns/professional-services.md) |
