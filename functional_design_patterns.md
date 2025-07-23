# Functional Design Patterns

- FP patterns are different from OO patterns
- FP can be considered a subset of _declarative programming_

### Imperative vs. Declarative

- Imperative: algorithms are written step-by-step
  - You tell the computer explicitly what to do
  - Command the computer (Impero -> Command)

```txt
do this
do that
and that
```

- Declarative: write an expression and let the computer calculate the result

  - HTML
  - The computer expresses expressions
  - To express (Declaro -> declare/describe)

- Most programming languages are not one or the other, they allow a mixture of both styles

## Core Principles of FP Design

- Functions, types, composition

### Functions are things => railway track

- A function is a standalone thing, not attached to a class
- It enters something, it leaves something else
  - apple -> banana

```js
const z = 1;
```

### Composition everywhere

- LEGO

### Types are not classes

## Functions as parameter

- Functions as interfaces
- Partial application & dependency injection
- Continuations, chaining & the pyramid of doom

## Monads

- Error handling, Async

## Maps

- Dealing with wrapped data
- Functors

## Monoids
