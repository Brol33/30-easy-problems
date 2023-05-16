// Write a function that takes an object with two properties as argument. It should return the value of the property with key country.

function get_property(obj) {
  return obj.country
}

console.log(get_property({ continent: 'Asia', country: 'Japan' })) // Japan
console.log(get_property({ country: 'Sweden', continent: 'Asia' })) // Sweden