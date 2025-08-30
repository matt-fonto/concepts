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
  // append => add end
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // prepend => add beginning
  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  // removeFirst
  removeFirst() {
    if (!this.head) {
      return null;
    }

    // [10, 20, 30]
    // removeFirst
    // head -> head.next
    // this.head
    const removed = this.head;
    this.head = removed.next;
    this.length--;

    return removed;
  }

  // removeLast
  removeLast() {
    if (!this.head) {
      return null;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      current = current.next;
      prev = current;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    return current.value;
  }

  // find
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  // print
  print() {
    const result = [];
    let current = this.head;

    while (current) {
      result.push(current.value);

      current = current.next;
    }

    return result;
  }
}
