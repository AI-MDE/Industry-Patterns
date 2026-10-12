---
type: primary-entity
title: "Service Appointment"
---

# Service Appointment

Domain: [Scheduling](../README.md). ABE: [Service Appointment](README.md).

## Definition

A planned time-bound commitment to provide one or more service offerings to a customer or recipient, potentially consuming provider, facility and equipment availability. Distinct from the delivered Service Event.

## Concepts and relationships

A Service Appointment references Party and Service Offering, optional Service Site and required Resource assignments. Existing Health Care Appointment may be aligned by specialization after a semantic review.

## States and rules

Requested → Confirmed → Completed; Requested or Confirmed → Cancelled; Confirmed → No-Show. A reschedule retains history. Assignment cannot consume capacity exceeding published availability. Booking, deposit, cancellation and no-show policies are governed by Appointment Policy.
