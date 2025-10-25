# API Design

https://www.youtube.com/watch?v=DQ57zYedMdQ&list=WL&index=4

## Structure

1. Requirements
2. Core entities
3. API Design

- This is the one

4. Data flow
5. High-level Design
6. Deep dives

## API (Application Programming Interface)

- Two software components communicate with each other through a set of definitions and protocols

      Get me all events         Get me all events

  Client <-----------> Server <-----------> Database

- REST is almost always the right answer

## REST

- Built on top of standard HTTP methods
- Resources = core entities
  - Define the data that is being acted upon

GET /events -> Get all events
GET /events/{id} -> Get specific event
GET /venues/{id} -> Get speficic venue
GET /events/{id}/tickets -> Get available tickets for event
POST /events/{id}/bookings -> Create booking for an event
GET /bookings/{id} -> Get specific booking

NOT:
POST /events/create -> No verbs!

- The method suggests the action, not the url itself

### HTTP Methods

> Idempotent: run multiple times and get the same result

- GET
- POST: create data, non idempotent
- PUT: Idempotent update/replace
- PATCH
- DELETE

### Inputs/Request

They have:

- Path params
- Query params
- Request body

#### Path params

GET /events/{id}

- specify which resource you're working with

#### Query params

GET /events?city=<>&date=<>

> ?param1=<>&param2=<>&param3=<>

- Optional filters

#### Request body

POST /events

{
title,
description,
location,
date
}

### Response

1. Status code
2. Response body (usually JSON)

GET /events -> Event[]

Codes:
200 - sucess
201 - sucess, created
400 - bad request
401 - not authenticated
404 - not found
500 - server error
