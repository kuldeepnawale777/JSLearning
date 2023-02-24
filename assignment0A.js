



function graterNumber(num1,num2) {

    var gtn=num1>num2 ? num1 : num2;
  
    return gtn;
    
}
var gtnResult=graterNumber(10,-10)
console.log(`Greater Number is :`,gtnResult);
var gtnResult=graterNumber(800,899)
console.log(`Greater number is :`,gtnResult);

function EvenOrOddNum(num) {

    var result=num%2==0?`True (It's ODD number)`:`False (It's EVEN number)`;
    return result
    
}
var finalresutl=EvenOrOddNum( 44);
console.log(44,finalresutl);

var finalresutl=EvenOrOddNum( 0);
console.log(0,finalresutl);

var finalresutl=EvenOrOddNum( 101);
console.log(101,finalresutl);



    function wordLength(word) {


        var length = word.length;
       var result= length%2==0 ? "EVEN" : "ODD";
       return result;
       
    }
var result=wordLength("JavaScript");
console.log(`"JavaScript" length is ${result}`);

console.log(`"developer" length is ${wordLength("developer")}`);
console.log(`"google" length is ${wordLength("google")}`);


