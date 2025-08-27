/* 
create a linked list with 
    - a node (value + next)
    - linked list with the following operations:
        - linked list has: head, tail, length

        - append
        - prepend
        - removeFirst
        - removeLast => on a singly linked list, remove last is tricky, because we don't have a pointer to the previous node
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

  removeFirst() {
    if (!this.head) {
      return null;
    }

    const removed = this.head;
    this.head = this.head.next; // the head now becomes what was previously the next of the head

    // if list became empty
    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return removed.value;
  }

  find(value) {
    let current = this.head; // we begin at the head

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next; // while we haven't found it, keep updating the current
    }

    // if none is found, return null
    return null;
  }

  print() {
    const values = [];
    let current = this.head;

    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log(values.join(" -> "));
  }
}

const list = new LinkedList();
list.append(10); // add end
list.append(20); // add end
list.prepend(5); // add beg.

list.print(); // 5 → 10 → 20

console.log(list.find(10)); // Node { value: 10, next: Node { value: 20, next: null } }

list.removeFirst();
list.print(); // 10 → 20
