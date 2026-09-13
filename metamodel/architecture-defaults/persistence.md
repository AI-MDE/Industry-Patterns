---
type: architecture
---

# Persistence Architecture

## 5.1 Schema derived from business data needs

Persistent schema should faithfully support the entities, relationships, invariants, and query needs expressed by the business/application model. It need not mechanically mirror every object one-to-one.

Tables represent the application's business entities and their relationships. Foreign keys enforce those relationships; entity-specific invariants (e.g. date ordering) are validated by the application and database where practical.

## 5.2 Versioned migrations

Database schema changes must be reproducible through versioned migrations. Production schema changes should not depend on undocumented manual edits.

## 5.3 Keys and constraints

Use stable keys and database constraints where they protect true data invariants. Referential integrity, uniqueness, and required relationships should be enforced at the strongest practical layer.

## 5.4 Repository boundary

Persistent business concepts use separate repository classes. Each repository owns the SQL and persistence operations for its concept and exposes storage-oriented operations to the application layer — one repository class per persisted business entity.

Application and HTTP routing code must not issue entity CRUD or query SQL directly. It calls repository methods instead. This keeps transport/application behavior separate from PostgreSQL mechanics and makes persistence behavior independently testable and replaceable.

Repository classes are persistence boundaries, not domain objects. Business rules remain outside the repository unless the rule is inherently a database invariant or persistence concern.

Cross-entity read models may be implemented by the repository that owns the primary result being retrieved. A repository may therefore join related tables when required to construct that result without transferring business ownership of those related concepts.

Database bootstrap, connection management, and migration execution remain infrastructure concerns in the database module rather than being duplicated across repositories.

## 5.5 Audit history

Business-significant changes that require accountability should have an audit strategy capable of identifying what changed, when, and by whom. Do not treat generic application logs as a substitute for required business audit history.

## 5.6 Seed/reference data

Provide reproducible seed or reference data when the application requires known values to run, demonstrate, or test meaningful behavior. Seed data should be semantically useful, not arbitrary filler.

Development and test environments must automatically load representative sample data for the application's business entities as part of database setup, so the application is immediately usable and demonstrable without manual data entry. Sample data must not be loaded in production environments.

## 5.7 Runnable database setup

A developer or deployment process should be able to establish the required database state reproducibly, including migrations and required seed/reference data.

The migration routine must create the target database itself when it does not already exist, rather than assuming it has been provisioned out of band. Running migrations against a fresh environment (e.g. a new `DATABASE_URL` with no existing database) is a normal, supported path.

## 5.8 Storage vs view models

Persistence models, domain models, API contracts, and UI/view models may differ. Do not distort business or UI models merely to mirror storage representation.

## 5.9 Database technology

PostgreSQL is used for durable relational persistence. The application reads database connection settings from environment variables loaded from `app/.env`, including `DATABASE_URL` or the standard `PGHOST`, `PGPORT`, `PGDATABASE`, `PGUSER`, and `PGPASSWORD` variables.
