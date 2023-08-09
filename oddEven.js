// Separate out odd and even value from array?

// question no 39

let array=[12,34,24534,323,122,423,12,53]
let evenArray=[]
let oddArray=[]
let j=0
let k=0

for (let i=0; i<array.length; i++){
    if (array[i]%2 ==0){
      evenArray[j]=array[i]
      j++
    } else {
        oddArray[k]=array[i]
        k++
    }

}
console.log(evenArray,oddArray);