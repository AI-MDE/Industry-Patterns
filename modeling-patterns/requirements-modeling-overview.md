# Requirements Modeling Overview

## Terminology

Although this work describes the business domain, we deliberately use **requirements** rather than **business** as the primary term. “Business model” is too broad and carries meanings beyond the application requirements we are trying to establish.

The objective of this phase is therefore a **complete requirements model**: a coherent, sufficiently complete description of the domain and behavior needed as input to application design and implementation.

## Modeling context

The requirements model is produced within a broader modeling context. The architect/modeler and the AI do not work from a blank page: they synthesize stakeholder and SME knowledge, explicit requirements, existing systems, reusable patterns, industry knowledge, and other reference material into one coherent model.

```text
                              BUSINESS / DOMAIN CONTEXT
                                        |
                 +----------------------+----------------------+
                 |                      |                      |
          Requirements            Existing Systems       SME / Stakeholders
                 |                      |                      |
                 +----------------------+----------------------+
                                        |
                                        v
                             +-----------------------+
                             | ARCHITECT / MODELER   |
                             |      + AI AGENT       |
                             +-----------+-----------+
                                         |
                           discovers / selects / composes /
                                  specializes / challenges
                                         |
                 +-----------------------+-----------------------+
                 |                       |                       |
                 v                       v                       v
          INDUSTRY MODELS          MODELING PATTERNS       REFERENCE KNOWLEDGE
                 |                       |                       |
          Insurance                  Case                  Standards
          Healthcare                 Approval              Regulations
          Finance                    Assignment            Taxonomies
          Manufacturing              Party / Role          Existing models
          ...                        SLA                    Terminology
                                     Documents
                                     ...
                 +-----------------------+-----------------------+
                                         |
                                         v
                             +-----------------------+
                             | COMPLETE REQUIREMENTS |
                             |        MODEL          |
                             +-----------------------+
```

The **SME and stakeholders provide knowledge of the actual organization**. The **architect/modeler owns modeling decisions and scope**. The **AI agent performs discovery, synthesis, composition, challenge, and gap analysis**. Industry models, modeling patterns, existing systems, and reference knowledge are supporting inputs rather than authorities that automatically determine the result.

## Completeness lens: What, How, Where, Who, When, Why

The Zachman interrogatives provide a useful completeness lens without requiring adoption of the full Zachman Framework.

| Question | Requirements model answers |
|---|---|
| **What** | Concepts, entities, information, documents, relationships |
| **How** | Capabilities, functions, use cases, processes, operations |
| **Where** | Locations, organizational boundaries, channels, jurisdictions, interaction points |
| **Who** | Actors, parties, organizations, roles, responsibilities |
| **When** | Events, lifecycles, states, schedules, timing, SLAs |
| **Why** | Goals, policies, directives, strategies, constraints, business rules |

The requirements model is not complete merely because a prescribed set of documents exists. It is sufficiently complete when these questions are adequately answered for the agreed scope and the resulting model is coherent and validated.

## Inputs and modeling aids

The architect/modeler should not start from a blank page. The AI-assisted modeling process can draw from several sources:

- **Requirements and stakeholder/SME knowledge** — the facts and needs of the specific organization.
- **Existing systems** — current behavior, terminology, data, integrations, constraints, and legacy knowledge that may need to be preserved, challenged, or replaced.
- **Industry models/patterns** — curated knowledge for insurance, healthcare, financial services, manufacturing, travel, professional services, and other domains.
- **Modeling patterns** — reusable cross-industry structures such as Case, Approval, Assignment, Work Queue, Document/Evidence, Lifecycle, SLA, Escalation, Decision, Party/Role, and Audit/History.
- **Process patterns** — recurring forms of work such as Request–Review–Decision, Submit–Validate–Approve, parallel review, wait/remind/escalate, and exception routing.
- **Reference knowledge** — standards, regulations, taxonomies, existing models, legacy systems, and organizational terminology.
- **AI native knowledge** — broad domain and modeling knowledge already available to the agent.

These sources are aids to modeling; none of them is the final requirements model.

## Role of the AI modeler

The AI is an active modeling participant. The pattern and reference libraries are passive knowledge resources.

The AI should:

1. understand the objective, scope, terminology, constraints, and stakeholder statements;
2. discover relevant industry knowledge and modeling patterns;
3. propose a coherent candidate requirements model;
4. compose overlapping concepts rather than create independent pattern fragments;
5. specialize generic and industry knowledge to the particular organization;
6. expose provenance where useful so the architect can understand why a concept was proposed;
7. identify gaps, contradictions, missing rules, incomplete lifecycles, undefined responsibilities, and weak coverage;
8. ask targeted questions to close important gaps;
9. validate the model through scenarios and stakeholder review; and
10. baseline the resulting requirements model for downstream application design.

