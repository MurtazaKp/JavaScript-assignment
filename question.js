// question no 11 complete
// let mobiles = ["iPhone", "Samsung", "Pixel"];

// mobiles[2] = "Nokia";

// console.log(mobiles)
// ==========================================
// question no 13
// let num1 = [1, 2, 3, 4, 5, 6];
// let num2 = [7, 8, 9, 10, 11, 12];
// //let a=[1]
// //let b=[1, 2]

// let numb3 = [...num1, ...num2];

// =====================================
// question no 14 complete

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newArray = [];
// let a = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 3) {
//     newArray[a] = numbers[i];
//     a++;
//   }
// }

//  console.log(newArray)
// ===================================
// question no 20 complete

// let arr6 = [1, 2, 2, 3, 4, 5, 5, 7, 8, 7, 3];
// function Sort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         let tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// Sort(arr6);
// console.log(arr6);
// let newArray6 = [];

// a = 0;
// for (let i = 0; i < arr6.length; i++) {
//   if (arr6[i] == arr6[i + 1]) {
//     newArray6[a] = arr6[i];
//     a++;
//   }
// }
// console.log(newArray6);
// =====================================================
// // question no 6 complete
// let zeroArray = [1, -3, 0, 2, 8, 0, 4, 7, 0];
// let v = 0;
// let x = 0;
// let secondArray = [];
// let thirdArray = [];

// for (let i = 0; i < zeroArray.length; i++) {
//   if (zeroArray[i] === 0) {
//     secondArray[v] = zeroArray[i];
//     v++;
//   } else if (zeroArray[i] != 0) {
//     thirdArray[x] = zeroArray[i];
//     x++;
//   }
// }

// zeroArray = [...thirdArray, ...secondArray];
// console.log(zeroArray);
// ====================================
// // question no 9

// let array = [1,3,2];
// let ismonatic = null;
// let ascending = false;
// let descending = false;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < array[i + 1]) {
//     ascending = true;
//   } else if (array[i] > array[i + 1]) {
//     descending = true;
//   }
// }

// if (ascending && descending) {
//   console.log(`Given Array is not Monotonic`);
// } else {
//   console.log(`Given Array is  Monotonic`);
// }

// ===================================================
// question no 19 complete

// const arr8 = [0, 2, 1, 1, 2, 2, 0, 0, 2];

// function Sort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (let i = 1; i < array.length; i += 1) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         let tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// Sort(arr8);
// console.log(arr8);
// ===========================================
// question no 5 complete

// const arrayNumb = [65,3,5,64,233,35,654,-213123,434,53]

// function Sort(array) {
//     var done = false;
//     while (!done) {
//       done = true;
//       for (let i = 1; i < array.length; i++) {
//         if (array[i - 1] > array[i]) {
//           done = false;
//           let tmp = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = tmp;
//         }
//       }
//     }

//     return array;
//   }
//   Sort(arrayNumb)

//   const smallestNum=arrayNumb[0]

//   const largestNum= arrayNumb[arrayNumb.length-1]

//   console.log(`smallest number = ${smallestNum} ,`,`largestNum = ${largestNum}`);

// =================================
// question no 4

// let string5 = "mommmmm";
// v = 0;
// let palindrome = false;

// for (let i=0; i<string5.length/2; i++){
//     if (string5[i]==string5[string5.length-1-i]){
//         console.log(string5[i])
//         palindrome=true
//         v++
//     }
//     else {
//         palindrome=false
//         break
//     }

// }
// console.log(palindrome)
// ===========================================

// const str = "jjhhhfffsssskkk";

// let arrStr = [...str];

// let newArray1 = [];

// let temp = 0;
// j = 0;
// for (i = 0; i < str.length; i++) {
//   if (arrStr[i] != temp) {
//     newArray1[j] = arrStr[i];

//     j++;
//   }

//   temp = arrStr[i];

//   console.log(temp, "<=========");
// }
// console.log(newArray1);
// newArray1 = newArray1 + "";

// console.log(newArray1);
// ======================================
// question no 8
// let Array1 = [ [1,2],[3,4],[5,6] ]
// let Array2= []
// k=0

// for (i=0; i<Array1.length; i++){

//     for (j=0; j<Array1[i].length; j++){
//       Array2[k]=Array1[i][j]
//       k++
//     }

// }
// console.log(Array2)
// ==================================
// question no 7

// let array = [1, 2, 2, 4, 5, 6, 6];
// let array3 = [array[0]];

// let k = 0;
// // console.log(1 in array);

// for (i = 1; i < array.length; i++) {
//   let found = false;
//   for (j = 0; j < array3.length; j++) {
//     if (array3[j] == array[i]) {
//       found = true;
//     }
//     if (array3.length - 1 == j && !found) {
//       array3.push(array[i]);
//     }
//   }
// }

// console.log(array3);
// ============================================
// question no 10

// const array1 = [12, 12, 23, 34, 45, 56];
// const array2 = [43, 23, 34, 54, 56, 54];
// let array5 = [];
// let array6 = [];
// let l = 0;

