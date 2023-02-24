

function maleMarriageEligibility(gender,age,boyName) {


var eligibilityM = (gender=="Male" && age>=21) ? `Hey ${boyName} Your Eligiable to Marriage` : `Hey${boyName}Your are not Eligiable for marriage`;

return eligibilityM;

}
var result = maleMarriageEligibility("Male",25,"Billgates")

console.log(result);
var result = maleMarriageEligibility("Male",17,"Stev Job")

console.log(result);


function femaleMarriageEligibility(gender,age,girlName) {


    var eligibilityF = (gender=="Female" && age>=18) ? `Hey ${girlName} Your Eligiable to Marriage` : `Hey${girlName}Your are not Eligiable for marriage`;
    
    return eligibilityF;
    
    }
    var result = femaleMarriageEligibility("Female",16,"Jenifer");
    
    console.log(result);

    var result = femaleMarriageEligibility("Female",25,"Malinda Gates");
    console.log(result);
