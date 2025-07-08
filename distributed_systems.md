# Distributed Systems

- Collection of independent nodes (machines or processes) that collaborate over a network and behave as a single, coherent system
- Share resources and coordinate to perform tasks

## Core Concepts

- Transparency: Hiding the distribution (location, replication) so clients see a unified interface
- Concurrency and parallelism: Multiple nodes execute tasks simultaneously.
  - Needs coordination to avoid conflicts
- Fault tolerance: Detecting and recovering from crashes, network partitions, or slow failures via: replication, heartbeats, timeouts
- Consistency models: Strong to eventual
  - Correctness / availability
- CAP Theorem: Consistency, Availability, Partition Tolerance. Pick 2.
- Consensus algorithm: Protocols like Paxos or Raft to a agree on a single value/state across unreliable nodes
- Replication & partitioning: Copying data across nodes (replicas) for durability, and sharding/partitioning for scale
- Time & Sync: Logical clocks (Lamport), vector clocks, or physical clocks to order events
- Communication: RPC (gRPC), message passing (Kafka, RabbitMQ), idempotent APIs, back-off and retry
- Scalability & Load balancing: Horizontal vs. Vertical
  - Distributing traffic
- Observability: Distributed tracing, centralized logging, metrics (latency, error rates)

## Key tech

- RPC & APIs: gRPC, Apache Thrift, REST/GraphQL over HTTP/2
- Messaging & Streaming: Apache Kafka, RabbitMQ, NATS
- Coordination services: Apache ZooKeeper, etcd, HashiCorp Consul
- Distributed datastores: Cassandra, CockroachDB, MongoDB, Amazon DynamoDB
- Containerization & Orchestration: Docker, K8s, Docker Swarm
- Service mesh & load balancing: NGINX, Istio, Linkerd
- Monitoring & tracing: Prometheus, Grafana, Jaeger
