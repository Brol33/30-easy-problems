// Write a function that takes two date instances as argument. It should return true if they fall on the exact same day. It should return false otherwise.

function check_same_date(date1, date2) {
  return date1.getTime() === date2.getTime()
}

console.log(check_same_date(new Date('2000/01/01'), new Date('2000/01/01'))) // true
console.log(check_same_date(new Date('2000/01/01'), new Date('2000/01/02'))) // false
console.log(check_same_date(new Date('2001/01/01'), new Date('2000/01/01'))) // false
console.log(check_same_date(new Date('2000/11/01'), new Date('2000/01/01'))) // false