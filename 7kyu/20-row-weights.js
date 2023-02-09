// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is asdthe total weight of team 1, and the second element 140 is the total weight of team 2.

function rowWeights(array) {
  return [
    array.reduce((acc, e, i) => acc + (i % 2 === 0 ? e : 0), 0),
    array.reduce((acc, e, i) => acc + (i % 2 !== 0 ? e : 0), 0),
  ];
}
