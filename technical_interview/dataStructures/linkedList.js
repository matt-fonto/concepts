/* 
create a linked list with 
    - a node (value + next)
    - linked list with the following operations:
        - linked list has: head, tail, length

        - append
        - prepend
        - removeFirst
        - find
        - print
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to end
  append(value) {
    const newNode = new Node(value);

    // if the linked list is empty, then...
    if (!this.head) {
      this.head = newNode; //... head points to newNode
      this.tail = newNode; //... tail points to newNode
    } else {
      // if linked list wasn't empty...
      // e.g. [10 -> 20] -> head: 10, tail: 20
      this.tail.next = newNode; // 20 -> newNode
      this.tail = newNode; // tail now points to new node

      // list [10 -> 20 -> newNode]
    }
    this.length++;
  }

  // add to beginning
  prepend(value) {
    const newNode = new Node(value);
    // e.g [10 -> 20]
    // prepend 5 -> [5 -> 10 -> 20]
    newNode.next = this.head; // point the new node to the previous head (don't break the chain)
    this.head = newNode; // move head to new node

    // if empty list...
    if (!this.tail) {
      // ... head and tail must point to this node
      this.tail = newNode;
    }

    this.length++;
  }
}
