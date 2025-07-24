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

### Design principles

1. Functions all the way down
2. Strive for totality

- For every input, there's a valid output
- Don't throw exceptions. Either constrain the input or extend the output
  - Constraint the input
    - E.g.: if your function can't handle 0, don't allow 0 to be input into it
    - in: NonZeroInteger -> out: int
  - Extend the output
    - in: int -> out: int | undefined
- Types are documentation
- Your function's is true to its inputs

### Functions are things => railway track

- A function is a standalone thing, not attached to a class
- It enters something, it leaves something else
  - apple -> banana
- Functions can be used as inputs and outputs

```js
// simplified without the types
const add = (x) => (y) => x + y; // function as output
const useFn = (f) => f() + 1; // function as input
const transformInt = (f) => (x) => f(x) + 1; // function as parameter

// complete
// function as OUTPUT
const add = (x: number) => (y: number) => x + y;

add(3)(4); // 7

// function as INPUT
const useFunction = (func: () => number): number => func() + 1;

useFunction(() => 10); // 11

// function as PARAMETERS (higher-order)
type IntFn = (n: number) => number;

const transformInt =
  (f: IntFn) =>
  (x: number): number =>
    f(x) + 1;

transformInt((n) => n * 2)(10); // 10 * 2 = 20 + 1 = output: 21
```

### Composition everywhere

- LEGO
- Let's say we have:

  - Apple -> banana
  - Banana -> cherry
  - ... we can then compose:
  - Apple -> cherry

- We don't care how a function was built (encapsulation)

> Functions all the way down

- Low-level operations combined form a service
- Services combined form a use-case
- Use-cases combined form a web application

- Composition is fractal
  - Below as above

### Types are not classes

- What is a type?

  - Set of valid inputs
  - Set of valid outputs
  - int | customer | other functions | etc.
  - what we do in typescript when we specify what comes in and what goes out

- Types don't have behavior, only data. Therefore, they can be composed
  - Glue primitives into a type
  - Glue different types into a bigger type

```ts
type Address = {
  street: string;
  houseNumber: number;
};

type Job = {
  title: string;
  complexity: "low" | "mid" | "high";
};

type Person = {
  address: Address;
  job: Job;
};

// etc
type Society = {
  people: Person[];
};
```

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

<!-- 8:37 -->
