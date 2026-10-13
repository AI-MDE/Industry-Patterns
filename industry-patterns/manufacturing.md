# Manufacturing Model Pattern

## Intent

Model organizations that define and engineer products, manage bills of material and process plans, source and control materials, plan capacity, authorize and execute production, record consumption and output, assure quality, maintain production resources, trace serialized or lot-controlled items, deploy finished products, and analyze cost, yield, reliability, and usage.

This pattern specializes Cross-Industry Party, Role, Product, Asset, Facility, Location, Agreement, Order, Work Effort, Schedule, Inventory, Measurement, Inspection, Cost, Event, Status, and Document concepts.

## Business overview

**Demand → Product Definition → Engineering Change → Material/Capacity Plan → Manufacturing Order → Material Issue → Production Operation → Inspection → Finished Inventory → Deployment/Usage → Feedback**

A Manufacturer defines Product Versions, Parts, Specifications, Bills of Material, Routings, and quality requirements. Customer demand, forecasts, replenishment policies, or project needs create supply requirements. Planning evaluates available inventory, lead times, supplier commitments, capacity, tooling, and labor, then recommends procurement, transfer, or Manufacturing Orders.

Released Manufacturing Orders reserve or issue components and authorize production. Production Runs and Operations record the resources, personnel, material lots, parameters, time, output, scrap, rework, inspections, and genealogy actually involved. Accepted output becomes inventory or is deployed to a customer, site, or higher assembly. Nonconformance, maintenance, warranty, field performance, and usage provide feedback into engineering, quality, planning, and service.

## Pattern variants

### Simple

Use for a small producer or production-tracking prototype.

Core concepts: Product; Part; Bill of Material; Work Center; Manufacturing Order; Production Run; Material Issue; Finished Output; Inspection; Inventory Item.

### Standard

Use as the default for operational manufacturing.

Adds: Product Version; Part Revision; Product Specification; Bill of Material Version; BOM Component; Engineering Change; Routing; Operation Definition; Resource Requirement; Facility; Work Center; Machine Asset; Tool; Material Lot; Inventory Position; Production Schedule; Work Order Operation; Labor Entry; Machine Entry; Quality Plan; Inspection Result; Nonconformance; Rework; Scrap; Product Genealogy; Cost Transaction.

### Enterprise

Use for multiple plants, global supply networks, regulated production, configured products, outsourced operations, or lifecycle integration.

Adds: Product Family; Product Configuration; Option Rule; Approved Manufacturer Part; Supplier Qualification; Contract Manufacturing Order; Master Production Schedule; Material Requirements Plan; Capacity Plan; Digital Work Instruction; Recipe; Batch Record; Calibration; Statistical Process Measure; Deviation; Corrective Action; Serialized Unit; Warranty; Product Deployment; Product Usage; Engineering and Manufacturing Change Board; Manufacturing Analytics Model.

## Roles

