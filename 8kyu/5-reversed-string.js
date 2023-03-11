// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  let arr = str.split("");
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += arr[i];
  }

  return newStr;
}
