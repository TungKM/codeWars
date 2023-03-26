// https://www.codewars.com/kata/5aa1bcda373c2eb596000112
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Array/list size is at least 3 .
// Array/list numbers could be a mixture of positives , negatives and zeros .
// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

// 1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)

// 2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)

function maxTriSum(numbers) {
  //remove duplication
  let arr = numbers.filter((e, i) => numbers.indexOf(e) === i);

  //sort
  return arr
    .sort((a, b) => a - b)
    .slice(-3)
    .reduce((acc, e) => acc + e);
}
