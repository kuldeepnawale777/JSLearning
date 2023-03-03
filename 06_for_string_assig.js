 var vowelsCheck = function (str) {
  var totalVowels="";
for (let index = 0; index < str.length; index++) {
  var char= str.charAt(index);
  char= char.toLowerCase();

  if ( char== 'a' || char == 'e'|| char == 'i'|| char == 'o'|| char== "u") {
    totalVowels = totalVowels +str.charAt(index);
  }
 
}
return totalVowels.length;
 }
 var result = vowelsCheck("javaScript is the language Of internet");
 console.log(`"javaScript is the language Of internet" in this string total no of vowels are: ${result}`)

 var result = vowelsCheck("I am Angular Developer");
 console.log(`"I am Angular Developer" in this string total no of vowels are: ${result}`);
 
 var result= vowelsCheck("Hard Work and commitment is the key of success");
 console.log(`"Hard Work and commitment is the key of success" in this  stringtotal no of vowels are: ${result}`);

 console.log("----------------step2---------------------------------------------------");



function lastWordCharsCount(str){
var lastWord=""
  for (let index = str.length-1; index >=0 ; index--) {

    if (str.charAt(index) == " ") {
      break;
    }

   var a= str.charAt(index);
    
   lastWord = lastWord + a;

  }
lastWord;
return lastWord.length;


}
var result = lastWordCharsCount("javaScript is the language Of internet");
console.log(`"javaScript is the language Of internet"last word length of this string is: ${result}`);
var result= lastWordCharsCount("I am Angular Developer");
console.log(`"I am Angular Developer" last word length of this string is: ${result}`);
var result= lastWordCharsCount("Hard Work and commitment is the key of success");
console.log(`"Hard Work and commitment is the key of success" last word length of this string is: ${result}`);


 