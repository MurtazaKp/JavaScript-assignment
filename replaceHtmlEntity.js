// // question no 1
// Write a JavaScript function to escape a HTML string.
// String: '<a href="javascript-string-exercise-17.php" target="_blank">'
// Output: "&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;"


// let str = '<a href="javascript-string-exercise-17.php" target="_blank">';
// let newStr = "";
// for (let i = 0; i < str.length; i++) {
//   switch (str[i]) {
//     case "<":
//       newStr += "&lt";
//       break;
//     case '"':
//       newStr += "&quot;";
//       break;
//     case '>':
//       newStr += "&gt;";
//       break;
//    default:
//     newStr+=str[i]
//   }
// }

// console.log(newStr);