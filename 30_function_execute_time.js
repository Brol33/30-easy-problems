// Write a JavaScript program to change the capitalization of all letters in a given string. 
const change_cap = (str) => {
  let res = ""
  for (let i = 0; i < str.length; i++) {
    var cur_char = str.charAt(i)
    if (cur_char == cur_char.toLowerCase()) {
      res = res.concat(cur_char.toUpperCase())
    } else {
      res = res.concat(cur_char.toLowerCase())
    }
  }
  return res
}

console.log(change_cap("w3resource"));
console.log(change_cap("Germany"));