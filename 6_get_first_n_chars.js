// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

function get_first_n_chars(string, n) {
  return string.slice(0, n)
}

console.log(get_first_n_chars('abcdefg', 3)) // abc
console.log(get_first_n_chars('12345', 4)) // 1234
console.log(get_first_n_chars('zero', 0)) // 