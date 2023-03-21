class Employee{

    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id = emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radh","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",4500,"Infy")
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR",85000,"Infy");



const arrayOfEmployee=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.log("---------Step 01(TCS Employee ) -----------------------");
for (const element of arrayOfEmployee) {

    if (element.emp_company=="TCS") {
        
        console.log(`Employee Name; ${element.emp_name} and Company:${element.emp_company}`);
    }
    
}

console.log("---------Step 02 (Finance Department employee)-----------------------");
for (const element of arrayOfEmployee) {
    if (element.emp_dept=="Finance") {
        console.log(`Department of an employee:${element.emp_dept}and Employee Name:${element.emp_name}`);
    }
    
}
console.log("---------Step 03 (Employee name start with R)-----------------------");


for (const element of arrayOfEmployee) {
    const empname = element.emp_name;
    if (empname.charAt(0) == "R") {
      console.log(
        `Employee Name : ${element.emp_name} Id: ${element.emp_id} Depeartment: ${element.emp_dept} Salary: ${element.emp_salary} Company: ${element.emp_company}`
      );
    }
  }


console.log("---------Step 04 (Employee salary more than 7500");

for (const element of arrayOfEmployee) {

    if (element.emp_salary>75000) {
        console.log(`Salary more than 75K is ${element.emp_name}`);
        
    }
}

console.log("---------Step 05 (Employee salary more than 50K and Department is IT");

for (const element of arrayOfEmployee) {

    if (element.emp_salary >= 50000 && element.emp_dept=="IT") {
        console.log(`Employee salary more than 50K and Department IT : ${element.emp_name}`);
    }
    
}


console.log("---------Step 06 (Employee of Infy");

for (const element of arrayOfEmployee) {

    if ( element.emp_company=="Infy") {

        console.log(`Employee of Infy: ${element.emp_name}`);
    }
    
}



  
  
  