// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const equivalent = (obj1, obj2) => 
  Object.keys(obj2).every(key => obj1.hasOwnProperty(key) && obj1[key] === obj2[key]) 


console.log(equivalent({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(equivalent({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(equivalent({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false