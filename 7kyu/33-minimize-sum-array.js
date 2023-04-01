// https://www.codewars.com/kata/5a523566b3bfa84c2e00010b

// Minimize Sum Of Array (Array Series #1)

// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
// minSum({12,6,10,26,3,24}) ==> return (342)
// Explanation:
// The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

function minSum(arr) {
  return arr
    .sort((a, b) => a - b)
    .reduce(
      (acc, e, i) =>
        arr.length / 2 > i ? e * arr[arr.length - (i + 1)] + acc : acc,
      0
    );
}
