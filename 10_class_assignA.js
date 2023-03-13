class VechileCars {
//model = "VERNA";
//year = 2022;
//color = "BLACK";
//modelNo= "SX" ;
//isSunroof = "Yes";
constructor(model,year,color,modelNo,isSunroof){
    this.model=model;
    this.year = year;
    this.color = color;
    this.modelNo= modelNo;
    this.isSunroof =isSunroof;
}

}
const hundaiCars = new VechileCars("VERNA","2022","BLACK","SX","Yes");

const audiCars = new VechileCars("AUDI ","2023","RED","A4","Yes");
const kiaCars = new VechileCars("SELTOS","2022","BLACK","X line","Yes");
const mahindraCars = new VechileCars("THAR ","2021","SILVER","LX and AX","No");

const skodaCars = new VechileCars("RAPID ","2020","BEIGE","TSI Rider","No");

const arrayOfVehileCars = [hundaiCars,audiCars,kiaCars,mahindraCars,skodaCars];
for (const element of arrayOfVehileCars) {

    console.log(`Car Name :${element.model} , Year : ${element.year} ,  Color:${element.color}  , Varient:${element.modelNo}  , Sunroof Avaliable:${element.isSunroof} `);
}
console.log("----------------------////--------------------------------------------------------------------------");
console.log("-----------------------------------------------**--------------------------------------------////-----");


class College {

//colgName= "BMCC";
//colgCity="Pune";
//establishedYear="1964";
//colgDepartment="Commerce";
//email ="office.bmcc@despune.org";
constructor (colgName,colgCity,establishedYear,colgDepartment,email)
{

    this.colgName = colgName; 
    this.colgCity = colgCity; 
    this.establishedYear = establishedYear; 
    this.colgDepartment = colgDepartment; 
    this.email = email; 

}

}

const bmcc = new College ("BMCC" ,"Pune", "1964" ,"Commerce","office.bmcc@despune.org")
const ils = new College ("ILS Law College" ,"Pune", "1924" ,"Law"," ilslaw@ilslaw.in")
const fc = new College ("Fergusson College" ,"Pune", "1885" ,"Art","principal@fergusson.edu")
const spc = new College ("SP College" ,"Pune", "1916" ,"Art and Commerce","principalspcpune@gmail.com")
const gokhale  = new College("Gokhale Institute","Pune","1930","Politics and Economics","gokhaleinstitute@gipe.ac.in")


function traverseObject(College) {

    for (const key in College) {
        if (Object.hasOwnProperty.call(College, key)) {
            const element = College[key];
            console.log(`${key} ${element}`);
            
        }
    }
    
}
traverseObject(bmcc);
console.log("--------------------------------");
traverseObject(ils);
console.log("--------------------------------");
traverseObject(fc);
console.log("--------------------------------");
traverseObject(spc);
console.log("--------------------------------");
traverseObject(gokhale);
console.log("--------------------------------");









//function traverseObject(arg) {
//for (const key in arg) {
  // if (Object.hasOwnProperty.call(arg, key)) {
  //     const element = arg[key];
        
   // }
  //  console.log(arg);
  //  }
    //}

//traverseObject(bmcc);
//traverseObject(ils);
//traverseObject(fc);
//traverseObject(spc);
//traverseObject(gokhale);
        
 



function prime (number) {

    for (let index = 2; index < number; index++) {
        if (number%index==0) {
            return (`${number} : is not prime Number`)
            
        }
        
        return (`${number} :  is  prime Number`)
}
}
  
var result = prime(6);
console.log(result);
var result = prime(5);
console.log(result);







