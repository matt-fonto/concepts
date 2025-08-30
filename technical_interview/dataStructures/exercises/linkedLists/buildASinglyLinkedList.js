// create a node

// create a linked list
// - append
//  - prepend
// - removeFirst
// - print
// - find

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  // we don't pass anything here, only on the new node
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //append
  append(value) {
    const newNode = new Node(value);

    // if it's empty
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // [10 -> 20 (tail)]
      // append(30)
      // 20.next = 30
      // tail = 30
      // 30.next = null (default constructor)
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // prepend
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // [(head) 10 -> 20 (tail)]
      // prepend(30)
      // 30.next => 10
      // head => newNode

      newNode.next = this.head; // point new node to old head
      this.head = newNode; // point the head to the new node
    }

    this.length++;
  }

  // removeFirst => return it
  removeFirst() {
    // [(head) 10(next:20), 20(next:30), 30(next.null)(tail)]
    // removeFirst()
    // this.head = this.head.next

    if (!this.head) {
      return null;
    }

    const removed = this.head;
    this.head = removed.next; // the next of the removed, becomes the head
    this.length--;

    // if the list became empty, reset tail
    if (!this.head) {
      this.tail = null;
    }

    return removed.value;
  }

  removeLast() {
    // [(head) 10(next:20), 20(next:30), 30(next.null)(tail)] => we need somehow to connect the tail if null to prev

    // if it's empty
    if (!this.head) {
      return;
    }

    // if it's 1 item
    if (this.length === 1) {
      const removed = this.tail;
      this.head = null;
      this.tail = null;
      this.length--;
      return removed.value;
    }

    let current = this.head;
    let prev = null;

    // we need to walk until the end
    while (current) {
      current = current.next;
      prev = current;
    }

    prev.next = null; // clean up the chain to the last item
    this.tail = prev;
    this.length--;

    return current.value; // value of the removed node
  }

  //find
  find(value) {
    // [(head) 10(next:20), 20(next:30), 30(next.null)(tail)]
    let current = this.head; // start from the first node

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next; // step ahead
    }

    return null;
  }

  print() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);

      // step ahead
      current = current.next;
    }

    return result;
  }
}
