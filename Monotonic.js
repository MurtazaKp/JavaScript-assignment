// Given an array of integers, determine whether the array is monotonic or not.
// A = [6, 5, 4, 4] 
// B = [1,1,1,3,3,4,3,2,4,2]
// C = [1,1,2,3,7]
// Output:
// A: True
// B: False
// C: True
// Note: Monotonic means, varying in such a way that it either never      decreases or never increases.

// question no 9

let array = [1,3,2];
let ismonatic = null;
let ascending = false;
let descending = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] < array[i + 1]) {
    ascending = true;
  } else if (array[i] > array[i + 1]) {
    descending = true;
  }
}

if (ascending && descending) {
  console.log(`Given Array is not Monotonic`);
} else {
  console.log(`Given Array is  Monotonic`);
}