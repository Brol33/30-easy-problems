// Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
function array_sum(arr) {
  return arr.reduce((total, n) => total + n, 0)
}

console.log(array_sum([10,100,40])) // 150
console.log(array_sum([10,100,1000,1])) // 1111
console.log(array_sum([-50,0,50,200])) // 200