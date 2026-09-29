# Modeling Pattern Catalog

## Purpose

This catalog is a compact discovery index for AI-assisted requirements modeling. The AI should understand the requirements first, use recognition signals to identify candidate patterns, and load a full pattern definition only when relevant.

A pattern is not copied into a requirements model. Its abstract roles are **bound to existing domain concepts first**; missing concepts are introduced only when necessary. Multiple patterns are reconciled into one canonical requirements model.

## Catalog

| Pattern | Recognition signals | Core contribution |
|---|---|---|
| **Case** | Long-lived subject; information accumulates; multiple activities/participants; work continues toward resolution | Subject, participants, owner, work, evidence, outcome, lifecycle |
| **Assignment** | Work or responsibility must be allocated, claimed, transferred, or reassigned | Assignable subject, assignee, assignment, ownership |
| **Approval** | An authorized party must accept, reject, or authorize something | Requester, approver, approval request, decision |
| **Decision** | An outcome is derived from facts, policies, or rules | Inputs, governing rule/policy, decision, outcome |
| **Document / Evidence** | Information or documents support a case, request, decision, or transaction | Evidence item, subject, provenance, classification |
| **Lifecycle** | A concept moves through meaningful states over time | States, transitions, triggering events, allowed progression |
| **SLA** | A commitment or obligation is measured against time | Target, start condition, deadline, status, breach |
| **Escalation** | A condition, exception, or time threshold changes attention or responsibility | Trigger, escalation target, action, resolution |
| **Work Queue** | Work awaits selection or assignment by eligible workers | Work item, queue, eligibility, priority, claim/assignment |
| **Party / Role** | A person or organization participates in different capacities | Party, role, participation, relationship |
| **Audit / History** | Significant actions or changes must be traceable | Event/change, actor, timestamp, subject, before/after context |
| **Workflow** | Activities require sequencing, branching, waiting, coordination, parallelism, or human work | Activities, transitions, conditions, events, work steps |

## Discovery guidance

Recognition is semantic, not keyword-based. For example, a requirement that says:

> A complaint remains open while documents arrive, different specialists work on it, and it eventually reaches a resolution.

suggests the **Case** pattern even if the word “case” never appears.

Likewise:

- “a supervisor must sign off” can suggest **Approval**;
- “respond within 48 hours” can suggest **SLA**;
- “unclaimed work is available to qualified reviewers” can suggest **Work Queue**;
- “the request moves from submitted to reviewed to closed” can suggest **Lifecycle**;
- “after five days it goes to the manager” can suggest **Escalation**.

Recognition signals identify candidates; they do not prove that a pattern applies.

## Application rule

For every candidate pattern:

1. **Bind** pattern roles to concepts already present in the requirements model.
2. **Reuse** existing domain concepts when they satisfy the required semantics.
3. **Extend** the model only for genuinely missing concepts or relationships.
4. **Preserve invariants** of the applied pattern.
5. **Reconcile** overlaps, dependencies, and conflicts with other applied patterns.
6. **Record bindings** when useful for provenance and downstream reasoning.
7. **Validate** the result against requirements and concrete scenarios.

Example:

```text
Case.subject       -> Complaint
Case.participant   -> Customer
Case.owner         -> Employee
Case.evidence      -> Attachment
Case.outcome       -> Resolution
```

The result remains a domain model of complaints. It does not acquire a redundant generic `Case` entity.

## Composition principle

**Patterns contribute semantics before they contribute new concepts.**

Multiple patterns are semantic overlays on one requirements model, not independent mini-models to be joined afterward.

For example, a complaint model may simultaneously realize:

```text
Complaint          -> Case.subject
Employee           -> Assignment.assignee
Attachment         -> DocumentEvidence.item
SupervisorReview   -> Approval.decision
responseDue        -> SLA.deadline
```

The AI reconciles these bindings into one canonical model.

## Pattern definition format

Full pattern definitions should follow [pattern-anatomy.md](pattern-anatomy.md).
