
// Write a JavaScript function to split a string and convert it into an array of words.
// String = "Robin ``Singh"
// Output: ["Robin", "Singh"]

let fullName = "Robin Singh";

let firsname = "";
let secondname = "";

let dashed = false;

for (let i = 0; i < fullName.length; i++) {
  if (fullName[i] != " ") {
    firsname += `${fullName[i]}`;
  } else {
    break;
  }
}

for (let i = 0, len = fullName.length; i < len; i++) {
  if (dashed) {
    secondname = secondname + fullName[i];
  }
  if (fullName[i] === " ") {
    dashed = true;
  }
}

let fullNameArray = [firsname, secondname];

console.log(fullNameArray);