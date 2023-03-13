
function Bank(bankName,location,ifscCode,branchcode) {
    
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchcode=branchcode;////////

    this.show=function () {
        
    console.log(`Bank Name :${this.bankName},location: ${this.location},IFSC:${this.ifscCode},Branch Code: ${this.branchcode}`)}
    }

Bank.prototype.Opentime="Bank Open time :10AM IST";
Bank.prototype.Closetime="Bank Close time :06PM IST";

let Yesbank = new Bank ("Yes Bank","Pune","YES001","PUN001");
Yesbank.show();

let mahbank = new Bank ("Maharashatra Bank","Hinjawadi","MH004","Hin004");
mahbank.show();

let axisbank = new Bank ("Axis Bank","Mumbai","Axis002","Mum002");
axisbank.show();

let sbibank = new Bank ("SBI Bank","Hydrabad","YES001","PUN001");
sbibank.show();
console.log("--------------------");
console.log("SBI ",sbibank.Opentime,);
console.log("SBI ",sbibank.Closetime);
console.log("--------------------");
console.log("AXIS ",axisbank.Opentime,);
console.log("AXIS ",axisbank.Closetime);
console.log("--------------------");

console.log(`Bank Name :${sbibank.bankName},Branch Code:${sbibank.branchcode},${sbibank.Opentime} , ${sbibank.Closetime}`);