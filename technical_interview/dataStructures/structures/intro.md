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

### 3. Stack (LIFO)

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

### 4. Queue (FIFO)

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
