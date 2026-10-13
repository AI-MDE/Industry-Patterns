---
type: entity
title: "Incident"
---

# Incident

Subject: [Cases and Decisions](../README.md). ABE: [Case](README.md).

Also known as: Damage Report (Crane Rental), Adverse Event (Physical Therapy).

## Definition and detail

An injury, damage, near miss, equipment event, environmental event, or regulatory concern.

Logical attributes: Incident Identifier; Incident Type; Incident Status; Occurred At; Reported At; Job Order; Site; Severity; Description; Immediate Action; Investigation Reference.

Rule: any material change to load, radius, site, configuration, rigging, weather, personnel, or planned method must be evaluated against the approved Lift Plan before proceeding.

### In industries

- **Damage Report** (Crane Rental): A documented change in condition, loss, contamination, or damage. Attributes: Damage Report Identifier; Status; Detected At; Asset or Component; Job Order; Description; Severity; Probable Cause; Responsibility Status; Estimate; Evidence.
- **Adverse Event** (Physical Therapy): An unintended event, symptom escalation, injury, fall, equipment incident, or other safety concern occurring in relation to care. Attributes: Adverse Event Identifier; Event Type; Event Status; Occurred At; Detected At; Patient; Visit; Severity; Description; Immediate Action; Reported By; Review Outcome.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#incident) | Incident |
| [industry-patterns/crane-rental-orchestration.md](../../../../industry-patterns/crane-rental-orchestration.md#damage-report) | Damage Report |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#adverse-event) | Adverse Event |
