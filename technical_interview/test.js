// 1. Write a merge sort algorithm

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let leftPointer = 0,
    rightPointer = 0;

  while (leftPointer < left.length && rightPointer < right.length) {
    if (left[leftPointer] < right[rightPointer]) {
      result.push(left[leftPointer]);
      leftPointer++;
    } else {
      result.push(right[rightPointer]);
      rightPointer++;
    }
  }

  return result
    .concat(left.slice(leftPointer))
    .concat(right.slice(rightPointer));
}

console.log(mergeSort([4, 5, 2, 503, 32, 53]));
