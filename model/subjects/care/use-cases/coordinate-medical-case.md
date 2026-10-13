---
type: use-case
title: "Coordinate Medical Case"
description: "Resolve a Patient-related case through assigned, evidence-based work."
tags: [health-care, canonical-model, use-case]
---

# Coordinate Medical Case

## Goal

Resolve a Patient-related case through assigned, evidence-based work.

## Actors

Care Coordinator and Providers.

## Trigger

A condition, event, investigation, or service need requires managed coordination.

## Preconditions

Patient and case reason are known.

## Input

Case type, priority, evidence, participants, required decisions.

## Context

Care Coordination.

## Flow

1. Open Case.
2. Assign coordinator and participants.
3. Gather evidence.
4. Coordinate requests and decisions.
5. Record outcome and rationale.
6. Resolve and close.

## Alternatives / Conditions

Escalation; transfer; insufficient evidence; reopening.

## Outcome

Case reaches a documented outcome.

## Output

Case resolution and evidence.

## Postconditions

Resolution is traceable and auditable.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[MedicalCase.open](../encounter/medical-case.md#operations); [MedicalCase.assign](../encounter/medical-case.md#operations); [MedicalCase.resolve](../encounter/medical-case.md#operations); [MedicalCase.close](../encounter/medical-case.md#operations)


## Role definitions

- [Care Coordinator](../roles/care-coordinator.md)
- [Patient](../roles/patient.md)
- [Provider](../roles/provider.md)
