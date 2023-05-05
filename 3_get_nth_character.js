// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

function nth_character(char, n) {
  return char[n - 1]
}
console.log(nth_character('abcd', 1)) // a
console.log(nth_character('owiejfsdf', 4)) // e
console.log(nth_character('charcoal', 7)) // a