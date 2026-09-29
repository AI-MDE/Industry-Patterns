# Modeling Pattern Anatomy

## Purpose

A modeling pattern captures a recurring requirements structure in a form that an AI modeler can recognize, bind to a domain, compose with other patterns, specialize, and validate.

Patterns are requirements-level knowledge. They should not prescribe application technology, database structures, UI frameworks, or workflow engines.

## Standard anatomy

### Identity
- **Name**
- **ID**
- **Version**
- **Status**

### Intent
Describe the recurring requirements problem or structure addressed by the pattern.

### Recognition
Describe semantic signals that suggest the pattern may apply. Recognition should focus on meaning and behavior rather than keywords.

Include:
- positive signals;
- combinations of signals that strengthen the match;
- conditions that suggest the pattern does **not** apply.

### Roles
Define abstract semantic roles rather than domain-specific entity names.

Example for Case:

```text
subject
participant
owner
work-item
evidence
outcome
```

A domain binds these roles to its own concepts.

### Relationships
Define the required or common relationships among pattern roles.

### Invariants
An **invariant** is a rule or condition that must remain true in every valid application or specialization of the pattern.

Names, representations, and optional elements may change; invariants may not be removed without ceasing to conform to the pattern.

Example:

> Every active assignment identifies both the assignable subject and the responsible assignee.

### Optional elements
Describe common extensions that are useful but not required for pattern validity.

### Dependencies
Identify other patterns or semantic capabilities that may be required.

Dependencies should distinguish:
- **required** dependencies;
- **common** companion patterns;
- **alternative** patterns.

### Composition
Describe how this pattern commonly overlaps or interacts with other patterns, including identity, shared roles, and potential conflicts.

Example:

> Case and Assignment commonly share the Case owner with the Assignment assignee. Do not create a second ownership concept unless the domain distinguishes them.

### Specialization
Describe what may be renamed, narrowed, extended, or specialized while retaining the pattern's semantics.

### Bindings
Provide examples of abstract roles bound to domain concepts.

Example:

```text
Insurance:
  Case.subject      -> Claim
  Case.owner        -> Adjuster
  Case.participant  -> Claimant
  Case.evidence     -> ClaimDocument
  Case.outcome      -> ClaimResolution
```

Bindings are examples, not canonical domain names.

### Validation
Provide questions or scenarios that can confirm that the pattern has been applied coherently and that its invariants hold.

### Anti-patterns / Misapplication
Describe circumstances where the pattern should not be used, or common modeling mistakes when applying it.

### Requirements dimensions
Identify which completeness dimensions the pattern commonly contributes to:

- **What** — concepts and information
- **How** — behavior and processes
- **Where** — locations, boundaries, channels
- **Who** — actors and responsibility
- **When** — events, lifecycle, timing
- **Why** — goals, policies, rules

A pattern need not cover all six dimensions.

## AI application protocol

When applying a pattern, the AI should follow:

```text
Understand
   -> Detect
   -> Retrieve
   -> Bind
   -> Extend
   -> Reconcile
   -> Challenge
   -> Validate
```

### Understand
Build an initial understanding of the requirements and existing domain model.

### Detect
Recognize semantic signatures that suggest candidate patterns.

### Retrieve
Consult the catalog and load only relevant full pattern definitions.

### Bind
Map pattern roles onto existing domain concepts before creating anything new.

### Extend
Add concepts, relationships, rules, or behaviors only where required semantics are missing.

### Reconcile
Resolve identity, overlap, dependency, conflict, specialization, missing bindings, and redundancy across all applied patterns.

### Challenge
Use pattern invariants and the What/How/Where/Who/When/Why completeness lens to identify gaps.

### Validate
Walk concrete requirements scenarios and confirm that the unified model remains faithful to the domain.

## Core principle

**A pattern is an abstract semantic overlay on a domain model, not a template to copy.**

The output of pattern application is one unified requirements model expressed in the language of the target domain.
