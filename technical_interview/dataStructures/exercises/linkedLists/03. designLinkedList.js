/* 
Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Get the value of the index node
   * if invalid, return -1
   */
  get(index) {
    if (!this.head || this.length > index) {
      return -1;
    }

    // we need to count the iterations
    let iteration = 0;
    let current = this.head;

    while (current) {
      if (iteration === index) {
        return current.value;
      }

      iteration++;
    }
  }

  /**
   * Add a node of value at beginning
   */
  addAtHead(val) {}

  /**
   * Add a node as the last element
   */
  addAtTail(val) {}
  /**
   * Get the value of the index node
   * if invalid, return -1
   */
  get(index) {}
}
