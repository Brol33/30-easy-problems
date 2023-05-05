// Write a function that takes a value as argument. Return the type of the value.

function get_type(a) {
  return typeof a
}

console.log(get_type('string')) // String
console.log(get_type(['array'])) // array
console.log(get_type(10)) // number
console.log(get_type(null)) // object
console.log(get_type(false)) // boolean
console.log(get_type({})) // object