The architect remains the decision-maker and editor. The AI should perform the mechanical discovery and composition work rather than require the architect to manually select every pattern.

## Patterns as multi-dimensional model fragments

A useful modeling pattern is more than a description of a familiar idea. It contributes a reusable fragment across one or more requirements dimensions.

For example, an **Approval** pattern may contribute:

- **What:** Approval, Decision
- **How:** Request Approval, Review, Approve, Reject
- **Who:** Requester, Approver
- **When:** Requested, Pending, Decided, Expired
- **Why:** Approval policy, authorization rules, decision rules
- **Where:** normally unconstrained unless the requirements specialize it

A **Case** pattern may contribute identity and information (What), case work and resolution behavior (How), participants and ownership (Who), lifecycle and deadlines (When), and governing policies/rules (Why).

This makes patterns useful to AI as composable requirements-model fragments and as a way to assess coverage and gaps.

## Industry patterns versus modeling patterns

**Industry patterns/models** answer: *What is commonly found in this domain?*

**Modeling patterns** answer: *What recurring requirements structure is present here, independent of industry?*

An insurance requirements model, for example, may draw Claim, Policy, Coverage, Loss, Risk, and Adjuster from industry knowledge while recognizing Claim as a specialization of Case and applying Assignment, Evidence, Decision, Lifecycle, and SLA patterns where appropriate.

The resulting requirements model belongs to the target organization. It is neither a copy of the industry model nor a mechanical collection of modeling patterns.

## Pattern recognition and composition strategy

During requirements modeling, the AI should actively look for recurring structural and behavioral characteristics that may correspond to known modeling patterns. It should consult the [Modeling Pattern Catalog](catalog.md) for candidates, but patterns must not drive the requirements or be forced onto the domain.

Recognition is semantic rather than keyword-based. Once a candidate is identified, the AI should load its full definition and apply it by **binding abstract pattern roles to existing domain concepts before introducing new concepts**.

When several patterns apply, they are not maintained as separate mini-models. They are semantic overlays on the same canonical requirements model. The AI must reconcile:

- **identity** — two concepts may represent the same thing;
- **overlap** — multiple patterns may provide the same semantic capability;
- **dependency** — one pattern may require semantics another already provides;
- **conflict** — pattern invariants or domain requirements may disagree;
- **specialization** — a generic role may already be represented by a domain-specific concept;
- **missing bindings** — a required role may not yet have a domain concept;
- **redundancy** — composition may have introduced unnecessary duplicate concepts.

Pattern bindings should be retained where useful for provenance and downstream reasoning, for example:

```text
Complaint        realizes Case.subject
Employee         realizes Assignment.assignee
Attachment       realizes DocumentEvidence.item
SupervisorReview realizes Approval.decision
```

These bindings add semantics without changing the language of the requirements model.

The standard definition and application rules for patterns are described in [Modeling Pattern Anatomy](pattern-anatomy.md).

## Recommended modeling flow

1. **Understand** — establish objective, scope, terminology, constraints, and context.
2. **Seed** — load relevant industry and reference knowledge.
3. **Discover** — identify candidate concepts, actors, capabilities, processes, rules, events, and semantic signatures of applicable patterns.
4. **Retrieve** — consult the pattern catalog and load only relevant pattern definitions.
5. **Bind** — map pattern roles onto existing domain concepts.
6. **Extend** — add only genuinely missing concepts, relationships, rules, or behavior.
7. **Reconcile** — merge overlapping pattern semantics into one canonical requirements model and resolve conflicts, dependencies, and redundancy.
8. **Specialize** — adapt generic and industry knowledge to how this organization actually works.
9. **Challenge** — use pattern invariants and the six interrogatives to find omissions, contradictions, weak areas, and unresolved questions.
10. **Validate** — walk scenarios and examples with stakeholders.
11. **Baseline** — produce the agreed requirements model as input to application design.

## Requirements model target

```text
          COMPLETE REQUIREMENTS MODEL

          WHAT   concepts / information
          HOW    behavior / processes
          WHERE  location / boundaries
          WHO    actors / responsibility
          WHEN   events / lifecycle / time
          WHY    goals / policies / rules
                    |
                    v
              Review / Validate
                    |
                    v
             Application Design
```

## Key principle

**Patterns and industry models do not replace AI reasoning. They give the AI curated, inspectable, reusable knowledge and modeling contracts that help it produce a more consistent, traceable, complete requirements model. Patterns contribute semantics before they contribute new concepts.**

The target of the modeling phase is the requirements model itself. Application design and implementation are downstream concerns.
