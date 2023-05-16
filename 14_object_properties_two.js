// Write a function that takes an object with two properties and a string as arguments. It should return the value of the property with key equal to the value of the string

function get_property(obj, key) {
  return obj[key]
}

console.log(get_property({  continent: 'Asia',  country: 'Japan'}, 'continent')) // Asia
console.log(get_property({  country: 'Sweden',  continent: 'Europe'}, 'country')) // Sweden