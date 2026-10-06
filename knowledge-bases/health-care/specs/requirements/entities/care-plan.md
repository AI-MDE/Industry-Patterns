---
type: entity
title: "Care Plan"
description: "An organized set of goals and planned activities for a Patient."
tags: [health-care, industry-pattern, entity]
---

# Care Plan

## Canonical origin

This selected specification derives from [Care Plan](../../../../../model/requirements/health-care/service-request/care-plan.md). Its operations, states, rules, and selected attributes form the Health Care application projection.

## Purpose

An organized set of goals and planned activities for a Patient.

## Attributes

Care Plan Identifier; Type; Status; Start Date; End Date; Author; Description

## Relationships

Concerns one Patient; contains Goals and Planned Activities; is supported by a Care Team.

## Operations

- draft
- activate
- add-goal
- add-activity
- review
- complete
- revoke

## States

draft; active; on-hold; completed; revoked; entered-in-error

## Rules

- [care-plan-must-identify-accountable-provider](../rules/care-plan-must-identify-accountable-provider.md)

