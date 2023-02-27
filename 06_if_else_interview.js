function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName) {
    
    if (gradScore>=70 || hscScore>80 || sscScore>90) {

        console.log(` Congrates ${candidateName} ! Your are eligiable for TCS Interview`);
        
    } else {

        console.log(`  ${candidateName} Try Next Time ! Your are Not eligiable for TCS Interview`);
    }
}

tcsInterviewEligibility(80,86,90,"Cooldeep");
tcsInterviewEligibility(70,65,55,"Vaani");
tcsInterviewEligibility(60,79,88,"Sachin");