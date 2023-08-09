// Write a JavaScript program that checks whether the last digit of three positive integers is the same. 

// question no 29

let integer =(a,b,c)=>{

  if (a>0 && b>0 && c>0){
    if (a%10==b%10 && b %10== c % 10 && c%10 == a%10 ){
      console.log("last digit of three positive integers is the same")

    } else {
      console.log("last digit of three positive integers is the not same")
    }
  }

}

integer(23,236,73)