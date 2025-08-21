# Technical Interviews

- 3-6 rounds of interviews
- Categories:
  - 1. Behavioral:
    - What type person are you?
    - Do you work well with others?
    - How can you handle conflicts?
    - What you a cultural fit?
  - 2.  System design:
    - How you would design a system?
    - Which technologies you'd use?
    - Why would you take these decisions?
  - 3.  Technical interview
    - Data structure: a way to store data inside the computer's memory
    - Algorithm: set of steps the computer follows to get to a solution
    - Big O: worst-case scenario (time and space complexity)

## Understanding Big O

- O(<complexity>): time and space
- Identifies the efficiency of any given algorithm
- Worst-case scenario is considered

### Time

### 1. O(1) | Constant

Operation doesn't depend on input size

- 10 or 10 million elements, the operation always takes the same amount of time
- Operations:
  - Access array element by index -> arr[0]
  - Lookup key in hash map -> obj[key]
  - Simple arithmetic or assignment

```js
// O(1) examples

const numbers = [1, 2, 3, 4];
numbers[2]; // array by index

const user = {
  id: 1,
  name: "Matt",
  age: 29,
};
user.name; // user[name] lookup obj by key

const a = 5;
let b = a * 3; // arithmetic operations
```

### 2. O(n) | Linear

The operations grow proportionally to the input size

- Operations:
  - Looping through array
  - Searching unsorted list
  - Applying operation per element

```js
// O(n) examples

const numbers = [1, 2, 3, 4];

// loop through array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

function contains(arr, value) {
  for (let element of arr) {
    if (element === value) {
      return true;
    }
  }
}
```
