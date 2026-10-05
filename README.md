# MDE Industry Patterns

Reusable industry and modeling knowledge for [Method Driven Engineering (MDE)](https://github.com/AI-MDE/mde).

MDE consults this catalog when it elicits the requirements of a new domain or capability, so a proposed model starts closer to what the business needs and asks the questions that matter. See MDE's [industry-patterns feature](https://github.com/AI-MDE/mde/blob/main/method/features/business-requirements/industry-patterns.md).

The industry patterns adapt recurring business concepts inspired by *The Data Model Resource Book, Revised Edition, Volume 2: A Library of Universal Data Models by Industry Types*. This is a derived MDE planning and knowledge resource, not a reproduction of the book.

## Coherent model

The [canonical model](model/README.md) now connects the detailed industry concepts through **Domain → ABE → Entity**, with one page per concept, explicit reuse and specialization, and source-aware terminology. Industry files are pattern views onto this model. Start with the [Domain index](model/requirements/index.md) or inspect the [integration review](model/integration-review.md).

## Repository areas

```text
catalog.md          discovery index of industry patterns (start here)
model/              canonical Domains, ABEs, Entities, bindings, and relationship registry
patterns/           industry views selecting and connecting canonical concepts
modeling-patterns/  cross-industry requirements patterns bound to domain concepts
knowledge-bases/    industry knowledge instantiated as MDE requirements specs
pattern-anatomy.md  target anatomy of an industry pattern and roadmap
```

## Industry patterns

Start with the [Catalog](catalog.md). Each pattern combines business context, complexity variants, roles, concepts, relationships, lifecycles, events, baseline rules, AI modeling questions, MDE guidance, anti-patterns, and candidate behavioral expansion.

- [Cross-industry concepts](patterns/cross-industry.md)
- [Manufacturing](patterns/manufacturing.md)
- [Telecommunications](patterns/telecommunications.md)
- [Professional Services](patterns/professional-services.md)
- [E-Commerce](patterns/e-commerce.md)
- [Health Care](patterns/health-care.md)
- [Insurance](patterns/insurance.md)
- [Financial Services](patterns/financial-services.md)
- [Travel](patterns/travel.md)
- [Real-World Extensions and Legacy Conversion](patterns/legacy-conversion.md)

### Applied industry extensions

These patterns extend the catalog beyond the original book-derived industry subjects.

- [Physical Therapy Clinic](patterns/physical-therapy-clinic.md)
- [Industrial & Commercial Crane Rental Orchestration](patterns/crane-rental-orchestration.md)
- [Equipment Service and Field Service](patterns/equipment-service.md)

### Complexity variants

- **Simple**: the minimum concepts a focused application or a prototype needs.
- **Standard**: normal operational coverage and controls.
- **Enterprise**: organizational, planning, integration, analytics, and governance extensions.

## Modeling patterns

[Modeling patterns](modeling-patterns/catalog.md) capture requirements structures that recur across industries: Case, Assignment, Approval, Decision, Document/Evidence, Lifecycle, SLA, Escalation, Work Queue, Party/Role, Audit/History, Workflow, Recurring Service, and Constraint-Based Scheduling. They are recognized by meaning, not keywords. A pattern's abstract roles are bound to existing domain concepts rather than copied into the model.

- [Modeling pattern catalog](modeling-patterns/catalog.md)
- [Modeling pattern anatomy](modeling-patterns/pattern-anatomy.md)
- [Requirements modeling overview](modeling-patterns/requirements-modeling-overview.md)
- [Recurring Service and Constraint-Based Scheduling](modeling-patterns/service-scheduling.md)
- [Case management reference architecture](modeling-patterns/case-management-architecture.md)

## Knowledge bases

A knowledge base instantiates an industry pattern as separate MDE requirements specifications (capabilities, entities, roles, rules, use cases, and workflows) following the [MDE metamodel](https://github.com/AI-MDE/mde/tree/main/method/metamodel).

- [Health Care knowledge base](knowledge-bases/health-care/README.md) (Standard variant)

## MDE use

An MDE agent eliciting requirements:

1. Reads the [Catalog](catalog.md), then the pattern or patterns closest to the business, and any modeling patterns the requirements signal.
2. Chooses the variant the goal needs.
3. Follows canonical bindings, reuses shared concepts, and resolves overlaps and specialization before choosing the application vocabulary. Takes only what the business confirms (concepts, relationships, lifecycles, baseline rules, roles), named in the business's own words. A pattern informs the meaning, never the vocabulary.
4. Turns unanswered modeling questions into open Questions with the pattern's suggested defaults, and checks the model against the anti-patterns.
5. Records in the Domain's `## Industry patterns` section which patterns and variants were used, what was taken, and what was left out.

The resulting specifications remain application-specific and traceable.

