# Data Migration

## Intent

Model how existing operational data, terminology, identifiers, rules, integrations, and historical evidence are understood, mapped, migrated, reconciled, and governed when adopting an MDE application or canonical industry pattern.

This pattern supports brownfield applications, data migration, system consolidation, staged modernization, merger integration, and continuing coexistence with legacy systems.

## Business overview

**Discover → Profile → Interpret → Map → Transform → Validate → Reconcile → Cut Over → Operate/Retire**

A Source System contains Source Records that express legacy business meaning. Those records are profiled and mapped to Canonical Concepts and attributes. Transformation Rules convert values while preserving lineage. Migration Batches execute the conversion, create Target Records, and produce validation and reconciliation evidence. Exceptions are resolved explicitly. During coexistence, ownership and synchronization rules determine which system may create or change each fact. Cutover transfers operational authority, and retirement preserves required history and audit evidence.

## Pattern variants

### Simple

Use for importing one bounded dataset into a new application.

Core concepts: Source System; Source Dataset; Source Record; External Identifier; Mapping Specification; Transformation Rule; Import Batch; Import Result; Conversion Error.

### Standard

Use as the default for controlled migration or brownfield modernization.

Adds: Canonical Concept; Source Field; Target Field; Value Mapping; Record Link; Data Profile; Data Quality Rule; Data Quality Finding; Migration Plan; Migration Batch; Migration Item; Validation Result; Reconciliation; Exception; Resolution; Cutover Event; Lineage Record.

### Enterprise

Use for multiple source and target systems, continuing coexistence, master data, regulated history, mergers, or phased retirement.

Adds: System of Record Assignment; Data Ownership Rule; Golden Record; Match Candidate; Match Decision; Merge/Split History; Synchronization Contract; Change Capture; Conflict; Retention Policy; Archive Package; Legal Hold; Control Evidence; Wave; Dependency; Rollback Point; Decommission Plan.

## Core roles

