function evenOrOdd(num) {

if (num%2==0) {
    return "Even";
}
if (num%2!=0)
return"ODD";
    
}

var result = evenOrOdd(25);
console.log(`Given number 25 is ${result}`);

var result = evenOrOdd(70);
console.log(`Given number 70 is ${result}`);
var result = evenOrOdd(67);
console.log(`Given number 67 is ${result}`);
var result = evenOrOdd(98);
console.log(`Given number 98 is ${result}`);

function voteCheck(num) {
    if (num>=18) {
        return `age ${num} is eligiable for voting !`;
        
    }
    if (num<18) {
        return `age ${num} is Not eligiable for voting !`;
    }
}
var result = voteCheck(18);
console.log(`${result}`);
var result = voteCheck(20);
console.log(`${result}`);
var result = voteCheck(17);
console.log(`${result}`);
var result = voteCheck(40);
console.log(`${result}`);

function stringLengthCheck(string) {
    

    if (string.length>10) {
        return ` YES ${string} contain more than 10 Chareter`;        
    }

    if (string.length<10) {
        return `NO ${string} not contain more than 10 Chareter`;
        
    }
}
var result = stringLengthCheck("JavaScript -ES6");
console.log(result);
var result = stringLengthCheck("Angular");
console.log(result);