// for (let i = 0; i < array1.length; i++) {
//   array5[l] = array1[array1.length - 1 - i];
//   array6[l] = array2[array1.length - 1 - i];
//   l++;
//   array6[i] = array6[i] + array5[i];
// }

// console.log(array6);

// let str ="tomorrow"
// let newStr=""

// let count=1
// let replaceChar="$"

// for (let i=0; i<str.length; i++){
//       if (str[i]==='o'){
//         for(let i = 0; i< count;i++) newStr+=replaceChar
//         count+=1
//         console.log(count);
//       } else {
//         newStr+=str[i]
//       }
//   }
//   console.log(newStr);
// =======================================

// let fullName = "Robin Singh";

// let firsname = "";
// let secondname = "";

// let dashed = false;

// for (let i = 0; i < fullName.length; i++) {
//   if (fullName[i] != " ") {
//     firsname += `${fullName[i]}`;
//   } else {
//     break;
//   }
// }

// for (let i = 0, len = fullName.length; i < len; i++) {
//   if (dashed) {
//     secondname = secondname + fullName[i];
//   }
//   if (fullName[i] === " ") {
//     dashed = true;
//   }
// }

// let fullNameArray = [firsname, secondname];

// console.log(fullNameArray);
// ==========================================
// question no 21

// function arraySum (array){
//     let sum=0
//     for (let i=0; i<array.length; i++){
//         sum+=array[i]
//     }

//     return console.log(`the sum is ${sum}`)
// }
// let array =[12,32,43]
// arraySum(array)

// ===========================================
// question no 22
// function AgetoDays(age){
//     let days = age * 365.2425

//     return console.log(`age in days is ${days}`)
// }

// AgetoDays(20)

// ====================================================

// // question no 23

// let days =["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]

// let date=new Date()

// let day = days[date.getDay()];

// let hour=date.getHours()

// let minutes = date.getMinutes()

// let seconds= date.getSeconds()

// let state=""

// function State(){
//   if (hour<12 ){
//     state="AM"
//   } else {
//     state ="PM"
//   }
// }

// State()

// console.log(`Today is ${day}
// Current time is : ${hour} ${state} : ${minutes}  : ${seconds}`)
// =====================================================================
// question no 24
// let date = new Date();

// let day = date.getDate();

// let month = date.getMonth() + 1;

// let year = date.getFullYear();

// if (month < 10) {
//   month = `0${month}`;
// }
// if (day < 10) {
//   day = `0${day}`;
// }

// console.log(`the date is ${day}/${month}/${year}`);
// ==============================================================
// question no 25

// let str="mobile"
// let newStr =""

// for (let i=0; i<str.length; i++){
//   newStr+=str[str.length-i-1]
// }

// console.log(newStr);
// ==============================================================

// question no 26
// let endYear=2050
// for (let i=2014; i<=endYear; i++){
//     let date= new Date(`${i}-01-01`)
//     let day=date.getDay()
//     if (day===0){
//         console.log(`1st January of year ${i} is a Sunday` );
//     }

// }
// ==============================================================

// question no 27
// let isFifty=false
// const Sum=(a,b)=>{
//   if (a===50 || b===50 || a+b===50){
//     isFifty=true
//   } else {
//     isFifty=false
//   }
//   return isFifty
// }

// let result = Sum(25,25)

// console.log(`The result is ${result}`);
// ==============================================================

// question no 28 {
// x=100
// let isClose=false

// let Numbers=(a,b)=>{

// if (a>100 && b>100 ){
//   if (x+a < x+b){
//     return a
//   } else {
//     return b
//   }
// } else if (a<100 && b<100){
//   if (x+a>x+b){
//     return a
//   } else {
//     return b
//   }
// } else if(a<x && b>x ) {
//         if (x-a <b-x){
//             return a
//         } else{
//             return b
//         }
// } else if (b<x && a>x){
//     if (x-b <a-x){
//         return b
//     } else{
//         return a
//     }
// }

// }

// console.log(`the closeset to 100 is ${Numbers(90,101)} `);
// ==============================================================

// question no 29

// let integer =(a,b,c)=>{

//   if (a>0 && b>0 && c>0){
//     if (a%10==b%10 && b %10== c % 10 && c%10 == a%10 ){
//       console.log("last digit of three positive integers is the same")

//     } else {
//       console.log("last digit of three positive integers is the not same")
//     }
//   }

// }

// integer(23,236,73)
// ==============================================================

// question no 30

// let Integers=(a,b)=>{
//   if (a+b>=50 && a+b<80){
//     return 65
//   } else return 80
// }

// console.log(Integers(-45,-56));
// ==============================================================

// question no 31

// let str ="Mobile"

// let newStr=""

// for (let i=0; i<str.length; i++){

//   if (str[i]!=str[0] && str[i]!=str[str.length-1]){
//     newStr+=str[i]
//   }
// }

// console.log(newStr)
// ==============================================================

// question no 32

// let str1 = "murtaza";

// let str2 = "khopoliwala";

// let str3 = "";

// let str4 = "";

// for (let i = 0; i < str1.length; i++) {
//   if (str1[i] != str1[0]) {
//     str3 += str1[i];
//   }
// }