See [canonical core roles](../industry-patterns/behavior/legacy-conversion.md#core-roles).

## Source landscape

### System

Canonical concept: [System](../model/subjects/information/system/system.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Source Dataset

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Source Entity

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Source Field

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Source Record

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Canonical and target concepts

### Canonical Concept

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Canonical Attribute

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Target Store

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Target Record

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Identity and correspondence

### External Identifier

Canonical concept: [External Identifier](../model/subjects/information/external-identifier/external-identifier.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Record Link

Canonical concept: [Record Link](../model/subjects/information/external-identifier/record-link.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Match Candidate

Canonical concept: [Match Candidate](../model/subjects/information/external-identifier/match-candidate.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Match Decision

Canonical concept: [Match Decision](../model/subjects/information/external-identifier/match-decision.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Golden Record

Canonical concept: [Golden Record](../model/subjects/information/external-identifier/golden-record.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Merge/Split History

Canonical concept: [Merge/Split History](../model/subjects/information/external-identifier/merge-split-history.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Mapping and transformation

### Mapping Specification

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Field Mapping

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Value Mapping

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Transformation Rule

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Default Rule

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Discovery and data quality

### Data Profile

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Data Quality Rule

Canonical concept: [Data Quality Rule](../model/subjects/information/data-quality-rule/data-quality-rule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Data Quality Finding

Canonical concept: [Data Quality Finding](../model/subjects/information/data-quality-rule/data-quality-finding.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Semantic Issue

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Migration planning and execution

### Migration Plan

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Migration Wave

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Migration Batch

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Migration Item

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Validation Result

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Conversion Error

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Exception

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Resolution

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Lineage, reconciliation, and evidence

### Lineage Record

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reconciliation

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Control Evidence

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Coexistence and synchronization

### System of Record Assignment

Canonical concept: [System of Record Assignment](../model/subjects/information/system/system-of-record-assignment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Data Ownership Rule

Canonical concept: [Data Ownership Rule](../model/subjects/information/system/data-ownership-rule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Synchronization Contract

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Change Capture

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Conflict

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Cutover, archive, and retirement

### Cutover Event

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Rollback Point

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Archive Package

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Retention Policy

Canonical concept: [Retention Policy](../model/subjects/information/system/retention-policy.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Decommission Plan

Data migration concept: see the [Data Migration](#concepts) modeling pattern.

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](../industry-patterns/behavior/legacy-conversion.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](../industry-patterns/behavior/legacy-conversion.md#lifecycle-models).

## Business events

See [canonical business events](../industry-patterns/behavior/legacy-conversion.md#business-events).

## Baseline integrity and governance rules

See [canonical baseline integrity and governance rules](../industry-patterns/behavior/legacy-conversion.md#baseline-integrity-and-governance-rules).

## AI discovery questions

1. Which business capabilities and populations are being migrated or modernized?
2. Which systems, files, interfaces, documents, and manual processes are sources?
3. What does each source concept and code actually mean to its users?
4. Which source and target versions are in scope?
5. Which identifiers are stable, external, duplicated, reused, missing, or conflicting?
6. What is the canonical identity and how are match, merge, and split decisions made?
7. Which fields map directly, derive, split, concatenate, classify, aggregate, default, ignore, or require manual decisions?
8. Which system owns each concept and attribute before, during, and after cutover?
9. Is migration one-time, phased, bidirectional, or a continuing synchronization?
10. What volumes, time windows, dependencies, downtime limits, and performance constraints apply?
11. What data-quality thresholds and exceptions are acceptable?
12. Which counts, balances, totals, relationships, hashes, and semantic samples must reconcile?
13. What evidence is required for audit, legal, privacy, financial, clinical, or operational acceptance?
14. How will failed records be quarantined, corrected, replayed, and verified?
15. What is the rollback strategy and latest safe rollback point?
16. What history must remain accessible after the legacy system is retired?

## MDE modeling guidance

- Begin by discovering business meaning, not by copying table structures.
- Map source concepts to canonical MDE concepts before generating target schema.
- Keep source, canonical, and target representations explicitly separate.
- Treat mappings, transformations, quality rules, ownership, and reconciliation as versioned knowledge artifacts.
- Preserve External Identifiers and lineage as first-class evidence.
- Allow bounded anti-corruption mappings when a legacy meaning should not contaminate the canonical model.
- Support top-down specification and bottom-up extraction, then verify their agreement.
- Attach conversion rules to the canonical operations and constraints they must satisfy.
- Use migration scenarios to prove representative, boundary, failure, duplicate, missing-data, and recovery cases.

## Anti-patterns

### Copy the Legacy Schema

Recreating source tables in a new stack preserves accidental structure and hidden semantics rather than producing a canonical business model.

### ETL Code Is the Specification

Transformation code alone does not explain business meaning, ownership, acceptance criteria, or discarded information.

### One Identifier to Rule Them All

Assuming a single source key represents universal identity causes collisions, duplicates, and broken lineage.

### Clean Data in Place

Changing the only source evidence during migration prevents reproduction, audit, and rollback.

### Record Counts Prove Success

Equal counts do not prove correct values, relationships, balances, statuses, or business meaning.

### Big-Bang Without Coexistence Rules

Ignoring ownership and synchronization during transition creates conflicting updates and untraceable truth.

### Silent Defaults

Filling missing data without recording origin and rationale creates false confidence in inferred facts.

### Turn It Off and Hope

Decommissioning without verified archives, dependencies, retention, access, and rollback can make legally or operationally required history unavailable.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Source System | `source_system` |
| Source Record | `source_record` |
| External Identifier | `external_identifier` |
| Mapping Specification | `mapping_specification` |
| Field Mapping | `field_mapping` |
| Transformation Rule | `transformation_rule` |
| Migration Batch | `migration_batch` |
| Migration Item | `migration_item` |
| Lineage Record | `lineage_record` |
| Reconciliation | `reconciliation` |
| System of Record Assignment | `system_of_record_assignment` |

Logical names remain authoritative. Technology-stack rules generate physical names after the migration knowledge and canonical model are accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the canonical domain with capabilities and actor-goal use cases such as Register Source, Profile Dataset, Define Mapping, Approve Mapping, Execute Trial Migration, Resolve Exception, Reconcile Batch, Match Identity, Execute Cutover, Roll Back Cutover, Archive Legacy Records, and Decommission System, with reusable scenarios and business controls.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| System | [System](../model/subjects/information/system/system.md) | [System](../model/subjects/information/system/README.md) |
| Source Dataset | [Source Dataset](#) | [System](../model/subjects/information/system/README.md) |
| Source Entity | [Source Entity](#) | [System](../model/subjects/information/system/README.md) |
| Source Field | [Source Field](#) | [System](../model/subjects/information/system/README.md) |
| Source Record | [Source Record](#) | [System](../model/subjects/information/system/README.md) |
| Canonical Concept | [Canonical Concept](#) | [Canonical Concept](#) |
| Canonical Attribute | [Canonical Attribute](#) | [Canonical Concept](#) |
| Target Store | [Target Store](#) | [Canonical Concept](#) |
| Target Record | [Target Record](#) | [Canonical Concept](#) |
| External Identifier | [External Identifier](../model/subjects/information/external-identifier/external-identifier.md) | [External Identifier](../model/subjects/information/external-identifier/README.md) |
| Record Link | [Record Link](../model/subjects/information/external-identifier/record-link.md) | [External Identifier](../model/subjects/information/external-identifier/README.md) |
| Match Candidate | [Match Candidate](../model/subjects/information/external-identifier/match-candidate.md) | [External Identifier](../model/subjects/information/external-identifier/README.md) |
| Match Decision | [Match Decision](../model/subjects/information/external-identifier/match-decision.md) | [External Identifier](../model/subjects/information/external-identifier/README.md) |
| Golden Record | [Golden Record](../model/subjects/information/external-identifier/golden-record.md) | [External Identifier](../model/subjects/information/external-identifier/README.md) |
| Merge/Split History | [Merge/Split History](../model/subjects/information/external-identifier/merge-split-history.md) | [External Identifier](../model/subjects/information/external-identifier/README.md) |
| Mapping Specification | [Mapping Specification](#) | [Mapping Specification](#) |
| Field Mapping | [Field Mapping](#) | [Mapping Specification](#) |
| Value Mapping | [Value Mapping](#) | [Mapping Specification](#) |
| Transformation Rule | [Transformation Rule](#) | [Mapping Specification](#) |
| Default Rule | [Default Rule](#) | [Mapping Specification](#) |
| Data Profile | [Data Profile](#) | [Data Profile](#) |
| Data Quality Rule | [Data Quality Rule](../model/subjects/information/data-quality-rule/data-quality-rule.md) | [Data Profile](#) |
| Data Quality Finding | [Data Quality Finding](../model/subjects/information/data-quality-rule/data-quality-finding.md) | [Data Profile](#) |
| Semantic Issue | [Semantic Issue](#) | [Data Profile](#) |
| Migration Plan | [Migration Plan](#) | [Migration Plan](#) |
| Migration Wave | [Migration Wave](#) | [Migration Plan](#) |
| Migration Batch | [Migration Batch](#) | [Migration Plan](#) |
| Migration Item | [Migration Item](#) | [Migration Plan](#) |
| Validation Result | [Validation Result](#) | [Migration Plan](#) |
| Conversion Error | [Conversion Error](#) | [Migration Plan](#) |
| Exception | [Exception](#) | [Migration Plan](#) |
| Resolution | [Resolution](#) | [Migration Plan](#) |
| Lineage Record | [Lineage Record](#) | [Lineage Record](#) |
| Reconciliation | [Reconciliation](#) | [Lineage Record](#) |
| Control Evidence | [Control Evidence](#) | [Lineage Record](#) |
| System of Record Assignment | [System of Record Assignment](../model/subjects/information/system/system-of-record-assignment.md) | [System of Record Assignment](../model/subjects/information/system/README.md) |
| Data Ownership Rule | [Data Ownership Rule](../model/subjects/information/system/data-ownership-rule.md) | [System of Record Assignment](../model/subjects/information/system/README.md) |
| Synchronization Contract | [Synchronization Contract](#) | [System of Record Assignment](../model/subjects/information/system/README.md) |
| Change Capture | [Change Capture](#) | [System of Record Assignment](../model/subjects/information/system/README.md) |
| Conflict | [Conflict](#) | [System of Record Assignment](../model/subjects/information/system/README.md) |
| Cutover Event | [Cutover Event](#) | [Cutover Event](#) |
| Rollback Point | [Rollback Point](#) | [Cutover Event](#) |
| Archive Package | [Archive Package](#) | [Cutover Event](#) |
| Retention Policy | [Retention Policy](../model/subjects/information/system/retention-policy.md) | [Cutover Event](#) |
| Decommission Plan | [Decommission Plan](#) | [Cutover Event](#) |

## Concepts

The concepts of a data migration (formerly the Legacy Conversion domain). They describe a migration project, not the business: an application that converts legacy data defines them in its own Specs. Identity, ownership, and data quality are in the [Information Governance](../model/subjects/information/README.md) subject.

- **Source Dataset**: A defined collection of source information to be analyzed or converted.
- **Source Entity**: A structural record type in the Source Dataset, such as a table, file record, message, document type, or API resource.
- **Source Field**: A named source data element.
- **Source Record**: One observed record from a Source Entity at a particular extraction point.
- **Canonical Concept**: A technology-independent business concept accepted by the target knowledge model.
- **Canonical Attribute**: A defined fact belonging to a Canonical Concept.
- **Target Store**: The application, service, database, index, archive, or event stream that receives converted information.
- **Target Record**: A created or updated representation of a Canonical Concept in a Target Store.
- **Mapping Specification**: A versioned declaration of how source structures and meanings correspond to canonical and target concepts.
- **Field Mapping**: A mapping from one or more Source Fields to a Canonical Attribute or Target Field.
- **Value Mapping**: A governed translation from a source value or code to a canonical value or Classification.
- **Transformation Rule**: A deterministic rule that converts, normalizes, derives, validates, or suppresses data.
- **Default Rule**: A declared method for supplying a value absent from the source.
- **Data Profile**: Measured characteristics of a Dataset, Source Entity, or Source Field.
- **Semantic Issue**: An ambiguity or conflict in business meaning that cannot be resolved by structural mapping alone.
- **Migration Plan**: A governed plan defining scope, sequence, controls, acceptance criteria, cutover, recovery, and responsibilities.
- **Migration Wave**: A business-meaningful portion of migration scope released together.
- **Migration Batch**: One repeatable execution of an approved Mapping Specification against an identified source extract.
- **Migration Item**: The conversion outcome for one Source Record or logical group of records.
- **Validation Result**: Evidence that a Source Record, transformed record, Target Record, or batch satisfies a declared rule.
- **Conversion Error**: A technical or deterministic mapping failure.
- **Exception**: A business or governance decision required because automated processing cannot safely determine the result.
- **Resolution**: The approved disposition of an Exception or Finding.
- **Lineage Record**: Evidence connecting a target fact to its source records, mapping, transformation, execution, and decisions.
- **Reconciliation**: A controlled comparison between source scope and target results.
- **Control Evidence**: An immutable artifact proving that a required migration or cutover control was performed.
- **Synchronization Contract**: A versioned agreement governing data exchanged between Systems.
- **Change Capture**: Evidence of a source change offered for synchronization.
- **Conflict**: Competing changes or assertions that violate ownership, ordering, or consistency rules.
- **Cutover Event**: The controlled transfer of operational responsibility from one system configuration to another.
- **Rollback Point**: A verified state to which systems and data can be restored.
- **Archive Package**: A preserved collection of legacy records, metadata, schemas, documentation, and access instructions.
- **Decommission Plan**: A governed plan for removing a legacy System from operational use.
