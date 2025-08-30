/* 
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

const { Node, LinkedList } = require("./01. buildASinglyLinkedList");

function reverseList(head) {
  // [1, 2, 3, 4, 5]

  // possibilities
  // 1. traverse it and add to arrays and then reverse it?

  let prev = null; // keeps track of the already traversed part
  let current = head; // the node being processed

  while (current) {
    /* 
    iteration 1

    nextNode = 1.next -> 2
    current.next = prev -> current.next = null
    prev = current 
    
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
