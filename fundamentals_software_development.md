# Fundamentals Software Development

## 1. Patterns in Distributed Systems

- If you can avoid distributed systems and concurrency, do so. Otherwise, try to apply the patterns below to reduce complexity

- Leader-Follower (Primary-Replica): One coordinates writes, others replicate and serve reads
- Sharding / Partitioning: data split across nodes for scalability
- Replication: multiple copies of data for fault tolerance and availability
- Consensus (Raft, Paxos, etc): nodes agree on a single state despite failures
- Event sourcing: state represented as an immutable log of events
- CQRS (Command Query Responsibility Segregation): separating read/write models
- Pub/Sub: async communication via message brokers
- Saga: distributed transaction pattern with compensating actions

- Distributed systems, since we haven't got a clear single source, the solution usually is to have a node leader:
  - the leader ensures the followers match
    ... but then:
  - how is the leader selected?
  - what do do when the leader is down?

## 2. Refactoring

- Improve internal code structure without changing external behavior
- Code quality degrades naturally: Good code rots as features are added under pressure. Refactoring keeps it healthy
- It should...
  - make code easier to understand
  - reduce bugs
- It must be backed by tests: make sure you have a safety net
- It should be continuous, not a separate phase: small steps while adding features, instead of big bang rewrites
- It shouldn't focus on "beautiful code" for its own sake, but about reducing future cost of change

```js
// instead of
if (user.age > 18 && user.hasValidId && user.account.balance > 0) {...}

// create a class
class User {
    constructor(
        public age:number,
        public hasValidId: boolean,
        public balance: number
    ) {}

    canMakePurchase():boolean{
        return this.age > 18 && this.hasValidId && this.account.balance > 0;
    }
}

// use the method
if(user.canMakePurchase()){...}
```

### When to create a class?

- Behavior belongs with the data
- Encapsulation improves clarity: instead of having the logic spread, consolidate it somewhere
- Multiple operations on the same concept:
  - e.g., `user.canMakePurchase()`, `user.addFunds()`, `user.isAdult()`

### 2 Layers: UI Layer & Domain/Business Layer

- UI: React functional components (hooks, state, rendering)
- Domain/business layer: entities, rules, workflows (functions or classes)
