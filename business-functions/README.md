# Business Functions — Draft Discovery Catalog

**Status:** exploratory, not a prescribed enterprise model.

This catalog starts from **what an organization needs to do**, not from entity designs. Functions are canonical prompts for AI-assisted requirements discovery. No function implies a table, module, workflow, API, or mandatory feature.

## Two independent views

- **Function hierarchy:** groups and subfunctions describe what an enterprise may need to do. A function has one canonical name and definition.
- **Domain views:** industry or organization contexts suggest relevant canonical functions, with familiar labels. A domain does not own or duplicate a function.
- **Concepts:** vocabulary and conceptual relationships may be associated with functions later; they are not the primary navigation path.

A user chooses one or more domains, reviews suggested functions, selects applicable ones, adds missing functions, and then discusses their actual requirements with AI. **Selection means investigate this function, not implement all possible behavior.**

## Content

- [Canonical function hierarchy](functions.md)
- [Domain selection index](../domains/README.md)
- [Domain-to-function matrix](../domains/function-matrix.md)

## Rules for evolution

1. Reuse a canonical function when purpose and essential activity are the same, even when terminology differs.
2. Introduce a specialization only for a meaningful difference in purpose or behavior, not merely a renamed role.
3. A function can apply to many domains, and a domain can suggest many functions.
4. Domain labels and suggestions are optional, non-exclusive, and never application constraints.
5. Keep entries concise. Defer entities, cardinality, API design, inheritance, runtime logic, and detailed verification until application requirements are known.
6. The hierarchy is a **discovery aid**, not necessarily an organization's departments or software architecture.

Existing `model/`, `industry-patterns/`, and `modeling-patterns/` content remains intact while this alternative is reviewed.
