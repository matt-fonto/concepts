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
