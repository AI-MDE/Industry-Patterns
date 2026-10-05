---
type: entity
title: "Patient Identifier"
---

# Patient Identifier

Domain: [Health Care](../README.md). ABE: [Patient](README.md).

## Definition and detail

An identifier assigned to a Patient by an organization, jurisdiction, payer, or external system.

Logical attributes: Identifier Record Identifier; Identifier Type; Identifier Value; Assigning Authority; Status; Effective From; Effective Through.

Rule: support multiple identifiers and never assume that one organization's medical-record number is universal identity.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#patient-identifier) | Patient Identifier |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Patient](patient.md) | has | [Patient Identifier](patient-identifier.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
