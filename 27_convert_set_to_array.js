// Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array

function set_to_array(set) {
  return Array.from(set)
}

console.log(set_to_array(new Set([1, 2, 3]))) // [1, 2, 3]
console.log(set_to_array(new Set([123]))) // [123]
console.log(set_to_array(new Set(['1', '2', '3']))) // ['1', '2', '3']
console.log(set_to_array(new Set('123'))) // ['1', '2', '3']