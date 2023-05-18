// Write a function that takes an object as argument. Somehow, the properties and keys of the object got mixed up. Swap the Javascript object's key with its values and return the resulting object

function swap_keys_and_values(obj) {
  const res = {}
  Object.keys(obj).forEach(key => {
    res[obj[key]] = key
  })
  return res
}

console.log(swap_keys_and_values({'one':1, 'two':2})) // {1:'one', 2:'two'}
console.log(swap_keys_and_values({50:2, 90:80})) // {2:50, 80:90}
console.log(swap_keys_and_values({'hello':'yes', 'cool':'false'})) // {'yes':'hello, 'false':'cool}