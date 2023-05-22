// Write a function that takes two Sets as arguments. Create the union of the two sets. Return the result. Tipp: try not to switch to Arrays, this would slow down your code


function get_union(set1, set2) {
  return [... new Set([...set1, ...set2])]
}

console.log(get_union(new Set('123'), new Set('234'))) // new Set('1234')
console.log(get_union(new Set([1, 2, 3]), new Set([3, 4, 5]))) // new Set([1, 2, 3, 4, 5])
console.log(get_union(new Set([false, false, NaN]), new Set([true, true, NaN]))) // new Set([false, NaN, true])
