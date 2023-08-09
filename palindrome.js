// Write a program to check if a string is palindrome?

// question no 4

let string5 = "mommmmm";
v = 0;
let palindrome = false;

for (let i=0; i<string5.length/2; i++){
    if (string5[i]==string5[string5.length-1-i]){
        console.log(string5[i])
        palindrome=true
        v++
    }
    else {
        palindrome=false
        break
    }

}
console.log(palindrome)