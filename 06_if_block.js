console.log(`Start`);

var num = 10;

if (num > 0) {


    console.log(`inside if`);
    console.log(`NUMBRT IS POSITIVE ${num}`);
}
console.log(`END`);

var ageForVote = 10;
if (ageForVote >= 10) {

    console.log("your are Eligible for Voting");
    console.log(`Age is : ${ageForVote}`);
}
console.log("End of next If block");

function checkEvenOrOdd(num) {

    if (num % 2 == 0) {

        return "EVEN";

    }
    if (num % 2 == 1) {

        return "ODD";
    }
}
var result = checkEvenOrOdd(45);
console.log(`Given number 45 is ${result}`);


var result = checkEvenOrOdd(70);
console.log(`Given number 70 is ${result}`);

var num = 5;

if (num > 0) {
    console.log(`Given number ${num} is Positive`);

} else {
    console.log(`Given number ${num} is Negative`);
}

function maleMarriageEligibilty(gender, age, boyName) {

    if (gender == "Male" && age >= 18) {

        console.log(`${boyName} Your Eligiable `);

    } else {
        console.log(`Your Eligiable `);
    }

}
maleMarriageEligibilty("Male", 25, "Billgates")