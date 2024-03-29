// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  return str.split("").filter((x) => {
    const checkVowel = {
      a: true,
      e: true,
      i: true,
      o: true,
      u: true,
    };
    return checkVowel[x];
  }).length;
}
