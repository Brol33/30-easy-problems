// Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.

function sort_alphabetically(arr) {
  return arr.sort()
}

console.log(sort_alphabetically(['b', 'c', 'd', 'a'])) // ['a', 'b', 'c', 'd']
console.log(sort_alphabetically(['1', 'doodle', 'coo', '4'])) // ['1', '4', 'coo', 'doodle']
console.log(sort_alphabetically(['woo', 'fifty', 'jiggle'])) // ['fifty', 'jiggle', 'woo']