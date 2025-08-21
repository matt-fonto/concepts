function mergeSort(arr) {
  // we can't divide more than that
  if (arr.length <= 1) {
    return arr;
  }

  // floor => we basically remove the fraction. 3.9, 3.8, 3.7... -> 3
  // useful to get full numbers on division, without the fraction
  const mid = Math.floor(arr.length / 2); // 7 / 2 => 3.5 => floor => 3
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0,
    j = 0;

  // i takes care of left
  // j takes care of right
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr);
