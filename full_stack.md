# Concepts

1. What is an SQL Injection attack?

- When an attacker uses the input to pass an SQL query, which can return, or even worse, modify, data the user shouldn't have access/permission to
- To avoid it, we should sanitize the input by, for instance, converting it to a string

2. What is HTTP Caching?

- We "store" information that is commonly used by the users to reduce the need to consult the server
- We save static files and save on the user's browser (user's device) or some intermediary server, like a proxy. This way we reduce network traffic and improve loading times
- `Cache-Control: public, max-age=time_in_ms`

#### HTTP Caching Headers

Response

- Cache-control
  - max-age
  - public/private
    - public: any cache may store (CDN, proxy)
    - private: only the browser may store
  - no-cache: must revalidate before reuse
  - no-store: never cache
- Expires: fallback absolute expiry date
- Last-modified: timestamp last change
  Request
- ETag: acts as uuid of a resource
  - Allows the clients to know whether a resource has changed, avoiding full downloads when it hasn't

How it works

1. client requests `GET /app.js`
2. Server responds with body + `Cache-control: max-age=600; ETag: "xyz"`
3. For the next 10 minutes, browser servers `app.js` locally
4. After 10 minutes, browser sends `If-None-Match: "xyz"`
   - If unchanged: server replies with `304 Not modified` -> bo body, browser keeps cached file
   - If changed: server replies with `200 OK` + new file + new ETag
