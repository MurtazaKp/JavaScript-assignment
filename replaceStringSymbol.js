// Write the program following 
// Input: tomorrow
// Output: t$m$$rr$$$w

let str ="tomorrow"
let newStr=""

let count=1
let replaceChar="$"

for (let i=0; i<str.length; i++){
      if (str[i]==='o'){
        for(let i = 0; i< count;i++) newStr+=replaceChar
        count+=1
        console.log(count);
      } else {
        newStr+=str[i]
      }
  }
  console.log(newStr);