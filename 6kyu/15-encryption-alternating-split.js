// https://www.codewars.com/kata/57814d79a56c88e3e0000786
// Simple Encryption #1 - Alternating Split

// DESCRIPTION:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || !n) return text;

  let result = text.split("");

  for (let i = 0; i < n; i++)
    result = result
      .filter((_, i) => i % 2 !== 0)
      .concat(result.filter((_, i) => i % 2 === 0));

  return result.join("");
}

function decrypt(encryptedText, n) {
  if (!encryptedText || !n) return encryptedText;

  let result = encryptedText.split("");

  for (let i = 0; i < n; i++) {
    evenLine = result.slice(0, result.length / 2);
    oddLine = result.slice(result.length / 2);
    result = [];

    for (let i of oddLine) {
      result.push(i);

      if (evenLine.length > 0) result.push(evenLine.shift());
    }
  }

  return result.join("");
}
