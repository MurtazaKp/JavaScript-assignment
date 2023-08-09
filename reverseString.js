// Reverve the string ?
// question no 25

let str="mobile"
let newStr =""

for (let i=0; i<str.length; i++){
  newStr+=str[str.length-i-1]
}

console.log(newStr);