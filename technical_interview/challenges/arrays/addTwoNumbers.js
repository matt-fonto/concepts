/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

function addTwoNums(list1, list2) {
  const sums = {};

  /* 
  l1 = [2,4,3], l2 = [5,6,4]
  [0] 2 + 5
  [1] 4 + 6
  [2] 3 + 4
    */

  /* 
// loop 1
    {
        0: 2,
        1: 4,
        2: 3
    }

// loop 2 
    {
        0: 2 + 5
        1: 4 + 6
        2: 3 + 4
    }
*/
  for (let i = 0; i < list1.length; i++) {
    sums[i] = list1[i] + list2[i];
  }

  return sums;
}

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

console.log(addTwoNums(l1, l2));
