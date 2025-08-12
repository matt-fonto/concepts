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

3. Use static types for domain modelling and documentation

- Types can contain business logic

4. Function types are "interfaces"

- Function types provide instant abstraction

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
  - Parametize all the things. Meaning, don't hard code the values the function needs, pass to the function as params

```js
// ❌ hardcoded
function myListBad(){
  const numbers = [1,2,3]

  numbers.forEach(() => {...})
}

// ✅ parametized => parametize only the data
function myListGood(listOfNums){
  listOfNums.forEach(() => {...})
}

myListGood([1,2,3])

// ✅ parametized => parametize not only the data, but also the behavior
// way generic
function myListBetter(listOfNums, action){ // data + behavior as params
  listOfNums.forEach((num) => action(num))
}

myListBetter([1,2,3], (num) => {
    console.log(num)
});
```

```js
function product(value: number) {
  let productResult = 1; // distinct

  // common
  for (let i = 1; i <= value; i++) {
    productResult *= i; // distinct
  }

  return productResult;
}

function sum(value: number) {
  let sumResult = 0;

  for (let i = 1; i <= value; i++) {
    sumResult += i;
  }

  return sumResult;
}

// How to simplify this?
// identify what is common and what is different in them
// we preserve the distinction and preserve what is common
function productOrSum(value: number, operation: "product" | "sum") {
  let result = operation === "product" ? 1 : 0;

  for (let i = 1; i <= value; i++) {
    if (operation === "product") {
      result *= i;
    } else {
      result += i;
    }
  }

  return result;
}
```

### Every function should be a one parameter function

- In functional programming, if a function has more than two params, it should be a function that generates other functions
- In FP, we aim for **unary** (1-arg) functions. If we need more inputs, then we return a new function (currying)
- Therefore, any function that ultimately needs N > 1 args, should be written as a chain of 1-arg functions

#### Why?

- Composition
- Readability

```js
// unary
const increment = (x) => x + 1;

increment(5); // 6

//  currying a 2-arg funtion
// ❌ instead of
const add = (a, b) => a + b;

// ✅ currying
const add => a => b => a + b

const add2 = (2);
add2(3) // 5

// in one line
add(2)(3) // 5

// currying 3+ args (generator of functions)
function func(a){
  return function(b){
    return function(c){
      // do something with a, b, and c
      return a * b * c
    }
  }
}

// usage
const step1 = fn(2) // returns b => c => 2 * b + c
const step2 = step(5) // returns c => 2 * 5 + c
step2(3) // 2 * 5 + 3 = 13

// one line
fn(2)(5)(3) // 13
```

### Partial application & dependency injection

- We take a function that expects N arguments and "lock in" some of the upfront, returning a new function for the remaining args

```js
// manual currying => turn a two-arg fn into a chain of unary fns
const add = (a) => (b) => a + b;

const add5 = add(5); // b => 5 + b
add5(3); // 5 + 3 => 8
add(2)(4); // 2 + 4 => 6
```

- Partial application means pre-filling some arguments of a function now, so you get a new funciton that only needs the remaining arguments later
  - customizing a function in advance

```js
function multiply(a, b) {
  return a * b;
}

// partially apply with `a = 2`
const double = multiply.bind(null, 2);

double(5); // 10
```

> Use partial application when working with lists

### Continuations, chaining & the pyramid of doom

## Monads

- Error handling, Async

## Maps

- Dealing with wrapped data
- Functors

## Monoids
