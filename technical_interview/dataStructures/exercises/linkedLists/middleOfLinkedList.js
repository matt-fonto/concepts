/* 
Given the head of a singly linked list, return the middle noe of the linked list

If there are two middle nodes, return the second middle node
*/

function middleNode(head) {
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
