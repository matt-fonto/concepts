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

### 1.2 Software Architecture vs. System Design

- Software architecture

  - How you organize and isolate business logic, enforce boundaries, and keep concerns separate
  - Blueprint of your code's structure
    - module/layers (presentation, application, domain, infra)
    - key patterns (layered, microservice, hexagonal, CQRS) and how they depend on and relate to each other
    - focus on how to:
      - organize and isolate business logic
      - enforce boundaries
      - keep concerns separate

- System design
  - Describe entire end-to-end system: services, data stores, networks, clients, caches, CDNs, message bussess, failure domains, monitoring, CI/CD, security, etc
  - focus on how to:
    - scale the system
    - keep it reliable
    - meet SLA (service level agreement) under real-world load

#### Overlaps

- CAP Theorem -> Consistency, Avaibility, Partition-tolerance
  - Trade-offs in your data layer or distributed systems
- Scaling
  - Vertical: more powerful node (more computational power RAM/CPU)
  - Horizontal: more instances of nodes (sharding, load-balancing)
- Requirements
  - Functional: what the system must do
  - Non-functional: how the system must do it (-ilities)

## 2. Understand the context

- Functional, non-functional requirements and restrictions

1. What should the system do? (Functional requirements)

- Search inventory
- Check reviews
- Buy products
- Review past orders

2. How should the system behave? (Non-functional requirements -> `aka -ilities`)

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
- Architecture will evolve
  - Requirements change
  - Some changes are expensive
  - Some changes are unintended
  - Balance to avoid under/over engineering

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

## 5. Scaling Distributed Systems

- What should we scale?

  - Requests -> the number of concurrent requests?
  - Data -> the amount of data we handle?

### 5.1 Vertical scale: Add more processing power to same instance/node

### 5.2 Horizontal scale: Add more nodes on the workflow

- Split load between different servers
- Increases scalability and reliability
- Do you have state?

  - If yes

    - You will face the CAP theorem

      - CAP: Consistency, Availability, Partition (choose 2)

        - Consistency

          - Strict consistency: any write is immediately available to all readers
          - Eventual consistency: there's a delay between a write an when all readers can see that write

  - If no
    - Simply adding a load balancer does the trick

- How to horizontally scale a system?
  - Load balance -> redirect traffic across the nodes in the system
  - Sharding -> splitting the data in different servers
  - Replication -> multiple copies of the data in different servers

## 6. Distributed Cache

- Cache: data is saved so future requests can be answered faster
- Why cachings?
  - Latency reduction: serve frequent reads from fast in-memory store
  - Load relief: offload dbs or servers under peak traffic
  - Throughput boost: absorb spikes by answering from cache

> There are only two hard things in Computer Science: cache invalidation and naming things -> Phil Karlton

- Cache can be added later, as it's an optimization technique
- Steps: make the software maintainable, then scalable, then performant
  - maintainable -> scalable -> performant

## 7. Event-Driven Architecture

- Event: something that happens
  - Triggers -> Event notification
- Command: an order
  - Expects a response
  - Triggers -> a message
- For our purposes, on this context, events and commands will be used interchangeably

- Event

  - can contain data
  - can notify that something happened
  - immutable

- Also known as Publish/Subscribe model

### Components

- Producer: creates the events
- Broker: receives the events and guides them to the consumer
- Consumer: reacts to events and execute what is needed

### Pros and Cons

- Pros

  - Decoupling
  - Dependency inversion
  - Scalability
  - Event-log
  - No single point of failure

- Cons
  - Performance: we add an intermediary layer between "service1" and "service2", the "broker"
  - Consistency: different services consulting the same broker on different times might get different data
  - Complexity: harder to track the order of events

### When to use it?

- Scalability is more important than performance
- When you need
  - data replication
  - parallel processing
  - decoupling

## 8. SAGA Pattern in Microservices

- What are microservices?
  - A way to design software as a suite of independently deployable services. Usually around a business capability

### Concepts

1. Bounded contexts & Single Responsibility

- Each service owns one business capability (e.g., Orders, Inventory, Payments)
- Models and logic stay inside that context. Minimize/avoid leaks between services

2. Loose coupling & high cohesion

- Services communicate **only** via well-defined contracts (APIs or events)
- Internal implementation can change without breaking consumers

3. Independent deployability & Scalability

- Build, test, deploy, and scale each service on its own
- Failures are isolated

4. Decentralized Data Management

- Database-per-service: each service has its own schema or datastore
- Avoid a single shared db; coordination happens via APIs or event streams

5. Communication patterns

- Sync: HTTP/REST, gRPC -> simple but couples latency and availability
- Async: message brokers or event buses. Better decoupling and resilience under load

6. Infra automation

- Containerization (Docker), orchestration (K8s), and CI/CD pipelines help on the process

7. API Gateway & Service discovery

- API Gateway centralizes routine, auth and rate-limiting
- Serive Discovery (DNS or registry) let services find each other dynamically

8. Observability

- Centralized logging, metrics (e.g. Prometheus) and distributed tracing (e.g. OpenTelemetry) help on identifying issues on distributed, micro, services
