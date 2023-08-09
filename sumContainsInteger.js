// Write a program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80. 


// question no 30

let Integers=(a,b)=>{
  if (a+b>=50 && a+b<80){
    return 65
  } else return 80
}

console.log(Integers(-45,-56));