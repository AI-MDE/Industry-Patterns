---
type: use-case
title: "Register Patient"
description: "Establish a trustworthy Patient record that can safely participate in care."
tags: [health-care, canonical-model, use-case]
---

# Register Patient

## Goal

Establish a trustworthy Patient record that can safely participate in care.

## Actors

Scheduler or authorized registration worker; Patient/Related Person supplies information.

## Trigger

A person seeks care and no reliable Patient record has been selected.

## Preconditions

Actor is authorized to register Patients.

## Input

Identity evidence, demographics, contacts, related-person information.

## Context

Patient Administration.

## Flow

1. Search potential matches.
2. Review match evidence.
3. Select an existing Patient or create a provisional/new Patient.
4. Record identifiers and provenance.
5. Validate required information.
6. Confirm registration.

## Alternatives / Conditions

Possible duplicate requires reconciliation; emergency registration creates explicitly provisional identity.

## Outcome

Patient is registered or matched without losing identity history.

## Output

Patient identifier and registration result.

## Postconditions

Identity evidence and audit are retained.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[Patient.search](../patient/patient.md#operations); [Patient.register](../patient/patient.md#operations); [Patient.reconcile-identity](../patient/patient.md#operations)


## Role definitions

- [Patient](../roles/patient.md)
- [Related Person](../roles/related-person.md)
- [Scheduler](../roles/scheduler.md)