See [canonical roles](behavior/manufacturing.md#roles).

## Product engineering concepts

### Product

Canonical concept: [Product](../model/subjects/product/product/product.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Version

Canonical concept: [Product Version](../model/subjects/product/product/product-version.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Part

Canonical concept: [Part](../model/subjects/production/bill-of-material/part.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Part Revision

Canonical concept: [Product Version](../model/subjects/product/product/product-version.md) (as Part Revision).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Specification

Canonical concept: [Product Specification](../model/subjects/production/bill-of-material/product-specification.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Bill of Material

Canonical concept: [Bill of Material](../model/subjects/production/bill-of-material/bill-of-material.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### BOM Component

Canonical concept: [Product Component](../model/subjects/product/product/product-component.md) (as BOM Component).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Engineering Change

Canonical concept: [Engineering Change](../model/subjects/production/bill-of-material/engineering-change.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Process engineering concepts

### Routing

Canonical concept: [Routing](../model/subjects/production/routing/routing.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Operation Definition

Canonical concept: [Operation Definition](../model/subjects/production/routing/operation-definition.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Resource Requirement

Canonical concept: [Requirement](../model/subjects/scheduling/demand/requirement.md) (as Resource Requirement).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Work Instruction

Canonical concept: [Work Instruction](../model/subjects/work/work-effort/work-instruction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Recipe or Process Parameter

Canonical concept: [Recipe or Process Parameter](../model/subjects/production/routing/recipe-or-process-parameter.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Facility, capacity, and resources

### Manufacturing Facility

Canonical concept: [Facility](../model/subjects/location/facility/facility.md) (as Manufacturing Facility).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Work Center

Canonical concept: [Work Center](../model/subjects/production/work-center/work-center.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Machine Asset

Canonical concept: [Equipment](../model/subjects/resource/equipment-model/equipment.md) (as Machine Asset).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Tool

Canonical concept: [Equipment](../model/subjects/resource/equipment-model/equipment.md) (as Tool).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Capacity Plan

Canonical concept: [Capacity Plan](../model/subjects/production/work-center/capacity-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Demand, planning, and manufacturing orders

### Manufacturing Requirement

Canonical concept: [Demand](../model/subjects/scheduling/demand/demand.md) (as Manufacturing Requirement).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Production Schedule

Canonical concept: [Schedule](../model/subjects/scheduling/appointment/schedule.md) (as Production Schedule).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Manufacturing Order

Canonical concept: [Manufacturing Order](../model/subjects/production/manufacturing-order/manufacturing-order.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Work Order Operation

Canonical concept: [Work Order Operation](../model/subjects/production/manufacturing-order/work-order-operation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Material Requirement

Canonical concept: [Material Requirement](../model/subjects/production/manufacturing-order/material-requirement.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Inventory and material control

### Inventory Item

Canonical concept: [Inventory Item](../model/subjects/resource/inventory-item/inventory-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Material Lot

Canonical concept: [Material Lot](../model/subjects/resource/inventory-item/material-lot.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inventory Transaction

Canonical concept: [Inventory Transaction](../model/subjects/resource/inventory-item/inventory-transaction.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Material Reservation

Canonical concept: [Reservation](../model/subjects/scheduling/reservation/reservation.md) (as Material Reservation).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Material Issue

Canonical concept: [Inventory Transaction](../model/subjects/resource/inventory-item/inventory-transaction.md) (as Material Issue).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Production execution

### Production Run

Canonical concept: [Production Run](../model/subjects/production/production-run/production-run.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Operation Execution

Canonical concept: [Operation Execution](../model/subjects/production/production-run/operation-execution.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Labor Entry

Canonical concept: [Time Entry](../model/subjects/workforce/time-entry/time-entry.md) (as Labor Entry).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Machine Entry

Canonical concept: [Usage Record](../model/subjects/measurement/usage-record/usage-record.md) (as Machine Entry).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Process Measurement

Canonical concept: [Measurement](../model/subjects/measurement/measure/measurement.md) (as Process Measurement).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Production Output

Canonical concept: [Production Output](../model/subjects/production/production-run/production-output.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Scrap and Rework

Canonical concept: [Scrap and Rework](../model/subjects/production/production-run/scrap-and-rework.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Quality and traceability

### Quality Plan

Canonical concept: [Quality Plan](../model/subjects/quality/quality-plan/quality-plan.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inspection

Canonical concept: [Inspection](../model/subjects/quality/quality-plan/inspection.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Inspection Result

Canonical concept: [Inspection Result](../model/subjects/quality/quality-plan/inspection-result.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Nonconformance

Canonical concept: [Nonconformance](../model/subjects/quality/quality-plan/nonconformance.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Corrective Action

Canonical concept: [Corrective Action](../model/subjects/quality/quality-plan/corrective-action.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Genealogy

Canonical concept: [Product Genealogy](../model/subjects/production/production-run/product-genealogy.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Maintenance, deployment, and usage

### Maintenance Work Order

Canonical concept: [Work Order](../model/subjects/work/work-effort/work-order.md) (as Maintenance Work Order).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Deployment

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Product Usage

Canonical concept: [Usage Record](../model/subjects/measurement/usage-record/usage-record.md) (as Product Usage).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Warranty or Field Issue

Canonical concept: [Case](../model/subjects/case/case/case.md) (as Warranty or Field Issue).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](behavior/manufacturing.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/manufacturing.md#lifecycle-models).

## Business events

See [canonical business events](behavior/manufacturing.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/manufacturing.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Is production discrete, process, batch, repetitive, project, configure-to-order, engineer-to-order, or mixed?
2. Which plants, lines, work centers, warehouses, subcontractors, currencies, calendars, and jurisdictions apply?
3. How are Products, Parts, Versions, Revisions, Specifications, BOMs, Routings, Recipes, and Instructions governed?
4. Which effectivity models apply: date, lot, serial, order, customer, plant, or configuration?
5. How are engineering changes requested, reviewed, approved, implemented, and verified?
6. What demand sources and planning horizons drive procurement, transfer, and production?
7. Which inventory dimensions require lot, serial, status, ownership, location, shelf life, or potency control?
8. How are material alternates, substitutions, backflush, scrap factors, co-products, and by-products handled?
9. Which resources, skills, tools, setup conditions, and capacity constraints govern Operations?
10. What production data is manual, machine-generated, derived, imported, or electronically signed?
11. Which inspections, sampling rules, tolerances, process controls, and release decisions are required?
12. How are deviations, nonconformance, rework, scrap, corrective action, and concession handled?
13. What traceability depth is required from supplier lot through deployed serialized unit?
14. Which cost methods and variance categories are required?
15. How are maintenance, calibration, tooling life, and downtime integrated with scheduling?
16. Which deployment, warranty, field failure, usage, and reliability feedback is retained?
17. Which operational, quality, delivery, inventory, cost, sustainability, and capacity measures are required?
18. Which external PLM, ERP, MES, WMS, QMS, maintenance, supplier, machine, and analytics systems are authoritative?

## Candidate capabilities and use cases

| Capability | Candidate actor-goal use cases |
|---|---|
| Product Engineering | Define Product Version; Maintain Part Revision; Release BOM; Approve Engineering Change |
| Process Engineering | Define Routing; Configure Operation; Publish Work Instruction; Define Quality Plan |
| Planning | Capture Demand; Plan Materials; Evaluate Capacity; Create Manufacturing Order |
| Material Control | Receive Material; Reserve Material; Issue Material; Substitute Material; Trace Lot |
| Production | Release Order; Start Setup; Execute Operation; Record Output; Complete Order |
| Quality | Perform Inspection; Open Nonconformance; Approve Disposition; Verify Rework |
| Resources | Assign Operator; Schedule Machine; Manage Tool; Record Downtime |
| Maintenance | Open Maintenance Order; Service Asset; Calibrate Tool; Release Asset |
| Deployment | Deploy Product; Record Usage; Register Warranty; Investigate Field Issue |
| Analytics | Analyze Yield; Analyze Variance; Monitor OEE; Trace Genealogy |

## MDE modeling guidance

- Keep Product, Product Version, Part, Part Revision, Inventory Item, Lot, and Serialized Unit distinct.
- Keep planned BOM and Routing definitions separate from actual Material Issues and Operation Executions.
- Model effectivity and versions explicitly; never reconstruct historical production from today's master data.
- Put release, substitution, capacity, execution, inspection, disposition, and traceability rules on authoritative entity operations.
- Use cases orchestrate actor goals while entity operations enforce production and quality invariants.
- Treat machine readings and supplier documents as sourced evidence with provenance and validation state.
- Add industry specializations only where recipes, regulations, traceability, or process behavior materially differ.

## Anti-patterns

### Product Equals Inventory Item

A Product defines what may be produced or sold. Inventory represents specific quantities, lots, serials, locations, statuses, and ownership.

### Current BOM Explains Historical Production

Production genealogy must retain the exact BOM, revisions, substitutions, and issues used at execution time.

### Manufacturing Order Equals Production Run

An Order authorizes output; Runs and Operation Executions record how, where, when, and with which resources work occurred.

### Quality as One Pass/Fail Field

Quality requires plans, characteristics, measurements, sampling, decisions, nonconformance, disposition, and evidence.

### Rework as Editing Output

Rework is additional authorized production activity and must preserve instructions, inputs, labor, measurements, results, cost, and genealogy.

### Machine Equals Work Center

A Work Center represents capacity and scheduling context; a Machine Asset is an individual maintained resource.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Product Version | `product_version` |
| Part Revision | `part_revision` |
| Bill of Material | `bill_of_material` |
| BOM Component | `bom_component` |
| Engineering Change | `engineering_change` |
| Work Order Operation | `work_order_operation` |
| Material Requirement | `material_requirement` |
| Operation Execution | `operation_execution` |
| Production Output | `production_output` |
| Inspection Result | `inspection_result` |
| Product Genealogy | `product_genealogy` |
| Maintenance Work Order | `maintenance_work_order` |

Logical names remain authoritative. Stack, production mode, plant, regulation, and integration rules generate physical names only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows for Product Engineering, Process Engineering, Planning, Inventory, Production, Quality, Maintenance, Costing, Deployment, and Analytics. The first vertical slice should be:

**Release Product and BOM → Create Manufacturing Order → Reserve and Issue Material → Execute Operation → Record Output → Inspect Output → Receive Finished Inventory → Trace Genealogy**

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Product | [Product](../model/subjects/product/product/product.md) | [Product](../model/subjects/product/product/README.md) |
| Product Version | [Product Version](../model/subjects/product/product/product-version.md) | [Product](../model/subjects/product/product/README.md) |
| Part | [Part](../model/subjects/production/bill-of-material/part.md) | [Product](../model/subjects/product/product/README.md) |
| Part Revision | [Part Revision](../model/subjects/product/product/product-version.md) | [Product](../model/subjects/product/product/README.md) |
| Product Specification | [Product Specification](../model/subjects/production/bill-of-material/product-specification.md) | [Product](../model/subjects/product/product/README.md) |
| Bill of Material | [Bill of Material](../model/subjects/production/bill-of-material/bill-of-material.md) | [Product](../model/subjects/product/product/README.md) |
| BOM Component | [BOM Component](../model/subjects/product/product/product-component.md) | [Product](../model/subjects/product/product/README.md) |
| Engineering Change | [Engineering Change](../model/subjects/production/bill-of-material/engineering-change.md) | [Product](../model/subjects/product/product/README.md) |
| Routing | [Routing](../model/subjects/production/routing/routing.md) | [Routing](../model/subjects/production/routing/README.md) |
| Operation Definition | [Operation Definition](../model/subjects/production/routing/operation-definition.md) | [Routing](../model/subjects/production/routing/README.md) |
| Resource Requirement | [Resource Requirement](../model/subjects/scheduling/demand/requirement.md) | [Routing](../model/subjects/production/routing/README.md) |
| Work Instruction | [Work Instruction](../model/subjects/work/work-effort/work-instruction.md) | [Routing](../model/subjects/production/routing/README.md) |
| Recipe or Process Parameter | [Recipe or Process Parameter](../model/subjects/production/routing/recipe-or-process-parameter.md) | [Routing](../model/subjects/production/routing/README.md) |
| Manufacturing Facility | [Manufacturing Facility](../model/subjects/location/facility/facility.md) | [Manufacturing Facility](../model/subjects/location/facility/README.md) |
| Work Center | [Work Center](../model/subjects/production/work-center/work-center.md) | [Manufacturing Facility](../model/subjects/location/facility/README.md) |
| Machine Asset | [Machine Asset](../model/subjects/resource/equipment-model/equipment.md) | [Manufacturing Facility](../model/subjects/location/facility/README.md) |
| Tool | [Tool](../model/subjects/resource/equipment-model/equipment.md) | [Manufacturing Facility](../model/subjects/location/facility/README.md) |
| Capacity Plan | [Capacity Plan](../model/subjects/production/work-center/capacity-plan.md) | [Manufacturing Facility](../model/subjects/location/facility/README.md) |
| Manufacturing Requirement | [Manufacturing Requirement](../model/subjects/scheduling/demand/demand.md) | [Manufacturing Requirement](../model/subjects/scheduling/demand/README.md) |
| Production Schedule | [Production Schedule](../model/subjects/scheduling/appointment/schedule.md) | [Manufacturing Requirement](../model/subjects/scheduling/demand/README.md) |
| Manufacturing Order | [Manufacturing Order](../model/subjects/production/manufacturing-order/manufacturing-order.md) | [Manufacturing Requirement](../model/subjects/scheduling/demand/README.md) |
| Work Order Operation | [Work Order Operation](../model/subjects/production/manufacturing-order/work-order-operation.md) | [Manufacturing Requirement](../model/subjects/scheduling/demand/README.md) |
| Material Requirement | [Material Requirement](../model/subjects/production/manufacturing-order/material-requirement.md) | [Manufacturing Requirement](../model/subjects/scheduling/demand/README.md) |
| Inventory Item | [Inventory Item](../model/subjects/resource/inventory-item/inventory-item.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Material Lot | [Material Lot](../model/subjects/resource/inventory-item/material-lot.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Inventory Transaction | [Inventory Transaction](../model/subjects/resource/inventory-item/inventory-transaction.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Material Reservation | [Material Reservation](../model/subjects/scheduling/reservation/reservation.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Material Issue | [Material Issue](../model/subjects/resource/inventory-item/inventory-transaction.md) | [Inventory Item](../model/subjects/resource/inventory-item/README.md) |
| Production Run | [Production Run](../model/subjects/production/production-run/production-run.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Operation Execution | [Operation Execution](../model/subjects/production/production-run/operation-execution.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Labor Entry | [Labor Entry](../model/subjects/workforce/time-entry/time-entry.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Machine Entry | [Machine Entry](../model/subjects/measurement/usage-record/usage-record.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Process Measurement | [Process Measurement](../model/subjects/measurement/measure/measurement.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Production Output | [Production Output](../model/subjects/production/production-run/production-output.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Scrap and Rework | [Scrap and Rework](../model/subjects/production/production-run/scrap-and-rework.md) | [Production Run](../model/subjects/production/production-run/README.md) |
| Quality Plan | [Quality Plan](../model/subjects/quality/quality-plan/quality-plan.md) | [Quality Plan](../model/subjects/quality/quality-plan/README.md) |
| Inspection | [Inspection](../model/subjects/quality/quality-plan/inspection.md) | [Quality Plan](../model/subjects/quality/quality-plan/README.md) |
| Inspection Result | [Inspection Result](../model/subjects/quality/quality-plan/inspection-result.md) | [Quality Plan](../model/subjects/quality/quality-plan/README.md) |
| Nonconformance | [Nonconformance](../model/subjects/quality/quality-plan/nonconformance.md) | [Quality Plan](../model/subjects/quality/quality-plan/README.md) |
| Corrective Action | [Corrective Action](../model/subjects/quality/quality-plan/corrective-action.md) | [Quality Plan](../model/subjects/quality/quality-plan/README.md) |
| Product Genealogy | [Product Genealogy](../model/subjects/production/production-run/product-genealogy.md) | [Quality Plan](../model/subjects/quality/quality-plan/README.md) |
| Maintenance Work Order | [Maintenance Work Order](../model/subjects/work/work-effort/work-order.md) | [Maintenance Work Order](../model/subjects/work/work-effort/README.md) |
| Product Deployment | [Product Deployment](#concepts-applications-typically-add) | [Maintenance Work Order](../model/subjects/work/work-effort/README.md) |
| Product Usage | [Product Usage](../model/subjects/measurement/usage-record/usage-record.md) | [Maintenance Work Order](../model/subjects/work/work-effort/README.md) |
| Warranty or Field Issue | [Warranty or Field Issue](../model/subjects/case/case/case.md) | [Maintenance Work Order](../model/subjects/work/work-effort/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Product Deployment**: Placement, installation, commissioning, or transfer of a finished Product to a customer, site, asset, or operational context.
