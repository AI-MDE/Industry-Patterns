---
type: entity
title: "Measurement"
---

# Measurement

Subject: [Measurement and Usage](../README.md). ABE: [Measure](README.md).

Also known as: Process Measurement (Manufacturing), Outcome Measure Result (Physical Therapy), Performance Measurement (Telecommunications).

## Definition and detail

An observed or calculated Measure for a subject, place, and period or point in time.

Logical attributes: Measurement Identifier; Measured Value; Measured At; Period Start; Period End; Source; Quality Status.

### In industries

- **Process Measurement** (Manufacturing): An observed value for an Operation, Product, machine, environment, or process parameter. Attributes: Measurement Identifier; Parameter; Observed At; Value; Unit; Method; Asset; Operator; Status; Source.
- **Outcome Measure Result** (Physical Therapy): A scored result for a Patient at a declared point in the Episode. Attributes: Result Identifier; Measure Definition; Assessment Date; Raw Responses Reference; Score; Unit; Interpretation; Completed By; Administered By; Episode; Visit.
- **Performance Measurement** (Telecommunications): A measured value concerning availability, latency, loss, throughput, signal, error, utilization, quality, or another service metric. Attributes: Measurement Identifier; Metric; Observed At; Interval; Value; Unit; Service or Resource; Threshold Status; Source.

## Source terminology

| Source | Term |
|---|---|
| [industry-patterns/cross-industry.md](../../../../industry-patterns/cross-industry.md#measurement) | Measurement |
| [industry-patterns/manufacturing.md](../../../../industry-patterns/manufacturing.md#process-measurement) | Process Measurement |
| [industry-patterns/physical-therapy-clinic.md](../../../../industry-patterns/physical-therapy-clinic.md#outcome-measure-result) | Outcome Measure Result |
| [industry-patterns/telecommunications.md](../../../../industry-patterns/telecommunications.md#performance-measurement) | Performance Measurement |

## Integrity rules

- A Measurement must identify its Measure, subject, time context, and source.

## Relationships

| Source concept | Role | Target concept | Original cardinality | Pattern |
|---|---|---|---|---|
| [Therapy Episode](../../../../industry-patterns/physical-therapy-clinic.md#concepts-applications-typically-add) | has | Outcome Measure Result | 1:M | [physical-therapy-clinic](../../../../industry-patterns/physical-therapy-clinic.md) |
