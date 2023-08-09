// Create a function that takes an array containing only numbers and return the sum of element.
// getFirstValue([-500, 0, 50]) ➞ 450
// getFirstValue([1, 2, 3]) ➞ 6
// getFirstValue([80, 5, 100]) ➞ 185


// question no 21

function arraySum (array){
    let sum=0
    for (let i=0; i<array.length; i++){
        sum+=array[i]
    }

    return console.log(`the sum is ${sum}`)
}
let array =[12,32,43]
arraySum(array)
