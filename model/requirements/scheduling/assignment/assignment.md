---
type: primary-entity
title: "Assignment"
---

# Assignment

Domain: [Scheduling](../README.md). ABE: [Assignment](README.md).

Specializes: [Assignment](../../work-management/work-effort/assignment.md). Inherit its meaning; apply the refinements below in this context.

## Definition and detail

The commitment of one or more Resources to a Demand for a defined period and context.

One Demand may require a resource bundle. For example:

```text
Physiotherapy Session
  = Therapist
  + Treatment Room
  + Required Equipment
  + 45 minutes of simultaneous availability
```

or:

```text
Field Service
  = Technician
  + Service Vehicle
  + Required Tools
  + Client Site
```

## Source terminology

| Source | Term |
|---|---|
| [modeling-patterns/service-scheduling.md](../../../../modeling-patterns/service-scheduling.md#assignment) | Assignment |
