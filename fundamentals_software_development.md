# Fundamentals Software Development

## 1. Patterns in Distributed Systems

- Leader-Follower (Primary-Replica): One coordinates writes, others replicate and serve reads
- Sharding / Partitioning: data split across nodes for scalability
- Replication: multiple copies of data for fault tolerance and availability
- Consensus (Raft, Paxos, etc): nodes agree on a single state despite failures
- Event sourcing: state represented as an immutable log of events
- CQRS (Command Query Responsibility Segregation): separating read/write models
- Pub/Sub: async communication via message brokers
- Saga: distributed transaction pattern with compensating actions
