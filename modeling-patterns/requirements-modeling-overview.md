# Requirements Modeling Overview

## Terminology

Although this work describes the business domain, we deliberately use **requirements** rather than **business** as the primary term. “Business model” is too broad and carries meanings beyond the application requirements we are trying to establish.

The objective of this phase is therefore a **complete requirements model**: a coherent, sufficiently complete description of the domain and behavior needed as input to application design and implementation.

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

- **Requirements and stakeholder knowledge** — the facts and needs of the specific organization.
- **Industry models/patterns** — curated knowledge for insurance, healthcare, financial services, manufacturing, travel, professional services, and other domains.
- **Modeling patterns** — reusable cross-industry structures such as Case, Approval, Assignment, Work Queue, Document/Evidence, Lifecycle, SLA, Escalation, Decision, Party/Role, and Audit/History.
- **Process patterns** — recurring forms of work such as Request–Review–Decision, Submit–Validate–Approve, parallel review, wait/remind/escalate, and exception routing.
- **Reference knowledge** — standards, regulations, taxonomies, existing models, legacy systems, and organizational terminology.
- **AI native knowledge** — broad domain and modeling knowledge already available to the agent.

These sources are aids to modeling; none of them is the final requirements model.

## Role of the AI modeler

The AI is the active modeling participant. The pattern and reference libraries are passive knowledge resources.

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

## Recommended modeling flow

1. **Understand** — establish objective, scope, terminology, constraints, and context.
2. **Seed** — load relevant industry and reference knowledge.
3. **Discover** — identify candidate concepts, actors, capabilities, processes, rules, events, and applicable patterns.
4. **Compose** — build one coherent candidate requirements model and resolve overlaps and dependencies.
5. **Specialize** — adapt the model to how this organization actually works.
6. **Challenge** — use the six interrogatives to find omissions, contradictions, weak areas, and unresolved questions.
7. **Validate** — walk scenarios and examples with stakeholders.
8. **Baseline** — produce the agreed requirements model as input to application design.

## Target picture

```text
Requirements + Stakeholders + Existing Systems
                    |
                    v
              AI Modeler + Architect
                    ^
       +------------+-------------+
       |            |             |
 Industry       Modeling       Reference
 Models         Patterns       Knowledge
       |            |             |
       +------------+-------------+
                    |
                    v
          COMPLETE REQUIREMENTS MODEL

          WHAT   concepts/information
          HOW    behavior/processes
          WHERE  location/boundaries
          WHO    actors/responsibility
          WHEN   events/lifecycle/time
          WHY    goals/policies/rules
                    |
                    v
              Review / Validate
                    |
                    v
             Application Design
```

## Key principle

**Patterns and industry models do not replace AI reasoning. They give the AI curated, inspectable, reusable knowledge and modeling contracts that help it produce a more consistent, traceable, complete requirements model.**

The target of the modeling phase is the requirements model itself. Application design and implementation are downstream concerns.
