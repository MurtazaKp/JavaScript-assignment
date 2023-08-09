// question no 4
// Write a JavaScript function to parameterize a string.
// String= “Robin Singh from USA.”
// Output:"robin-singh-from-usa"




let str = "Robin Singh from USA."
let  strDashed=""
let lowerStr=""

for (let i=0; i<str.length; i++){
    if (str[i]===" "){
        strDashed+="-"
    } else{
        strDashed+=str[i]
    }
    if (str.charCodeAt(i)<90 && strDashed.charCodeAt(i)!=32 && strDashed.charCodeAt(i)!=45 && strDashed.charCodeAt(i)!=46  ){
        let character=String.fromCharCode(strDashed.charCodeAt(i)-65+97)
        lowerStr+=character

    } else {
        lowerStr+=strDashed[i]
    }
}
console.log(lowerStr);