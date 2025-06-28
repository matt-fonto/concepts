# Software Architecture

- Similar to architects, we also must blend art and science to deliver satisfactory solutions. Instead of bricks, we solve it with code

## 1. Definition

- What is software architecture?

  > "Architecture is about the important stuff. Whatever that is." - Ralph Johnson

  - Focus on structure, instead of implementation details
  - Anticipate expensive choices
  - Core decisions for high quality

- Let's contextualize to an `E-commerce`

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
