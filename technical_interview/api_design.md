# API Design

1. Clear naming

```
api/v1/cart/123 ❌
api/v1/carts/123 ✅

- plural makes it clear we're dealing with a collection
```

2. Ensure reliability (Idempotent APIs)

- API Idempotent: make the api multiple times has the same effect as calling it once

### Idempotence

| HTTP Method | Idempotence |
| ----------- | ----------- |
| POST        | NO          |
| GET         | YES         |
| PUT         | YES         |
| PATCH       | NO          |
| DELETE      | YES         |

3. Add versioning

```
/api/v1/carts123
/api/v2/carts123
```
