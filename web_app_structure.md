# Web app architecture

- Major components and their relationship on a system, and how they interact with each other

## Monolithic

All features (UI, business logic, DB) in a single codebase & deployment

- Pros:

  - Simple to understand
  - Easy to debug
  - Good for small teams

- Cons:
  - Single point of failure
  - Downtime (this could be avoided/reduced with deployment strategies)
  - Hard to scale
  - Tight coupling

## Layered (N-tier)

Separation into presentation, business logic, data access, etc

- Pros:
  - Simple to understand
  - Clear data flow
  - Good separation of concerns
- Cons:
  - Hard to scale
  - Logic leaks

## Microservices

Each service is its own application, many times with its own UI, business logic and db

- Small, independent deployable services

- Pros:

  - Scalable
  - Flexible
  - Modular

- Cons:
  - Bigger complexity
  - Harder to debug
  - Distributed system issues (data replication, latency, consistency, network latency)

## Event-Driven / Message-Oriented

Services/Components communicate via async events (Publisher/Subscriber, Kafka)

- Pros:

  - Decoupled
  - Scalable

- Cons:
  - Harder to debug
  - Complexity
  - Non-obvious data flow

## Serverless

Functions that are triggered. Short-lived, performatic (AWS Lambda, Vercel)

- Pros:

  - Fast
  - No infra management
  - Auto-scalable
  - Usually, cost-effective (pay-per-use)

- Cons:
  - No infra control
  - Vendor lock-in
  - Spikes might increase cost

## Micro-frontend

Split frontend into independetly deployable modules

- Pros:

  - Team autonomy & parallel development
  - Frontend "aligned" with backend microservices

- Cons:
  - Increased complexity
  - UX might become inconsistent

## Hexagonal

Domain at the center, with layers around it (UI, DB, infra as plugins)

- Pros:
  - Strong sepearation of concern of business logic and infra
  - Highly testable and maintainable
  - Good for DDD
- Cons:
  - More upfront design work
  - Overkill for simpler apps

## Sum up

- Monolith + layers: good start
- Microservices / event-driven: highly scalable
- Serverless: no infra management, scalable
- Hexagonal: complex business rules
