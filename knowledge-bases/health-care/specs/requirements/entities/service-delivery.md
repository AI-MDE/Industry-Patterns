---
type: entity
title: "Service Delivery"
description: "Evidence that an authorized or planned Health Care Service was performed or supplied."
tags: [health-care, industry-pattern, entity]
---

# Service Delivery

## Purpose

Evidence that an authorized or planned Health Care Service was performed or supplied.

## Attributes

Delivery Identifier; Service Code; Status; Delivered Start; Delivered End; Quantity; Unit; Provider; Location; Result Reference

## Relationships

Fulfills a Service Request; occurs in an Encounter, Episode, or Case; may produce Observations, Procedures, outcomes, and Charges.

## Operations

- start
- record-result
- complete
- correct
- cancel

## States

planned; in-progress; completed; partially-completed; cancelled; entered-in-error

## Rules

- [service-delivery-requires-traceability](../rules/service-delivery-requires-traceability.md)
- [provider-must-act-within-active-scope](../rules/provider-must-act-within-active-scope.md)
