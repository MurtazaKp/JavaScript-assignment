// question no 19 complete
//Const arr =[0,2,1,1,2,2,0,0,2]
// Output : [0,0,0,1,1,2,2,2,2] ..dont use sorting method !!!!

const arr8 = [0, 2, 1, 1, 2, 2, 0, 0, 2];

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

Sort(arr8);
console.log(arr8);