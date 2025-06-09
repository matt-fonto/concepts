# Concepts

## 1. What is an SQL Injection attack?

- When an attacker uses the input to pass an SQL query, which can return, or even worse, modify, data the user shouldn't have access/permission to
- To avoid it, we should sanitize the input by, for instance, converting it to a string

## 2. What is HTTP Caching?

- We "store" information that is commonly used by the users to reduce the need to consult the server
- We save static files and save on the user's browser (user's device) or some intermediary server, like a proxy. This way we reduce network traffic and improve loading times
- `Cache-Control: public, max-age=time_in_ms`

### HTTP Caching Headers

Response

- Cache-control
  - max-age
  - public/private
    - public: any cache may store, shared (CDN, proxy) and private (browsers)
      - when to use it? -> static assets (images, CSS, JS) that are safe to serve from any intermediary
    - private: only the browser may store
      - when to use it? -> user-specific content (shopping cart, personalized pages)
  - no-cache: must revalidate before reuse
    - allows caches to store the response, but must revalidate with the origin server before each reuse
    - when to use it? -> Data that can be cached for performance, but might change frequently, ensuring freshness on every access
  - no-store: never cache
    - instructs all caches (browsers, proxies, CDNs) to **never** store either the request or the response
    - when to use it? -> Sensitive data (bank statements, personal info) where no trace should be left on disk or memory and the data should always be "fresh"
- Expires: fallback absolute expiry date
- Last-modified: timestamp last change
  Request
- ETag: acts as uuid of a resource
  - Allows the clients to know whether a resource has changed, avoiding full downloads when it hasn't

#### How it works

1. client requests `GET /app.js`
2. Server responds with body + `Cache-control: max-age=600; ETag: "xyz"`
3. For the next 10 minutes, browser servers `app.js` locally
4. After 10 minutes, browser sends `If-None-Match: "xyz"`
   - If unchanged: server replies with `304 Not modified` -> bo body, browser keeps cached file
   - If changed: server replies with `200 OK` + new file + new ETag

## 3. What are the different ways we can scale a SQL Database?

- Do we read a lot, do we write a lot?

Strategies:

1. Vertical: increase the capacity of the server

   - Same server, but bigger
   - Con: single point of failure and exponentially more expensive

2. Read replicas: spin up one or more read-only copies

   - Writes go to primary
   - Reads come from "read-only"
   - Con: can introduce lags

3. Sharding (horizontal): split db across multiple servers by key (user_id, region, etc)

   - Each shard handles a subset of data & traffic
   - Con: adds complexity (routing logic)

4. Table partitioning: within a single server, break large tables into smaller ones
5. Caching layer: Offload frequent lookups to external cache (Redis)

   - Reduces db load and latency
   - Need cache-invalidations to keep data fresh

## 4. What are the different deployment types?

1. Recreate (Big-bang): Tear down the old version, then deploy new one

   - Simple, but causes downtime
   - Difficult to rollback

2. Rolling update: replaces instances in small batches

   - Traffic shifts gradually
   - Minimizes downtime and rollback scope
   - Load balancer would take care of this distribution

3. Blue-Green: Maintains two identical environments (blue & green)

   - Deploy to the idle one, then flip traffic
   - Instant rollback by switching back
   - No downtime, but increased costs

4. Canary release: Send a small percentage of traffic to the new version

   - If metrics look good, ramp up rollout. If not, rollback
   - Similar to blue-green, but more gradual. Send a bit of traffic to the new version

5. A/B Testing: Like canaray, but compare two variants (A and B) to measure user response before committing

6. Toggle-Feature (Dark Launch)

   - Deploy code paths behind flags
   - Enable features for internal users while code sits in prod. Flip the switch when you're ready

## 5. How does the internet work?

1. URL entry and parsing: When we type `https://example.com/path`, the browser divides that into:

   - protocol: `https`
   - domain: `example.com`
   - port: default `443`
   - path: `/path`

2. DNS Resolution: The domain should be resolved into an IP address

   - Domain Name System
   - Table of names and IP addresses

3. TCP & TLS handshakes

   - TCP handshake: Your machine and server exchange `SYN`, `SYN-ACK`, `ACK` packets to establish a reliable connection
   - TLS handshake (for HTTPS): your machine and server negotiate enctryption, exchange keys and verify certificates, so follow up data is private and authenticated

4. HTTP request over IP
   - Browser sends an HTTP request, split into TCP segments and IP packets
   - Routers along the way forward packets based on IP headers until they reach the server network
