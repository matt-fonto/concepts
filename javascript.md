# JavaScript

1. Scope
2. Closure
3. Event Loop
4. Promises
5. Module System

## Scope

- Determines where you can access (read or write a variable)
- They are: global, function, block
- Before ES6 (2015), JS variables had only Global and Function Scope `var`. With the introduction of `const` and `let`, block scope was added

  - `var` variables don't accept block scope

  ```js
  {
    let x = 2;
  }

  // x CAN'T be used here -> let/const (block scope)

  {
    var x = 2;
  }

  // x CAN be used here -> var (no-block scope)
  ```

- Global: anything declared outside a function or block lives on the global object (in browsers, `window`)
  - `var`, `let`, and `const`: behave similar when declared globally. They all have global scope

```js
const x = 10; // global

function foo() {
  console.log(x); // reading the gloal
}

foo();
console.log(x); // 10
```

- Function: variables declared inside a function are LOCAL to that function. They don't exist outside

  - Local variables are created when a function starts, and deleted when it's completed
  - `var`, `let`, and `const`: behave similar when declared inside a function. They all have function scope

```js
function bar() {
  const y = 5;
  console.log(y); // local scope
}

bar();
console.log(y); // ReferenceError: y is not defined
```

```js
let outerVar = "outer scope"; // module scope

function exampleFunction() {
  let middleVar = "middle scope";

  if (middleVar) {
    let innerVar = "inner scope";

    console.log(innerVar);
  }

  console.log(middleVar);

  return function enclosingEverything() {
    return [middleVar, outerVar];
  };
}

exampleFunction();
/*
output:
inner scope
middle scope
ƒ enclosingEverything() {
    return [middleVar, outerVar];
  }
*/
```
