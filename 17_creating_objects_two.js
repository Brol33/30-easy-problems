// Write a function that takes two strings (a and b) as arguments. Create an object that has a property with key 'a' and a value of 'b'. Return the object.

function create_object(key, value) {
  return obj = {[key]: value}
}

console.log(create_object('a','b')) // {a:'b'}
console.log(create_object("wooo", "walk")) // { wooo: 'walk' }