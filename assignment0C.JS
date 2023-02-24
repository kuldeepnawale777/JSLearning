


function tcsInterviewCheck(gradScore,hscScore,sscScore,candidateName) {
    
var check = (gradScore>=70||hscScore>=80||sscScore>=90 ) ? `${candidateName} You are Eligiable for TCS Interview`:

`${candidateName} You are NOT Eligiable for TCS Interview`
 

    console.log(check);
}

tcsInterviewCheck(80 ,86 , 90 , "Cooldeep" );
tcsInterviewCheck(70,65,55 , "Sachin " );
tcsInterviewCheck(60,79,88,"Mayank" )
