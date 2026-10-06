---
type: entity
title: "Appointment Participant"
---

# Appointment Participant

Domain: [Health Care](../README.md). ABE: [Schedule](README.md).

## Definition and detail

A Patient, Provider, Related Person, Location, device, interpreter, or other resource expected to participate.

Logical attributes: Participant Identifier; Participant Type; Participation Status; Required Indicator; Response Date.

## Source terminology

| Source | Term |
|---|---|
| [patterns/health-care.md](../../../../patterns/health-care.md#appointment-participant) | Appointment Participant |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Appointment](appointment.md) | includes | [Appointment Participant](appointment-participant.md) | 1:M | [health-care](../../../../patterns/health-care.md) |
