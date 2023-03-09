

let professor = {
Name : "Mayank ",
Address :"Pune",
College :"BMCC",
Phone  :"02024022",
Id : "bMCC 2023",


degrees: {
    PHD : "Advance computing",
    PG : "ME",
    engineering :"CSC" ,
    art : "Fine art",
    commerce : "B.com",
        },
certificates : ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"],

oneFucntion : function () {

    console.log(this.degrees);
    
}

};
console.log("5 Properties",professor);
console.log("Teacher degrees :",professor.degrees);
console.log(" Certificates :",professor.certificates);

professor.totalExperiance="14Year",
console.log("Adding new property :",professor);
professor.College="FC Pune ",
console.log("Moditying property College=FC Pune ",professor);
professor.certificates.push("Oracle Certificate")
console.log("Adding new certificate",professor.certificates);

console.log("Last Element",professor.certificates.slice(-1));

