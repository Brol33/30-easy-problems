// Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array

function merge_dup(arr1, arr2) {
  const arr3 = arr1.concat(arr2)
  const result = [...new Set(arr3)]
  return result
}
console.log(merge_dup([-10, 22, 333, 42], [-11, 5, 22, 41, 42])) // [ -11, -10, 5, 22, 41,  42, 333]
console.log(merge_dup([1, 2, 3], [3, 4, 5])) // [ 1, 2, 3, 4, 5 ]
