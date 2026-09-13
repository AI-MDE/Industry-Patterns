---
type: entity
title: "Service Request"
description: "A request or order for evaluation, procedure, test, therapy, consultation, device, or other service."
tags: [health-care, industry-pattern, entity]
---

# Service Request

## Purpose

A request or order for evaluation, procedure, test, therapy, consultation, device, or other service.

## Attributes

Request Identifier; Type; Service Code; Status; Intent; Priority; Authored Date; Requester; Performer; Occurrence Window; Reason

## Relationships

Concerns a Patient; may be part of a Care Plan; may require Consent or Authorization; is fulfilled by Service Delivery.

## Operations

- draft
- submit
- accept
- reject
- revoke
- complete

## States

draft; active; accepted; in-progress; completed; on-hold; revoked; rejected; cancelled

## Rules

- [service-delivery-must-trace-to-request-or-plan](../rules/service-delivery-must-trace-to-request-or-plan.md)
