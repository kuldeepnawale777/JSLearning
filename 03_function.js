
//Function with no argument and return value
function showFullName(){

console.log("My full Name is : Kuldeep Nawale"); //function defination



}
showFullName();//Function Call or Invoke

//Function with  argument and return value

function showAge(age) {
    console.log("My age is :",age);
    
}
showAge(32)

//Function with  no argument and no return value

function fullName( ) {
    var name="Kuldeep Nawale";
    return name;
}
var fName=fullName()

//Function with   argument and  return value
function sumOfNumber(num1,num2,num3) {
    var sum = num1 + num2 +num3;
    return sum;
    
}
var sumResult= sumOfNumber(10,45,79);
console.log(sumResult);


var num1 = 100;
var num2 = 200;

var str1 = "Sweety"; // Cutey
var str2 = "Cutey"; // Sweety

var name1= "Akshay";
var name2 = "Sachin";

function swapVariables(value1, value2) {
    console.log("Before Swap: ", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap: ", value1, value2);
    return "Swapping variables successfully completed";
  }

  var swapResult = swapVariables(num1, num2); // Function call or Function invoke
  console.log(swapResult);
  
  var swapResult2 =  swapVariables(str1, str2);
  console.log(swapResult2);