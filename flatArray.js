// Flatten the given  array
// var Array1 = [ [1,2],[3,4],[5,6] ]
// Output : [1,2,3,4,5,6]

// question no 8
let Array1 = [ [1,2],[3,4],[5,6] ]
let Array2= []
k=0

for (i=0; i<Array1.length; i++){

    for (j=0; j<Array1[i].length; j++){
      Array2[k]=Array1[i][j]
      k++
    }

}
console.log(Array2)