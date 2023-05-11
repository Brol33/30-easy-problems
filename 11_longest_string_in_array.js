// Write a function that takes an array of strings as argument. Return the longest string.

function longest_string(arr) {
  let cur_max_len = ""
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > cur_max_len.length) {
      cur_max_len = arr[i]
    }
  }
  return cur_max_len
}

console.log(longest_string(['help', 'me'])) // help
console.log(longest_string(['I', 'need', 'candy'])) // candy