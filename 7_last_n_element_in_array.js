// Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.

function get_last_n(a, n) {
  return a.slice(-n)
}

console.log(get_last_n([1, 2, 3, 4, 5], 2)) // [4, 5]
console.log(get_last_n([1, 2, 3], 6)) // [1, 2, 3]
console.log(get_last_n([1, 2, 3, 4, 5, 99, 50], 2)) // [99, 50]