// Write a function that takes an object (a) and a string (b) as argument. 
// Return true if the object has a property with key 'b', 
// but only if it has a truthy value. In other words, it should not be null or undefined or false. 
// Return false otherwise.

function exists_and_truthy(obj, str) {
  if (obj[str] != undefined && Boolean(obj[str])) {
    return true
  } 
  return false
}

console.log(exists_and_truthy({a:1,b:2,c:3},'b')) // true
console.log(exists_and_truthy({x:'a',y:null,z:'c'},'y'))// false
console.log(exists_and_truthy({x:'a',b:'b',z:undefined},'z')) // false