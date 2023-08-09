// Const arr =[1,2,2,3,4,5,5,7,8,7,3];
// Output : [2,4,7]
// Print dublicate numbers only?


let arr6 = [1, 2, 2, 3, 4, 5, 5, 7, 8, 7, 3];
function Sort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        let tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

Sort(arr6);
console.log(arr6);
let newArray6 = [];

a = 0;
for (let i = 0; i < arr6.length; i++) {
  if (arr6[i] == arr6[i + 1]) {
    newArray6[a] = arr6[i];
    a++;
  }
}
console.log(newArray6);