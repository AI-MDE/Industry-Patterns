---
type: entity
title: "External Identifier"
---

# External Identifier

Subject: [Information Governance](../README.md). ABE: [External Identifier](README.md).

Also known as: Patient Identifier (Health Care).

## Definition and detail

An identifier assigned by a source, partner, jurisdiction, or prior application.

Logical attributes: External Identifier Record; Identifier Type; Identifier Value; Assigning Authority; Source System; Status; Effective From; Effective Through.

Rule: preserve External Identifiers as mappings; do not make mutable or system-specific identifiers the canonical business identity.

### In industries

- **Patient Identifier** (Health Care): An identifier assigned to a Patient by an organization, jurisdiction, payer, or external system. Attributes: Identifier Record Identifier; Identifier Type; Identifier Value; Assigning Authority; Status; Effective From; Effective Through.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#patient-identifier) | Patient Identifier |
| [industry-patterns/legacy-conversion.md](../../../../modeling-patterns/data-migration.md#external-identifier) | External Identifier |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Patient](../../care/patient/patient.md) | has | Patient Identifier | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
