/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

const { LinkedList } = require("./01. buildASinglyLinkedList");

function reverseList(head) {
  // [1, 2, 3, 4, 5]

  // possibilities
  // 1. traverse it and add to arrays and then reverse it?

  let prev = null; // keeps track of the already traversed part
  let current = head; // the node being processed

  while (current) {
    /* 
    - 1. initialize prev and current
    - 2. initialize newNode
    - 3. do the swap
        - next = curr.next
        - curr.next = prev
        - prev = curr
        - curr = next
    */

    /* 
    == iteration 1

    nextNode = current.next: [1].next => [2]
    current.next = prev: [1].next => null // prev for now is null
    prev = current: null => [1]
    current = nextNode: [1] => [2]

    == iteration 2

    nextNode = current.next: [2].next => [3]
    current.next = prev: [2].next => [1]
    prev = current: [2] -> [1] -> null
    current = nextNode: [2] => [3]
    */

    let nextNode = current.next; // temporary pointer, so we don't lost the rest of the list while rewiring

    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

const list = new LinkedList();

[1, 2, 3, 4, 5].forEach((item) => list.append(item));

console.log(reverseList(list));

/*  
head → [1] → [2] → [3] → [4] → [5] → null

*/
