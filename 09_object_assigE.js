
let sbiBank = {

bankName:"SBI Bank",
location:"Pune",
accountNo:"2023001",
ifsc : "SBI0101",
interestRate:"10%",

sbiShowDetails: function ( ) {
    console.log(`Bank Name : ${this.bankName } Loaction : ${this.location} Account No :${this.accountNo} ifsc : ${this.ifsc} Interest Rate:${this.interestRate} ` );
}
}

let axisBank = {

    bankName:"Axis Bank",
    location:"Deccan Pune ",
    accountNo:"2023111",
    ifsc : "Axis0101",
    interestRate:"11.05%",
    
    axisShowDetails: function ( ) {
        console.log(`Bank Name : ${this.bankName } Loaction : ${this.location} Account No :${this.accountNo} ifsc : ${this.ifsc} Interest Rate:${this.interestRate} ` );
    }
    }

    let hdfcBank = {

        bankName:"HDFC Bank",
        location:"Hadapsar Pune ",
        accountNo:"20232222",
        ifsc : "HDFC02471",
        interestRate:"12.05%",
        
        hdfcShowDetails: function ( ) {
            console.log(`Bank Name : ${this.bankName } Loaction : ${this.location} Account No :${this.accountNo} ifsc : ${this.ifsc} Interest Rate:${this.interestRate} ` );
        }
        }
        let yesBank = {

            bankName:"YES Bank",
            location:"KP Pune ",
            accountNo:"2023888",
            ifsc : "YESB011221",
            interestRate:"14.05%",
            
            yesShowDetails: function ( ) {
                console.log(`Bank Name : ${this.bankName } Loaction : ${this.location} Account No :${this.accountNo} ifsc : ${this.ifsc} Interest Rate:${this.interestRate} ` );
            }
            }
    



sbiBank.sbiShowDetails();
axisBank.axisShowDetails();
hdfcBank.hdfcShowDetails();
yesBank.yesShowDetails();
