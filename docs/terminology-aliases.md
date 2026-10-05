# Terminology Aliases

## Purpose

MDE keeps one canonical term for each concept while preserving equivalent terminology used by external reference models.

Aliases are maintained outside the MDE meta-model so concept definitions remain small and readable.

The registry is stored at:

```text
tools/reference-model-analyzer/terminology-aliases.json
```

## Principle

```text
MDE term
  = canonical terminology

Alias
  = equivalent or closely aligned terminology used by an external source
```

The importer should preserve the original source term and use the alias registry to propose an MDE-aligned term.

The source term is never discarded.

## Initial aliases

| MDE term | Alias | Source |
|---|---|---|
| Entity | Business Entity | SID |
| Entity | Business Object | BIAN |
| ABE | Aggregate Business Entity | SID |
| Capability | Business Capability | BIAN |
| Module | Service Domain | BIAN |
| Interface | Service Operation | BIAN |
| Interface | Semantic API | BIAN |
| Workflow | Business Scenario | BIAN |

## Import behavior

Example:

```text
sourceType: Business Entity
source: SID
        ↓ alias lookup
mdeType: Entity
```

For a term without a known alias:

```text
sourceType: Behavior Qualifier
source: BIAN
        ↓
mdeType: unmapped
```

The concept remains available for analysis and may later be:

- mapped to an existing MDE concept;
- added as a new alias;
- recognized as a source-specific concept;
- used as evidence for a future MDE meta-model extension.

## Rules

1. Preserve the original source term.
2. Do not rename source concepts destructively.
3. Use MDE terminology only as an aligned interpretation.
4. Keep aliases source-aware.
5. Add aliases only when the semantic alignment is reasonably strong.
6. Do not use the alias registry to hide meaningful semantic differences.
7. Unknown concepts remain unmapped rather than being forced into the closest MDE type.

## Scope

This registry currently aligns terminology for the reference-model importer and analyzer.

It may later be reused by:

- AI concept recognition;
- Industry Pattern mapping;
- model migration;
- Workbench search;
- cross-model comparison.
