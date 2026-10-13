---
type: use-case
title: "Conduct Encounter"
description: "Assess and care for a Patient within a bounded interaction."
tags: [health-care, canonical-model, use-case]
---

# Conduct Encounter

## Goal

Assess and care for a Patient within a bounded interaction.

## Actors

Provider; Patient; optional Related Person.

## Trigger

A scheduled, urgent, virtual, or asynchronous care interaction begins.

## Preconditions

Patient is identified; Provider role is active; access is authorized.

## Input

Reason, history, observations, clinical context.

## Context

Care Delivery.

## Flow

1. Start Encounter.
2. Confirm participants and context.
3. Assess the Patient.
4. Record evidence and clinical assertions.
5. Create requests or plan changes.
6. Communicate next steps.
7. Complete Encounter with disposition.

## Alternatives / Conditions

Transfer, emergency escalation, incomplete visit, correction.

## Outcome

Encounter is completed with traceable evidence and next actions.

## Output

Encounter summary, requests, plan changes, disposition.

## Postconditions

Clinical evidence is finalized or explicitly pending.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[Encounter.start](../encounter/encounter.md#operations); [Encounter.record-evidence](../encounter/encounter.md#operations); [Encounter.complete](../encounter/encounter.md#operations)


## Role definitions

- [Patient](../roles/patient.md)
- [Provider](../roles/provider.md)
- [Related Person](../roles/related-person.md)
