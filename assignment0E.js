

function maleMarriageEligibility(gender,age,boyName) {

    if (gender=="Male" && age>=21) { 

        console.log(`Hey ${boyName} You are Eligiable for Marriage !`);
        
    } else {
        console.log(`Hey ${boyName} You are NOT Eligiable for Marriage !`);   
    }
    

}

maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male" ,17,"Stev Job" );


function femaleMarriageEligibility(gender,age,girlName) {

    if (gender=="female" && age>=18) { 

        console.log(`Hey ${girlName} You are Eligiable for Marriage !`);
        
    } else {
        console.log(`Hey ${girlName} You are NOT Eligiable for Marriage !`);   
    }
    

}

femaleMarriageEligibility("Male",16,"Jenifer");
femaleMarriageEligibility("Male" ,27,"Malinda Gates" );
