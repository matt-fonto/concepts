# System Design

## 1. Functional vs. Non-Functional Requirements

- Functional (WHAT the system does)

  - What the system must perform
  - Scope: Concrete, often mapped to user stories/use cases
  - Testable via unit/integration tests
  - Change impact
    - Adding/removing endpoints, UI screens, data-flows
    - Directly alters code paths and DB schemas

- Non-functoinal (HOW the system does)

  - Quality attributes on how the system performs
    - performance, security, scalability, maintainability
  - Scope: spans modules and infrastructure
  - Testable via benchmarks, load tests, security audits, code reviews
  - Change impact
    - Architectural decisions (caching layers, encryption, CI/CD pipelines)
    - Affects infra, tooling, and non-code config

## 2. Key Questions

- What's the workload? Estimate peak QPS (Query Peaks per second), data volume, traffic patterns
- Who are the users? Identify SLA (Service Level agreement), latency expecations, failure tolerances
- What are the core use-cases? Main flows and possible edge cases
- How will data be stored and accessed? SQL vs NoSQL, sharding vs. partitioning
- What's the consistency model? Strong vs. eventual and their trade-offs
- How do we scale? Vertical vs. horizontal, caching strategy, CDN
- How do we handle failures? Redundzncy, failover, circuit breakers, retries, backoff
- What are security requirements? Authentication, authorization, encryption in transit/at rest
- How will we observe it? Metrics, logging, tracing, alerting and dashboards
- What's the operational cost? Hosting, data transfer, licensing, maintenance overhead

## 3. Core Principles

- Single Responsibility & Modularity: keep services/components focuses
- Loose coupling: minimize dependencies; well defined interfaces
- Abstraction: hide implementation details; expose only what's necessary
- Idempotency & Resilience: design operations to be safe on retries
- KISS (Keep it simple, stupid): avoid over-engineering
- YAGNI (You aren't gonna need it): build only what's required today
- DRY (Don't repeat yourself): share logic whenever possible
- Fail fast & Graceful degradation: detect problems early; degrade non-critical features
- CAP Awareness: Know that every system has trade-offs among Consistency, Availability, and Partition Tolerance
- Evolve with Telemetry: real-world usage guide optmizations and refactoring

## 4. Design Principles in System Design

1. Separation of concerts: small, self-contained modules
   - Reduced reliance on other modules
   - Scale or replace particular components without having (having minimum) ripple effects
2. Encapsulation and abstraction
   - Information hiding
   - Minimizing complexity
3. Loose coupling and High cohesion
   - Modules should be independent and change in one shouldn't affect the others
   - Elements are related, but not dependent
   - Rely on interfaces
4. Scalability and performance
   - Scaling
     - horizontal: increasing the number of instances (add more instances, nodes)
     - vertical: increasing the power of specific instance (raising resource of one node)
   - Performance
     - load balancing, caching, async processing
5. Resilience to Fault tolerance
   - Redudancy, replication, fault detection
   - Systems that survive component failures
6. Security and privacy
