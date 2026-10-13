# MDE Industry Pattern Anatomy

An industry pattern is a selection guide for the [canonical business model](model/README.md).

## Industry guide responsibilities

1. Business context, scope, motivation, and value.
2. Simple, Standard, and Enterprise selection guidance where applicable.
3. Links to canonical domains, ABEs, entities, and business behavior.
4. Explanation of how selected concepts work together in the industry.
5. Modeling questions, suggested choices, and unresolved business decisions.
6. Pitfalls and semantic distinctions to preserve.
7. Coverage gaps and candidate expansions.

## Canonical model responsibilities

Definitions of entities, relationships, operations, states, events, roles, rules, capabilities, use cases, and workflows belong in `model/`. Structural concepts follow Domain → ABE → Entity. Reusable requirements sit beside ABEs in the owning domain, referencing the same canonical entities.

Use cases follow the behavioral contract:

**Trigger → Preconditions → Input → Context → Steps → Outcome → Output → Postconditions**

Rules govern business operations. Use cases coordinate those operations; workflows sequence business activities and outcomes across use cases. Cross-domain behavior has one owner and references other domains without copying them.

## Application responsibilities

The actual application records its selections, specialized requirements, policy decisions, architecture, technologies, interfaces, UI, physical design, deployment, and executable tests. These decisions are not prescribed by an industry guide or by a separate reusable application architecture.

## Current coverage

The industry guides link to canonical concepts and business-definition overviews. [Health Care](model/domains/health-care/README.md) additionally has detailed capabilities, roles, rules, use cases, and workflows. Other industries retain their existing coverage and open behavioral gaps; relocation does not make an outline a complete specification.
