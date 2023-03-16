class Bank  {
    constructor(bankName,location,accountNO,IFSC,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNO=accountNO;
this.IFSC=IFSC;
this.interestRate=interestRate;

}
}
const axis = new Bank ("AXIS Bank","Shivaji Nagar",65432100,"AXIS01",10);
const sbi = new Bank ("SBI Bank","Hinjawadi",65432111,"SBI02",11);
const icici = new Bank ("ICICI Bank","Deccan",65432122,"ICICI03",12);
const kotak = new Bank ("KOTAK Bank","FC Road",65432133,"KOTAK04",13);
const hdfc= new Bank ("HDFC Bank","MG Road",65432144,"HDFC04",14);
const panjab= new Bank ("Panjab Bank","Camp",65432155,"PANJAB05",14.5);

console.log(axis);
console.log(sbi);
console.log(icici);
console.log(kotak);
console.log(hdfc);
console.log(panjab);


const setBank = new Set();
setBank.add(axis);
setBank.add(axis);
setBank.add(sbi);
setBank.add(icici);
setBank.add(kotak);
setBank.add(hdfc);
setBank.add(panjab);

console.log("****Traverse Set***");
for (const element of setBank) {
    
    console.log(`${element.bankName},${element.location}`);
}

