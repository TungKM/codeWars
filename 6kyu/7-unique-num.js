// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/javascript
// Find the unique num

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  if (arr.filter((e) => e == arr[0]).length == 1) return arr[0];

  const num = arr[0];

  for (let i of arr) if (i !== num) return i;
}
