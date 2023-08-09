// Write a program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. ?

// question no 27
let isFifty=false
const Sum=(a,b)=>{
  if (a===50 || b===50 || a+b===50){
    isFifty=true
  } else {
    isFifty=false
  }
  return isFifty
}

let result = Sum(25,25)

console.log(`The result is ${result}`);