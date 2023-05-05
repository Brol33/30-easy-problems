// Write a function that takes two values, say a and b, as arguments. Return true if the two values are equal and of the same type

function compare(a, b) {
  if (a === b) {
    return true
  } else {
    return false
  }
}

console.log(compare(2, 3))  // expected false
console.log(compare(3, 3))  // expected true
console.log(compare(1, '1'))  // expected false
console.log(compare('10', '10'))  // expected true