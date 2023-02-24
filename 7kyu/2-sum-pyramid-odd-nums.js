// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let arrOddNums = [];

  //determine the row and number
  let startNum = n * n - (n - 1);

  //start from current row till before next row
  while (n > 0) {
    arrOddNums.push(startNum);
    startNum += 2;
    n--;
  }

  return arrOddNums.reduce((acc, element) => acc + element, 0);
}
