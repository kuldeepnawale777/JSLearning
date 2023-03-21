

console.log("-----------Step 01 ------------");

let show  = () =>  {
    console.log("Good Morning, Today is Monday");    
}
show();

console.log("-----------Step 02 ------------");
let multiplication = (num1,num2,num3) =>{

    console.log("Multiplication of passed numbers  = ",num1*num2*num3);
}

multiplication(5,5,2);

multiplication(10,4,num3=1);

console.log("-----------Step 03 ------------");
let addition = (num1,num2,num3,num4,num5) => {

    let result = num1+num2+num3+num4+num5;
    return result;
}

var result = addition(100,100,200,349,756);
console.log("Addition of passed numbers =  ",result);
var result = addition ("I am"," learning"," ES6", " feature"," in depth");
console.log("Addition of passed string= ",result);

