// https://www.codewars.com/kata/57eaec5608fed543d6000021
// Divide and Conquer

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x) {
  let strArr = filterNum(x, "string").map((e) => +-e);
  let numArr = filterNum(x, "number");

  return strArr.concat(numArr).reduce((acc, e) => acc + e);
}

function filterNum(arr, type) {
  return arr.filter((e) => typeof e === type);
}
