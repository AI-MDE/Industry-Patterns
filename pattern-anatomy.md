# MDE Industry Pattern Anatomy

The current material is a domain-model foundation enriched with business meaning. A complete MDE industry pattern should ultimately contain:

1. Business overview, scope, motivation, and value
2. Capabilities
3. Actors and roles
4. Core business concepts and relationships
5. Business events
6. Processes and journeys
7. Use cases
8. Entity operations
9. Policies and business rules
10. States and transitions
11. Pages and interaction requirements
12. Scenarios and test examples
13. Analytics and measures

## Current coverage

Every industry pattern except Professional Services now carries a detailed logical model: business overview, complexity variants, actors and roles, concepts, relationships, lifecycles, business events, baseline rules, AI modeling questions, MDE guidance, anti-patterns, and candidate behavioral expansion. Professional Services is the least detailed and does not yet follow this structure (no variants, lifecycles, events, or baseline rules sections). Health Care is the only subject instantiated as a [knowledge base](knowledge-bases/health-care/README.md).

## Future work

Expand each catalog subject into the complete anatomy without treating entities as the whole business model. Use cases should follow MDE's behavioral contract:

**Trigger → Preconditions → Input → Context → Steps → Outcome → Output → Postconditions**

Rules should govern entity operations. Use-case steps should invoke those operations and relevant pages, while scenarios provide concrete values and choices for verification and testing.
