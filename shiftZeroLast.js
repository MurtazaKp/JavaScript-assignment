// Given an array of integers, shift all 0 elements at the end of array
// A = [1,3,0,2,8,0,4,7,0]
// Output:
// A=[1,3,2,8,4,7,0,0,0]


// question no 6 complete
let zeroArray = [1, -3, 0, 2, 8, 0, 4, 7, 0];
let v = 0;
let x = 0;
let secondArray = [];
let thirdArray = [];

for (let i = 0; i < zeroArray.length; i++) {
  if (zeroArray[i] === 0) {
    secondArray[v] = zeroArray[i];
    v++;
  } else if (zeroArray[i] != 0) {
    thirdArray[x] = zeroArray[i];
    x++;
  }
}

zeroArray = [...thirdArray, ...secondArray];
console.log(zeroArray);