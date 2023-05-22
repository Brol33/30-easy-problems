// Write a function that takes two date instances as argument. It should return true if the difference between the dates is less than or equal to 1 hour. It should return false otherwise.

function within_one_hour(date1, date2) {
  const diff = Math.abs(date1.getTime() - date2.getTime())
  const diff_in_hours = diff /  (60 * 60 * 1000)
  if (diff_in_hours <= 1) {
    return true
  }
  return false
}

console.log(within_one_hour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))) // true
console.log(within_one_hour(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))) // true
console.log(within_one_hour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))) // false
console.log(within_one_hour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))) // true