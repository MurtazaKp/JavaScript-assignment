// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  ?

// question no 26
let endYear=2050
for (let i=2014; i<=endYear; i++){
    let date= new Date(`${i}-01-01`)
    let day=date.getDay()
    if (day===0){
        console.log(`1st January of year ${i} is a Sunday` );
    }

}