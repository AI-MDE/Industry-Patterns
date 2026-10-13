# Travel Model Pattern

## Intent

Model travel businesses that publish and sell transport, lodging, activities, packages, and related services; build itineraries; reserve supplier inventory; issue travel documents; collect payment; manage changes and cancellations; and respond to operational disruptions.

This pattern specializes the Cross-Industry Party, Role, Product, Service, Offering, Agreement, Order, Fulfillment, Price, Payment, Event, Status, Location, and Measurement concepts.

## Business overview

**Traveler Need → Search/Offer → Itinerary → Reservation → Booking → Payment → Ticket/Voucher → Service Fulfillment → Change/Disruption/Refund**

Travel Suppliers publish scheduled or availability-based Travel Services. Distributors assemble those services into Offers and Itineraries. A Customer or Travel Arranger selects an Offer and supplies Traveler details. Reservations hold inventory; an accepted commercial transaction produces a Booking containing one or more Booking Items and Segments. Payment and supplier confirmation enable tickets, vouchers, or other fulfillment documents. Before or during travel, voluntary changes and supplier disruptions may cause rebooking, cancellation, additional collection, exchange, refund, or compensation.

## Pattern variants

### Simple

Use for one supplier type or a focused booking prototype.

Core concepts: Traveler; Travel Service; Offer; Itinerary; Reservation; Booking; Booking Item; Payment; Ticket or Voucher.

### Standard

Use as the default for operational travel applications.

Adds: Customer; Travel Arranger; Supplier; Distribution Channel; Location; Schedule; Service Instance; Availability; Fare or Rate; Price Component; Traveler Document; Segment; Reservation Item; Booking Party; Ancillary Service; Ticket; Voucher; Fulfillment; Change Request; Cancellation; Refund; Disruption.

### Enterprise

Use for travel marketplaces, agencies, tour operators, corporate travel, global distribution, packages, loyalty, settlement, or multi-supplier servicing.

Adds: Supplier Agreement; Distribution Agreement; Agency; Corporate Account; Travel Policy; Approval; Package; Package Component; Inventory Allotment; Married Segment; Fare Rule; Rate Plan; Commission; Markup; Currency Conversion; Loyalty Account; Loyalty Transaction; Settlement; Exchange Document; Electronic Miscellaneous Document; Interline Agreement; Disruption Protection; Duty of Care Case.

## Travel roles

