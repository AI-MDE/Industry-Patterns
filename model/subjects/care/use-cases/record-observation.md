---
type: use-case
title: "Record Observation"
description: "Record a trustworthy measured or observed fact."
tags: [health-care, canonical-model, use-case]
---

# Record Observation

## Goal

Record a trustworthy measured or observed fact.

## Actors

Provider or authorized device/integration.

## Trigger

A measurement or observation is made or received.

## Preconditions

Patient and observation context are known.

## Input

Code, value, unit, time, method, source, performer.

## Context

Care Delivery.

## Flow

1. Identify subject and context.
2. Capture value and units.
3. Validate range, type, and required provenance.
4. Record interpretation where authorized.
5. Finalize or mark preliminary.

## Alternatives / Conditions

Correction, entered-in-error, unsupported unit, critical result escalation.

## Outcome

Observation is recorded with status and provenance.

## Output

Observation and validation result.

## Postconditions

Final corrections preserve history.

## Related Use Cases

See the capability and workflow files that sequence this use case.

## Invoked Entity Operations

[Observation.record](../observation/observation.md#operations); [Observation.finalize](../observation/observation.md#operations); [Observation.correct](../observation/observation.md#operations)


## Role definitions

- [Patient](../roles/patient.md)
- [Provider](../roles/provider.md)
