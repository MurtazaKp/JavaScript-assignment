// question no 17
// Const str = ‘jjhhhfffsssskkk’;
//  Output :’jhfsk’
// Remove dublicate character?



const str = "jjhhhfffsssskkk";
let temp = str[0];
let count = 0;

let newStr = "";

for (let i = 0; i <= str.length ; i++) {

    if (str[i] != temp) {
    newStr += `${temp}`;
    temp = str[i];
  }
}

console.log(newStr);