


console.log("--------------STEP 01-----------------------");
function portfolio() {

    console.log("Welcome to Java Script !"); //function defination

}
portfolio();

function project() {
    console.log(" Session 02 : Function...")

}
project();




function personalDetails(firstName, lastName, collegeName) {

    var firstName = "Cooldeep";
    var lastName = "Nawale";
    var collegeName = "BMCC Pune";
    console.log("My First Name :", firstName);
    console.log("My Last Name :", lastName);
    console.log("My College Name :", collegeName);
}
personalDetails();

console.log("--------------STEP 02-----------------------");

function swapValuesDude(val1, val2) {

    var val1 = "Virat";
    var val2 = "Anushaka";
    var temp = val1;

    console.log("Befor swap Value :", val1, val2);
    val1 = val2;
    val2 = temp;
    console.log("After swap Value :", val1, val2);

    var num1 = 1000;
    var num2 = 2000;
    var temp = num1;
    console.log("Befor swap Value :", num1, num2);
    num1 = num2;
    num2 = temp;
    console.log("After swap Value :", num1, num2);


}

swapValuesDude()

console.log("--------------STEP 03-----------------------");

function addThreeValues (num1,num2,num3) 
{

  var sum=num1+num2+num3 ;
  return sum;
}
var sumResult =addThreeValues(10.23,600,40)
console.log("Addtion of first Three :",sumResult);

var sumResult =addThreeValues("Hello  ","Good  ","Morning  ")
console.log("Addtion of first Three :",sumResult);