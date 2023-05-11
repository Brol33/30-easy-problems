// Write a function that takes an array of numbers as argument. It should return the average of the numbers.

function average(arr) {
  const sum = arr.reduce((total, n) => total + n, 0)
  return (sum / arr.length)
}

console.log(average([10,100,40])) // 50
console.log(average([10,100,1000])) // 370
console.log(average([-50,0,50,200])) // 50