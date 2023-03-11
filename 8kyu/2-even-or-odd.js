// DESCRIPTION:
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  if (number === undefined || typeof number !== "number") return false;
  return number % 2 === 0 ? "Even" : "Odd";
}
