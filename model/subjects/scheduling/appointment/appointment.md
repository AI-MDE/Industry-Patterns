---
type: entity
title: "Appointment"
---

# Appointment

Subject: [Scheduling and Reservations](../README.md). ABE: [Appointment](README.md).

Also known as: Service Appointment (Scheduling), Appointment (Health Care).

## Definition and detail

A planned time-bound commitment to provide one or more service offerings to a customer or recipient, potentially consuming provider, facility and equipment availability. Distinct from the delivered Service Event.

### In industries

- **Appointment** (Health Care): A planned allocation of time and resources for a Patient to receive or discuss care. Attributes: Appointment Identifier; Appointment Type; Appointment Status; Scheduled Start; Scheduled End; Priority; Reason; Channel; Cancellation Reason.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/health-care.md](../../../../industry-patterns/health-care.md#appointment) | Appointment |

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| Appointment | includes | [Appointment Participant](../../party/party/party-role.md) | 1:M | [health-care](../../../../industry-patterns/health-care.md) |
| Appointment | may result in | [Encounter](../../care/encounter/encounter.md) | 1:0..M | [health-care](../../../../industry-patterns/health-care.md) |

## Business participation

Includes Patient, Provider, Location, and other participants; may result in Encounters.

## Operations

- request
- book
- reschedule
- cancel
- check-in
- mark-no-show

## States

proposed; booked; arrived; in-progress; fulfilled; waitlisted; no-show; cancelled

## Rules

- [appointment-must-respect-availability](../../care/rules/appointment-must-respect-availability.md)

## Concepts and relationships

A Service Appointment references Party and Service Offering, optional Service Site and required Resource assignments. Existing Health Care Appointment may be aligned by specialization after a semantic review.

## States and rules

Requested → Confirmed → Completed; Requested or Confirmed → Cancelled; Confirmed → No-Show. A reschedule retains history. Assignment cannot consume capacity exceeding published availability. Booking, deposit, cancellation and no-show policies are governed by Appointment Policy.
