// Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

function days_left(date1, date2) {
  return Math.abs((date1.getTime() - date2.getTime()) / (24*60*60*1000))
}

console.log(days_left(new Date('2020-06-11'), new Date('2020-06-01'))) // 10
console.log(days_left(new Date('2000-01-01'), new Date('2020-06-01'))) // 7457
