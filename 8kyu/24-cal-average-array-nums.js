// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  return array && array.length > 0
    ? array.reduce((acc, element) => acc + element, 0) / array.length
    : 0;
}
