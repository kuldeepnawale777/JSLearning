

console.log("---------------------VOTE ELIGIBILITY----------------------------------------------");
function voteEligibility(age) {
    if (  age<0 || age>100 || age ===undefined || (age==null) || isNaN(age)  ) {

        return console.log(`Age ${age} Invalid age `);
           }
           

           if (age>=18) {
            console.log(`Age ${age} is Eligiable for Voting`);

           } else {
            console.log(`Age ${age} is NOT Eligiable for Voting`);
           }
}
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility( );
voteEligibility(null);
voteEligibility(0/0);


console.log("---------------------GRAD CALCULATION----------------------------------------------");

function gradeCalculation(marks) {

    if(marks<=0 || marks > 100 || (typeof marks!= "number")|| isNaN(marks)  ){
        console.log(`Please provide the valid marks - ${marks}`);
    }

    if (marks>=90 && marks<100) {

        console.log(`Fantastic Marks ${marks} Grade"A+"`);
    }
     
        if (marks>=75 && marks<90) {
            console.log(`Excellent Marks ${marks} Grade"A"`);
        }
        
        if (marks>=50 && marks<75) {
            console.log(`Good  Marks ${marks} Grade"B"`);
        }

        if (marks>=35 && marks<50) {
            console.log(`Good  Marks ${marks} Grade"C Need Improvement"`);
        }
        
        if (marks<35 && marks>0) {
            console.log(`Your  Marks ${marks} Your fail `);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation(91);
gradeCalculation("Eighty ");
gradeCalculation(undefined);
gradeCalculation(null);
gradeCalculation(0/0);



 

 
 



















