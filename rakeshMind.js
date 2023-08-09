// question no 41
// Eating Symbols
// There is always an integer in Rakesh's mind.
// Initially, the integer in Rakesh's mind is 0. Rakesh is now going to eat some symbols, each of which is either + or -. When he eats +, the integer in his mind increases by 1; when he eats -, the integer in his mind decreases by 1.
// The symbols Rakesh is going to eat are given to you as a string S. The ith character in S is the ith symbol for him to eat.
// Find the integer in Rakesh's mind after he eats all the symbols.
// Example - (
// Initially, the integer in Rakesh's mind is 0.
// The first symbol for him to eat is +. After eating it, the integer in his mind increases from 0 to 1.
// The second symbol to eat is -. After eating it, the integer in his mind decreases from 1 to 0.
// The third symbol to eat is +. After eating it, the integer in his mind increases from 0 to 1.
// The fourth symbol to eat is +. After eating it, the integer in his mind increases from 1 to 2
// )

// INPUT :-  +-++
// OUTPUT :- 2



// let Symbols="+-++"
// let raskeshMind=0
// for (i=0; i<Symbols.length; i++){

//     if(Symbols[i]==="+"){
//         raskeshMind+=1
//     } else{
//         raskeshMind-=1
//     }
// }

// console.log(raskeshMind);