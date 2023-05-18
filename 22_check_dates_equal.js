// Sounds easy, but you need to know the trick. Write a function that takes two date instances as arguments. It should return true if the dates are equal. It should return false otherwise.

function equal_dates(date1, date2) {
  return date1.getTime() === date2.getTime()
}

console.log(equal_dates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) // false
console.log(equal_dates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // true
console.log(equal_dates(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))) // false