---
type: use-case
title: "Create Care Plan"
description: "Establish coordinated goals and activities for a Patient."
tags: [health-care, canonical-model, use-case]
---

# Create Care Plan

## Goal

Establish coordinated goals and activities for a Patient.

## Actors

Care Coordinator or Provider; Patient participates.

## Trigger

An Episode, Case, or assessment requires coordinated ongoing care.

## Preconditions

Patient and accountable role are identified.

## Input

Needs, goals, activities, participants, timing, measures.

## Context

Care Coordination.

## Flow

1. Review Patient context.
2. Define goals.
3. Define planned activities and owners.
4. Confirm consent and feasibility.
5. Assign accountable Provider/Coordinator.
6. Activate plan.

## Alternatives / Conditions

Patient declines; resource unavailable; plan remains draft.

## Outcome

Active Care Plan coordinates measurable work.

## Output

Care Plan, goals, activities, review schedule.

## Postconditions

Activities can create Service Requests.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[CarePlan.draft](../care-plan/care-plan.md#operations); [CarePlan.add-goal](../care-plan/care-plan.md#operations); [CarePlan.add-activity](../care-plan/care-plan.md#operations); [CarePlan.activate](../care-plan/care-plan.md#operations)


## Role definitions

- [Care Coordinator](../roles/care-coordinator.md)
- [Patient](../roles/patient.md)
- [Provider](../roles/provider.md)
