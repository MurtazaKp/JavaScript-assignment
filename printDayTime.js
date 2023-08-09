// Write a program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


// // question no 23

let days =["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]

let date=new Date()

let day = days[date.getDay()];

let hour=date.getHours()

let minutes = date.getMinutes()

let seconds= date.getSeconds()

let state=""

function State(){
  if (hour<12 ){
    state="AM"
  } else {
    state ="PM"
  }
}

State()

console.log(`Today is ${day}
Current time is : ${hour} ${state} : ${minutes}  : ${seconds}`)