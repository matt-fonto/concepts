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

- Pros:
  - Scalable
  - Flexible
  -
