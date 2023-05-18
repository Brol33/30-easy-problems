// Write a function that takes an object (a) as argument. Return an array with all object keys.

function get_keys(obj) {
  return Object.keys(obj)
}

console.log(get_keys({a:1,b:2,c:3})) // ['a','b','c']
console.log(get_keys({j:9,i:2,x:3,z:4})) // ['j','i','x','z']
console.log(get_keys({aber:1,bailey:2,can:3})) // ['aber','bailey','can']