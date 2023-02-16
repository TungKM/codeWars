// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a, b) => a.length - b.length);
}
