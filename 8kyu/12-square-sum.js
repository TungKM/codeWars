// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because, square on each elements

function squareSum(numbers) {
  numbers.forEach((element, index) => (numbers[index] = Math.pow(element, 2)));

  return numbers.reduce((sum, element) => sum + element, 0);
}
