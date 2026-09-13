# Design Specification Concepts

Design records application-specific realization choices made within the business requirements and architecture.

## Page

Recommended outline:
- Purpose
- Users
- Presents
- Inputs
- Actions
- States
- Navigation
- Related Use Cases

## API Contract

Recommended outline:
- Purpose
- Consumers
- Endpoint / operation
- Request
- Response
- Validation
- Errors
- Authorization
- Related use cases / entity operations

## Integration

Recommended outline:
- Purpose
- External system
- Direction and protocol
- Data exchanged
- Trigger / timing
- Failure behavior
- Security / credentials
- Observability

## Data Model

The physical/relational realization of the business entities and relationships within the chosen persistence technology. One file per application, under `design/data/`, analogous to `requirements/domain.md` being a single overview file rather than a per-instance concept.

Recommended outline:
- Purpose
- Tables (columns, keys, constraints)
- Relationships
- Migration rules
- Notes
