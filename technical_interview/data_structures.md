# Data Structures

- A way to organize and store data in a computer's memory
- Provides operations for `___` data

  - accessing (GET)
  - inserting (CREATE)
  - modifying (UPDATE)
  - deleting (DELETE)

- It defines how data is arranged

  - There are two main types:

    - Primitive: boolean, int, etc.
    - Non-primitive: more complex data structures (arrays, objects, linked lists, etc)

### Non Primitive Data Structures

- Linear: elements in sequence (one after another)

  - Array
  - Stack
  - Queue
  - Linked lists

- Hierarchical: elements in a tree, with one root and branching children

  - Binary tree: each node has <= 2 children
  - Binary Search Tree (BST): orderer tree for searching
  - Heaps: min/max priority tree
  - Tries: string/prefix tree

- Graph: data as nodes (vertices) + edges (connections)

  - Can be: directed/undirected, weighted/unweighted

- Hash-based: stored in a way that allows constant-time lookup using hash functions

  - Hash map / Object / Dictionary
  - Hash set

## Core Data Structures

### 1. Array

- Ordered list, indexed by number -> `arr[4]`
- Good for:
  - iteration by index `O(1)`
  - simple iteration
- Bad for:
  - Insertion/deletion `O(n)`

```js
const arr = [10, 20, 30];
arr.push(40); // O(1)
arr.unshift(4); // O(n) shifts everything
```

#### Operations

- Access by index: O(1)
- Search:
  - unsorted: O(n) -> we need to look to all the elements
  - sorted: O(log n) -> we remove half entries on each operation
    - if element is bigger than middle, cut all the left elements. Else, cut all the right elements
- Insert:
  - end: O(1) -> arr.push(element)
  - beginning: O(n) -> shifts all elements one position -> arr.unshift(element)
- Delete:
  - end: O(1)
  - beginning: O(n) -> all elements shift left -> arr.shift()

#### Pros and Cons

- Pros

  - Simplest non-primitive data structure
  - Direct access by index
  - Simple iteration
  - Append at end

- Cons
  - Insertion/deletion (non-end): costly `O(n)` because of shifting elements
  - Fixes size (in low level languages): resizing can be expensive
  - Maintaining order

> Arrays are good for fast indexed access and sequential iteration, but bad for dynamic updates (unless done at the end)

#### Examples

1. Two sum

```js

```

### 2. Stack (LIFO)

- Last in, First out
- Good for:
  - Undo/redo
  - function calls
  - parsing
- Operations:
  - push `O(1)`
  - pop `O(1)`

```js
const stack = [];
stack.push(1);
stack.push(2);
stack.pop(); //2
```

### 3. Queue (FIFO)

- First in, First out
- Good for:

  - Task scheduling
  - Print jobs
  - Ticket system
  - Messaging

- Operations:
  - enqueue
  - dequeue

```js
const queue = [];

queue.push("task1"); // O(1)
queue.push("task2");

queue.shift(); // O(1) task1
```

<!-- 29:44 -->
