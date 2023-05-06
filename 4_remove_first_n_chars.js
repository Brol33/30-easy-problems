// Write a function that takes a string (a) as argument. Remove the first n characters of a. Return the result

function remove_n_chars(a, n) {
  return a.slice(n)
}

console.log(remove_n_chars('abcdefg', 3)) // defg
console.log(remove_n_chars('12345', 1)) // 2345
console.log(remove_n_chars('zero', 0)) // zero