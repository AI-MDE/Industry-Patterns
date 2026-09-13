---
type: entity
title: "Episode Of Care"
description: "A period during which related care is coordinated toward a health concern or objective."
tags: [health-care, industry-pattern, entity]
---

# Episode Of Care

## Purpose

A period during which related care is coordinated toward a health concern or objective.

## Attributes

Episode Identifier; Type; Status; Start Date; End Date; Managing Organization; Coordinator

## Relationships

Groups Encounters, Care Plans, Service Requests, and outcomes for a Patient.

## Operations

- open
- add-encounter
- place-on-hold
- finish
- cancel

## States

planned; active; on-hold; finished; cancelled; entered-in-error

## Rules

- [episode-must-concern-one-patient](../rules/episode-must-concern-one-patient.md)