// for (let i = 0; i < str2.length; i++) {
//   if (str2[i] != str2[0]) {
//     str4 += str2[i];
//   }
// }

// let concatString = str3 + str4;

// console.log(concatString);
// ==============================================================

// question no 33
// let cityName= "Los Angeles "

// let isTrue=false

// for (let i=0; i<cityName.length; i++){
//     if (cityName.indexOf("Los")!=-1|| cityName.indexOf("New")!=-1){
//         isTrue = true

// }
// }

// if (isTrue){
//     console.log(cityName)
// }
// ==============================================================

// question no 34
// const array1 = [12, 12, 23, 34, 45, 56];
// let array5=[]

// let l = 0;

// for (let i = 0; i < array1.length; i++) {
//   array5[l] = array1[array1.length - 1 - i];

//   l++;

// }
// console.log(array5);
// ==============================================================

// question no 35
// let isTrue=false

// let array=[3,44,54,2,5,4]

// for (let i=0; i<array.length; i++){
//   if (array[i]===3 || array[i]===1){
//     isTrue= true

//   }
// }

// console.log(`the result is ${isTrue}`);
// ==============================================================

// question no 36
// let a = [12, 34, 54, 34, 23, 45, 64];
// let temp = 0;

// for (let i = 0; i < a.length; i++) {
//   if (i === 0) {
//     temp = a[0];
//     a[0] = a[a.length - 1 - i];
//     a[a.length - 1] = temp;
//   }
// }

// console.log(a);
// ==============================================================

// question no 37

// function Number(num){
//     num=num+""

//     num=[...num]

//     let sum =parseInt(num[0])+parseInt(num[1])

//     return sum
// }

// console.log(Number(34))
// ==============================================================

// question no 39

// let array=[12,34,24534,323,122,423,12,53]
// let evenArray=[]
// let oddArray=[]
// let j=0
// let k=0

// for (let i=0; i<array.length; i++){
//     if (array[i]%2 ==0){
//       evenArray[j]=array[i]
//       j++
//     } else {
//         oddArray[k]=array[i]
//         k++
//     }

// }
// console.log(evenArray,oddArray);
// ==============================================================

// question no 40

// let array1=[1,2,342,23,12,3]

// let arrray2=[45,43,23,2,3,1]
// let k=0
// let commArray= []

// for (let i=0; i<array1.length; i++){
//     for (let j=0; j<arrray2.length; j++){
//       if (array1[i]===arrray2[j]){
//         commArray[k]=arrray2[j]
//         k++
//       }
//     }
// }

// console.log(commArray);
// ==============================================================

// question no 41

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
// ==============================================================

// question no 4

// let str = "Robin Singh from USA."
// let  strDashed=""
// let lowerStr=""

// for (let i=0; i<str.length; i++){
//     if (str[i]===" "){
//         strDashed+="-"
//     } else{
//         strDashed+=str[i]
//     }
//     if (str.charCodeAt(i)<90 && strDashed.charCodeAt(i)!=32 && strDashed.charCodeAt(i)!=45 && strDashed.charCodeAt(i)!=46  ){
//         let character=String.fromCharCode(strDashed.charCodeAt(i)-65+97)
//         lowerStr+=character

//     } else {
//         lowerStr+=strDashed[i]
//     }
// }
// console.log(lowerStr);
// ==============================================================
// question no 18

// let str = "abcD efgJiKHLi abc gasdas";
// let replace=null

// let newStr =""
// for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//    if (i===0){
//         let character=String.fromCharCode(str.charCodeAt(i)-97+65)
//         newStr+=character
//         replace = false;

//    } else if (char === " ") {
//         replace = true;
//         newStr += char;
//     }
//       else if (replace && str.charCodeAt(i)>=97) {
//         let character=String.fromCharCode(str.charCodeAt(i)-97+65)
//         newStr+=character
//         replace = false;
//     } else {
//         newStr += char;
//     }
// }
// console.log(newStr);
// ==============================================================

// question no 16
// const str = "hhhjjjuunkkkhh";
// let temp = str[0];
// let count = 0;

// let newStr = "";

// for (let i = 0; i <= str.length ; i++) {

//   if (str[i] === temp) {
//     count += 1;
//   } else if (str[i] != temp) {
//     newStr += `${temp}${count}`;
//     temp = str[i];
//     count = 1;

//     console.log(count);
//   }
// }

// console.log(newStr);
// ==============================================================

// question no 17
// const str = "jjhhhfffsssskkk";
// let temp = str[0];
// let count = 0;

// let newStr = "";

// for (let i = 0; i <= str.length ; i++) {

//     if (str[i] != temp) {
//     newStr += `${temp}`;
//     temp = str[i];
//   }
// }

// console.log(newStr);
// ==============================================================

// question 15
// let str = "Vinayak is good boy";

// let str2 = "";

// let newstr = str.split(" ");

// for (let i = 0; i < newstr.length; i++) {
//   str2 += newstr[newstr.length - 1 - i] + " ";
// }

// console.log(str2);
// ==============================================================

// question no 1
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
