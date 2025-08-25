## Understanding Big O

- O(<complexity>): time and space
- Identifies the efficiency of any given algorithm
- Worst-case scenario is considered

### Time

#### 1. O(1) | Constant

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

#### 2. O(n) | Linear

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

#### 3. O(log n) | Logarithmic

- Execution time grows much slower than the input size
- Each step reduces the problem by a fraction (often half)

  - With every step, we eliminate 50% of given inputs

- Operations:

  - Binary search (divide and conquer)
  - Tree operations (balanced BST, heaps, graphs)

- Instead of looking at all elements, eliminate large portions meanwhile

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1; // discard left half
    } else {
      right = mid - 1; // discard right half
    }
  }

  return -1;
}

const sorted = [1, 3, 5, 7];

binarySearch(sorted, 7); // 3
```

#### 4. O(n log n): combination of n + log n

- Algorithm scales almost linearly, but with added logarithmic factor
- All elements are processed, and for each, we divide the problem

- Operations
  - Merge sort
  - Quick sort
  - Heap sort
  - Building balanced trees

```js
function mergeSort(arr) {
  if (arr.length <= 1) {
    return;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr);
```

#### 5. O(n^2): Quadratic

- Algorithm grows proportional to the square of input size
- Meaning:

  - input doubles -> operation grows 4x (2^2 = 4)
  - input triples -> operation grows 6x (3^2 = 6)...

- Operations:
  - Nested loops over the same dataset
  - Comparing each element with every other element (no divide and conquer)
  - Brute force solutions

```js
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    console.log(numbers[i], numbers[j]);
  }
}
```

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap the elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}
```
