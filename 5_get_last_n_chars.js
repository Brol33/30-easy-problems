// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result

function get_last_n_chars(string, n) {
  return string.slice(-n)
}

console.log(get_last_n_chars('abcdefg', 3)) // efg
console.log(get_last_n_chars('12345', 1)) // 5
console.log(get_last_n_chars('zero', 4)) // zero