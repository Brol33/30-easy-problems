// Write a function that takes two arrays (a and b) as arguments. Create an object that has properties with keys 'a' and corresponding values 'b'. Return the object.

function create_object(arr1, arr2) {
  let obj = {}
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i]
  }
  return obj
}
 
console.log(create_object(['a','b','c'],[1,2,3])) // {a:1,b:2,c:3}
console.log(create_object(['w','x','y','z'],[10,9,5,2])) // {w:10,x:9,y:5,z:2}
console.log(create_object([1,'b'],['a',2])) // {1:'a',b:2}