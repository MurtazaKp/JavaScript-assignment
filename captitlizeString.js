// // question no 18

// Const str =’AbcD EfgJiKHLi abc’ 
// Output : ‘Abcd Efgjikhli Abc’
//  Capatilize the string?


let str = "abcD efgJiKHLi abc gasdas";
let replace=null

let newStr =""
for (let i = 0; i < str.length; i++) {
    let char = str[i];

   if (i===0){
        let character=String.fromCharCode(str.charCodeAt(i)-97+65)
        newStr+=character
        replace = false;

   } else if (char === " ") {
        replace = true;
        newStr += char;
    }
      else if (replace && str.charCodeAt(i)>=97) {
        let character=String.fromCharCode(str.charCodeAt(i)-97+65)
        newStr+=character
        replace = false;
    } else {
        newStr += char;
    }
}
console.log(newStr);