# Software Architecture

- Similar to architects, we also must blend art and science to deliver satisfactory solutions. Instead of bricks, we solve it with code

## 1. Definition

- What is software architecture?

  > "Architecture is about the important stuff. Whatever that is." - Ralph Johnson

  - Focus on structure, instead of implementation details
  - Anticipate expensive choices
  - Core decisions for high quality

- Let's contextualize to an `E-commerce`

### 1.1 Terminology

#### 1. Presentation layer: Translates user actions into application requests

- Handles UI/UX
- Knows nothing of business rules, just how to show data and capture input

#### 2. Application layer: Orchestrate `use-cases` (aka `application services`)

- Receives commands from Presentation, invoke Domain logic, coordinates transations
- Doesn't contain business rules itself, just `wiring` and policies (security checks, logging, validation)

#### 3. Domain layer: Encapsulates business logic and data

- Depending the architecture, and teamsize, the application layer (interfaces), live here, in the domain layer
- The brain of the system. Encapsulates core business logic and rules of the application
- Ideally, it should be "hidden" away and independent from the rest of the system. Then, the application layer would make the job of translating it back and forth
  - Should be independent from specific technologies or frameworks

#### 4. Infrastructure layer

- Provide technical capabilities behind ports/adapters
  - DB implementations, message brokers, external API clients, file systems
- Infra code implements interfaces from the application or domain layers, so technologies can be swap with minimal impact

## 2. Understand the context

- Functional, non-functional requirements and restrictions

1. What should the system do? (Functional requirements)

- Search inventory
- Check reviews
- Buy products
- Review past orders

2. How should the system behave? (Non-functional requirements -> `aka - ilities`)

- Functionality, usability, reliability, effiency, etc

- Developed/maintainable for several years -> maintainability
- Able to serve millions of users -> scalability
- Available 24/7 -> reliability
- Short response latency -> efficiency

3. Besides functional and non-functional requirements, we might also have `Restrictions`

- Legal compliance
- Cost
- Time-to-market
- Standards
- Talent hiring

## 3. Prioritize

- Given the requirements (functional and non-functional) and the business need, we should identify what to prioritize
- What are the trade offs?

## 4. Designing the Arhictecture

- YAGNI -> You ain't gonna need it. -> Avoid overengineering
- Good book -> Software architecture patterns

### 4.1 Software architecture patterns

#### 1. Layered (N-Tier)

- Separation into layers (e.g. presentation, application, domain, infrastructure)
- Each layer only talks with its immediate neighbor
- Example: Classic web app: React UI -> api layer -> domain services -> relational DB
- Pros:

  - Clear separation of concerns
  - Straightforward and simple
  - Easy to test & evolve one layer at a time
  - Fits to most small-to-medium apps

- Cons:
  - Can become rigid "big monolith"
  - Cross-cutting features (caching, logging) might leak across layers
  - Performance overhead from many hops

#### 2. Client-Server

- Clients request services and servers host resources
- State can be centralized (server-centric) or distributed (stateful clients)
- Example: Browser fetching REST APIs from a backend server
- Pros:

  - Centralized control and security
  - Thin clients; easier updates
  - Scales reads by adding servers behind a load-balancer

- Cons:

  - Server can be a single point of failure
  - Overloaded servers lead to poor UX
  - Requires careful versioning for backward compatibility

#### 3. Microservices

- Suite of small, independently deployable services, each owning its data and focuses on a single business capability
- Communicate through lightweight protocols (HTTP, messaging)
- Example: E-commerce where separate carts, orders, payments, inventory services are all difference small services
- Pros:

  - Deployable and scalable independent services
  - Fault isolation limits blast radius. If one service fails, it's alright

- Cons:
  - Operational complexity (CI/CD, monitoring, distributed tracing)
  - Data consistency across services is harder
  - Network latency and versioning become trickier

#### 4. Event-driven

- Components communicate by emitting and consuming events via a broker or bus, enabling async decoupling
- Example: Order service emits "OrderPlaced" -> Inventory & Shipping services react
- Pros:

  - Highly decoupled, easy to add subscribers
  - Natural fit for real-time, reactive flows
  - Can buffer/load-level event during spikes

- Cons:
  - Harder to trace events, tougher to reason about end-to-end flows
  - Testing, debugging async paths is tougher
  - Challenges in data consistency

#### 5. Serverless / FaaS (Function as a service)

- Deploy individual functions triggered by evetns (HTTP calls, queues, timers)
- Infra is abstracted away
- Example: AWS Lambda handling image-upload resizing
- Pros:

  - No server management, pay per execution
  - Automatic scaling to zero when idle
  - Fast to prototype small pieces

- Cons:
  - Cold-start latency for infrequent functions
  - Limited execution time & resource quotas
  - Difficult to coordinate complex, long-running workflows

#### 6. Hexagonal (Ports & Adapters)

- Business logic lives at the core
- All external interactions (UI, DB, APIs) plug in via well-defined ports and adapters
- Example: Core `Order` domain exposes an `OrderRepository` port; adapters implement it for MySQL, MongoDB, or in-memory tests
- Pros:

  - strong isolation of domain from infra
  - easy to swap frameworks or test without real infra
  - encourages well-defined, explicit interfaces

- Cons:
  - Boilerplate (many interfaces & adapters)
  - Overkill for small apps
  - Discipline to keep core pure

#### 7. CQRS (Command-Query Resposibility Segregation) & Event Sourcing

- CQRS: Separate models for reads (queries) and writes (commands/mutations)
- Event sourcing: Every state changed is persisted as an immutable event log, reconstruct state by replaying events
- Example: Banking ledger: each debit/credit is an event; read model `project account balance` and the events inside it
- Pros:

  - Scalable read paths optimized separetely
  - Full audit via event log
  - Easy temporal queries & "time travel" debug

- Cons:
  - Complex to implement (sagas, projections)
  - Event-versioning is tricky as business evolves
  - Higher storage & operational overhead
