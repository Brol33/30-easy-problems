// Write a function that takes a Set and a value as arguments. Check if the value is present in the Set

function check_value_in_set(set, val) {
  for (const item of set) {
    if (item === val) {
      return true
    }
  }
  return false
}

console.log(check_value_in_set(new Set([1, 2, 3]), 2)) // true
console.log(check_value_in_set(new Set([123]), 2)) // false
console.log(check_value_in_set(new Set(['1', '2', '3']), '2')) // true
console.log(check_value_in_set(new Set('123'), '2')) // true