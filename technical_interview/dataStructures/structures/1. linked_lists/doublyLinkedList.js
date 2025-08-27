class Node {
  constructor(value) {
    this.value = value;
    this.head = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to end
  append(value) {
    const newNode = new Node(value);

    // empty list
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // link the next to the newNode (chain)
      newNode.prev = this.tail; // link back
      this.tail = newNode; // append the new node
      // non empty list
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
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // removeLast

  // removeFirst

  // printForward

  // printBackward
}
