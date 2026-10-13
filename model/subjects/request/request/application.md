---
type: entity
title: "Application"
---

# Application

Subject: [Requests, Quotes, and Orders](../README.md). ABE: [Request](README.md).

Also known as: Product Application (Financial Services), Insurance Application (Insurance), Patient Intake (Physical Therapy).

## Definition and detail

A request to establish or change a Financial Agreement or Account.

Logical attributes: Application Identifier; Application Number; Application Type; Application Status; Submitted Date; Requested Product Version; Applicant; Channel; Decision Date.

### In industries

- **Insurance Application** (Insurance): A formal request for insurance containing applicant declarations and risk information. Attributes: Application Identifier; Application Number; Application Type; Application Status; Submitted Date; Requested Effective Date; Applicant; Product Version; Source Channel.
- **Patient Intake** (Physical Therapy): A controlled collection of demographic, contact, medical, functional, financial, consent, and administrative information before care begins. Attributes: Intake Identifier; Intake Status; Started Date; Completed Date; Source; Preferred Communication; Accessibility Need; Responsible Staff.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/financial-services.md](../../../../industry-patterns/financial-services.md#product-application) | Product Application |
| [industry-patterns/insurance.md](../../../../industry-patterns/insurance.md#insurance-application) | Insurance Application |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#patient-intake) | Patient Intake |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Applicant (review) | submits | Product Application | 1:M | [financial-services](../../../../industry-patterns/financial-services.md) |
| Applicant (review) | submits | Insurance Application | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
| Insurance Application | describes | [Risk Item](../../coverage/underwriting-case/risk-item.md) | 1:M | [insurance](../../../../industry-patterns/insurance.md) |