See [canonical travel roles](behavior/travel.md#travel-roles).

## Product, service, and schedule concepts

### Travel Product

Canonical concept: [Product](../model/subjects/product/product/product.md) (as Travel Product).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Travel Service

Canonical concept: [Service](../model/subjects/product/product/service.md) (as Travel Service).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Service Instance

Canonical concept: [Scheduled Service](../model/subjects/travel/scheduled-service/scheduled-service.md) (as Service Instance).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Schedule

Canonical concept: [Schedule](../model/subjects/scheduling/appointment/schedule.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Location

Canonical concept: [Geographic Location](../model/subjects/location/geographic-location/geographic-location.md) (as Location).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Availability

Canonical concept: [Availability](../model/subjects/resource/resource/availability.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Offering and pricing

### Travel Offer

Canonical concept: [Offering](../model/subjects/product/offering/offering.md) (as Travel Offer).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Offer Item

Canonical concept: [Offer Item](../model/subjects/travel/booking/offer-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fare or Rate

Canonical concept: [Price](../model/subjects/product/offering/price.md) (as Fare or Rate).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Price Component

Canonical concept: [Price Component](../model/subjects/product/offering/price-component.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fare Rule or Rate Rule

Canonical concept: [Price Rule](../model/subjects/product/offering/price-rule.md) (as Fare Rule or Rate Rule).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ancillary Service

Canonical concept: [Ancillary Service](../model/subjects/travel/scheduled-service/ancillary-service.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Traveler and itinerary concepts

### Traveler

Canonical concept: [Traveler](../model/subjects/travel/traveler/traveler.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Traveler Document

Canonical concept: [Traveler Document](../model/subjects/travel/traveler/traveler-document.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Itinerary

Canonical concept: [Itinerary](../model/subjects/travel/traveler/itinerary.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Segment

Canonical concept: [Segment](../model/subjects/travel/traveler/segment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Connection

Canonical concept: [Connection](../model/subjects/travel/traveler/connection.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Reservation and booking concepts

### Reservation

Canonical concept: [Reservation](../model/subjects/scheduling/reservation/reservation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reservation Item

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Booking

Canonical concept: [Booking](../model/subjects/travel/booking/booking.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Booking Item

Canonical concept: [Booking Item](../model/subjects/travel/booking/booking-item.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Booking Party

Canonical concept: [Party Role](../model/subjects/party/party/party-role.md) (as Booking Party).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Traveler Assignment

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Supplier Confirmation

Application detail: not in the canonical model; an application adds it ([concepts applications typically add](#concepts-applications-typically-add)).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Payment and settlement

### Payment Authorization

Canonical concept: [Payment Authorization](../model/subjects/finance/payment/payment-authorization.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment

Canonical concept: [Payment](../model/subjects/finance/payment/payment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Payment Allocation

Canonical concept: [Payment Allocation](../model/subjects/finance/payment/payment-allocation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Commission or Markup

Canonical concept: [Commission](../model/subjects/finance/invoice/commission.md) (as Commission or Markup).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Supplier Settlement

Canonical concept: [Settlement](../model/subjects/finance/payment/settlement.md) (as Supplier Settlement).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Ticketing and fulfillment

### Travel Document

Canonical concept: [Travel Document](../model/subjects/travel/travel-document/travel-document.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Ticket Coupon

Canonical concept: [Ticket Coupon](../model/subjects/travel/travel-document/ticket-coupon.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Voucher

Canonical concept: [Voucher](../model/subjects/travel/travel-document/voucher.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Fulfillment

Canonical concept: [Fulfillment](../model/subjects/fulfillment/fulfillment/fulfillment.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Change, cancellation, and disruption

### Change Request

Canonical concept: [Change Request](../model/subjects/request/order/change-request.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Booking Change

Canonical concept: [Change Request](../model/subjects/request/order/change-request.md) (as Booking Change).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Cancellation

Canonical concept: [Cancellation](../model/subjects/request/order/cancellation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Refund

Canonical concept: [Refund](../model/subjects/finance/payment/refund.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Disruption

Canonical concept: [Disruption](../model/subjects/travel/disruption/disruption.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Reaccommodation

Canonical concept: [Reaccommodation](../model/subjects/travel/disruption/reaccommodation.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

### Duty of Care Case

Canonical concept: [Duty of Care Case](../model/subjects/travel/disruption/duty-of-care-case.md).

The canonical page contains the definition, logical attributes, rules, and source-specific detail.

## Relationship model

See [canonical relationship model](behavior/travel.md#relationship-model).

## Lifecycle models

See [canonical lifecycle models](behavior/travel.md#lifecycle-models).

## Business events

See [canonical business events](behavior/travel.md#business-events).

## Baseline business and integrity rules

See [canonical baseline business and integrity rules](behavior/travel.md#baseline-business-and-integrity-rules).

## AI modeling questions

1. Is the business a Supplier, agency, marketplace, tour operator, corporate travel manager, or a combination?
2. Which travel services are supported: air, rail, hotel, vehicle, cruise, tour, transfer, activity, insurance, or package?
3. Are Products, Services, Service Instances, Offers, Reservations, and Bookings independently meaningful?
4. Which distribution channels and supplier connectivity models are used?
5. Are Travelers, Customers, Arrangers, Bookers, Payers, and Beneficiaries different roles?
6. Which identity, passport, visa, accessibility, loyalty, and traveler-preference data is legitimately required?
7. Is inventory live, allotted, request-based, on-demand, or externally confirmed?
8. How long may inventory and price be held?
9. Which fare/rate rules, taxes, fees, commissions, markups, and currencies apply?
10. Can an Itinerary contain multiple Suppliers and independently changeable Segments?
11. Which services require tickets, vouchers, passes, confirmations, or no document?
12. How are voluntary changes, involuntary disruptions, exchanges, cancellations, refunds, and no-shows handled?
13. Which connections are protected, and who owns reaccommodation?
14. Are corporate policy, approval, duty of care, or traveler tracking required?
15. How are supplier settlement and financial reconciliation performed?
16. Which operational, customer, financial, and sustainability measures are required?

## MDE modeling guidance

- Reuse Cross-Industry Party and Party Role; do not collapse Traveler, Customer, Arranger, Payer, and User.
- Keep Product, Service, Service Instance, Offer, Reservation, Booking, Booking Item, Travel Document, and Fulfillment distinct.
- Treat Itinerary as the Traveler's organized plan and Booking as the commercial servicing record.
- Preserve supplier references and accepted commercial snapshots; current supplier content cannot reconstruct history reliably.
- Model multi-segment, multi-traveler, multi-supplier, split-payment, exchange, and partial-refund relationships explicitly.
- Keep voluntary Change, Cancellation, supplier Disruption, and Reaccommodation as separate concepts.
- Put availability, eligibility, pricing, ticketing, change, refund, and settlement rules on authoritative operations.
- Use cases orchestrate search, choice, servicing, and exception paths while invoking those operations.

## Anti-patterns

### Itinerary Equals Booking

An Itinerary organizes travel intent and sequence; a Booking records accepted commercial commitments and servicing references.

### Offer Equals Reservation Equals Ticket

An Offer proposes; a Reservation holds; a Booking confirms; a Ticket or Voucher proves entitlement.

### Traveler Equals Customer Equals Payer

The traveler may be a child, employee, guest, or beneficiary while another Party arranges and pays.

### One Booking, One Supplier, One Traveler

This fails for families, groups, packages, corporate travel, connections, and marketplaces.

### Current Schedule Reconstructs History

Schedules and supplier content change. Historical Bookings require accepted snapshots and source references.

### Cancellation Equals Refund

Cancellation terminates service; refund determines recoverable value and payment. Either may occur without the other.

### Booking Status as Everything

Reservation, payment, supplier confirmation, ticket, Segment, fulfillment, change, refund, and disruption require independent states.

## Physical mapping examples

| Logical name | Example physical name |
|---|---|
| Service Instance | `service_instance` |
| Travel Offer | `travel_offer` |
| Offer Item | `offer_item` |
| Reservation Item | `reservation_item` |
| Booking Item | `booking_item` |
| Booking Party | `booking_party` |
| Traveler Assignment | `traveler_assignment` |
| Supplier Confirmation | `supplier_confirmation` |
| Travel Document | `travel_document` |
| Change Request | `change_request` |
| Booking Change | `booking_change` |
| Duty of Care Case | `duty_of_care_case` |

Logical names remain authoritative. Technology-stack and supplier-integration rules generate physical names only after the logical model is accepted.

## Future behavioral expansion

Future behavior belongs in the canonical domain and references existing entities. Application-specific UI, architecture, and executable tests belong in the consuming application.

Expand the existing canonical domain with reusable capabilities, roles, rules, use cases, and workflows for Content and Availability, Shopping and Offers, Itinerary Planning, Reservation and Booking, Payment and Ticketing, Travel Fulfillment, Servicing and Refunds, Disruption Management, and Supplier Settlement. Candidate actor-goal use cases include Search Travel, Build Itinerary, Price Offer, Hold Inventory, Confirm Booking, Add Traveler, Collect Payment, Issue Ticket or Voucher, Change Booking, Cancel Booking, Calculate Refund, Manage Disruption, Reaccommodate Traveler, and Reconcile Supplier Settlement.

## Canonical model bindings

This pattern selects and connects concepts in the [coherent model](../model/README.md). The sections below are views of those definitions. Follow the canonical business definitions for relationships, roles, lifecycles, events, and rules; use the variant guidance here to select the relevant detail.

| Source term | Canonical concept | ABE |
|---|---|---|
| Travel Product | [Travel Product](../model/subjects/product/product/product.md) | [Travel Product](../model/subjects/product/product/README.md) |
| Travel Service | [Travel Service](../model/subjects/product/product/service.md) | [Travel Product](../model/subjects/product/product/README.md) |
| Service Instance | [Service Instance](../model/subjects/travel/scheduled-service/scheduled-service.md) | [Travel Product](../model/subjects/product/product/README.md) |
| Schedule | [Schedule](../model/subjects/scheduling/appointment/schedule.md) | [Travel Product](../model/subjects/product/product/README.md) |
| Location | [Location](../model/subjects/location/geographic-location/geographic-location.md) | [Travel Product](../model/subjects/product/product/README.md) |
| Availability | [Availability](../model/subjects/resource/resource/availability.md) | [Travel Product](../model/subjects/product/product/README.md) |
| Travel Offer | [Travel Offer](../model/subjects/product/offering/offering.md) | [Travel Offer](../model/subjects/product/offering/README.md) |
| Offer Item | [Offer Item](../model/subjects/travel/booking/offer-item.md) | [Travel Offer](../model/subjects/product/offering/README.md) |
| Fare or Rate | [Fare or Rate](../model/subjects/product/offering/price.md) | [Travel Offer](../model/subjects/product/offering/README.md) |
| Price Component | [Price Component](../model/subjects/product/offering/price-component.md) | [Travel Offer](../model/subjects/product/offering/README.md) |
| Fare Rule or Rate Rule | [Fare Rule or Rate Rule](../model/subjects/product/offering/price-rule.md) | [Travel Offer](../model/subjects/product/offering/README.md) |
| Ancillary Service | [Ancillary Service](../model/subjects/travel/scheduled-service/ancillary-service.md) | [Travel Offer](../model/subjects/product/offering/README.md) |
| Traveler | [Traveler](../model/subjects/travel/traveler/traveler.md) | [Traveler](../model/subjects/travel/traveler/README.md) |
| Traveler Document | [Traveler Document](../model/subjects/travel/traveler/traveler-document.md) | [Traveler](../model/subjects/travel/traveler/README.md) |
| Itinerary | [Itinerary](../model/subjects/travel/traveler/itinerary.md) | [Traveler](../model/subjects/travel/traveler/README.md) |
| Segment | [Segment](../model/subjects/travel/traveler/segment.md) | [Traveler](../model/subjects/travel/traveler/README.md) |
| Connection | [Connection](../model/subjects/travel/traveler/connection.md) | [Traveler](../model/subjects/travel/traveler/README.md) |
| Reservation | [Reservation](../model/subjects/scheduling/reservation/reservation.md) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Reservation Item | [Reservation Item](#concepts-applications-typically-add) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Booking | [Booking](../model/subjects/travel/booking/booking.md) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Booking Item | [Booking Item](../model/subjects/travel/booking/booking-item.md) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Booking Party | [Booking Party](../model/subjects/party/party/party-role.md) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Traveler Assignment | [Traveler Assignment](#concepts-applications-typically-add) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Supplier Confirmation | [Supplier Confirmation](#concepts-applications-typically-add) | [Reservation](../model/subjects/scheduling/reservation/README.md) |
| Payment Authorization | [Payment Authorization](../model/subjects/finance/payment/payment-authorization.md) | [Payment Authorization](../model/subjects/finance/payment/README.md) |
| Payment | [Payment](../model/subjects/finance/payment/payment.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Payment Allocation | [Payment Allocation](../model/subjects/finance/payment/payment-allocation.md) | [Invoice](../model/subjects/finance/invoice/README.md) |
| Commission or Markup | [Commission or Markup](../model/subjects/finance/invoice/commission.md) | [Payment Authorization](../model/subjects/finance/payment/README.md) |
| Supplier Settlement | [Supplier Settlement](../model/subjects/finance/payment/settlement.md) | [Payment Authorization](../model/subjects/finance/payment/README.md) |
| Travel Document | [Travel Document](../model/subjects/travel/travel-document/travel-document.md) | [Travel Document](../model/subjects/travel/travel-document/README.md) |
| Ticket Coupon | [Ticket Coupon](../model/subjects/travel/travel-document/ticket-coupon.md) | [Travel Document](../model/subjects/travel/travel-document/README.md) |
| Voucher | [Voucher](../model/subjects/travel/travel-document/voucher.md) | [Travel Document](../model/subjects/travel/travel-document/README.md) |
| Fulfillment | [Fulfillment](../model/subjects/fulfillment/fulfillment/fulfillment.md) | [Travel Document](../model/subjects/travel/travel-document/README.md) |
| Change Request | [Change Request](../model/subjects/request/order/change-request.md) | [Change Request](../model/subjects/request/order/README.md) |
| Booking Change | [Booking Change](../model/subjects/request/order/change-request.md) | [Change Request](../model/subjects/request/order/README.md) |
| Cancellation | [Cancellation](../model/subjects/request/order/cancellation.md) | [Change Request](../model/subjects/request/order/README.md) |
| Refund | [Refund](../model/subjects/finance/payment/refund.md) | [Change Request](../model/subjects/request/order/README.md) |
| Disruption | [Disruption](../model/subjects/travel/disruption/disruption.md) | [Change Request](../model/subjects/request/order/README.md) |
| Reaccommodation | [Reaccommodation](../model/subjects/travel/disruption/reaccommodation.md) | [Change Request](../model/subjects/request/order/README.md) |
| Duty of Care Case | [Duty of Care Case](../model/subjects/travel/disruption/duty-of-care-case.md) | [Change Request](../model/subjects/request/order/README.md) |

## Concepts applications typically add

Not in the canonical model: specific to this kind of business, or nothing an application could not define itself. An application adds them in its own Specs, usually specializing the canonical concept named.

- **Reservation Item**: A held quantity or entitlement for one Service Instance, rate, room, seat, vehicle, or ancillary.
- **Traveler Assignment**: Assignment of a Traveler to a Booking Item, Segment, seat, room, vehicle, or ancillary.
- **Supplier Confirmation**: Evidence that a Supplier accepted or confirmed a Reservation or Booking Item.
