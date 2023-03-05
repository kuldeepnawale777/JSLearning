

function factorialofWordsCount(str) {

    if (str==0 || str==undefined || str==null ) {
        return "Invalid string please enter valid string!";
        
    }
    
    let word = str.split(" ");
   let length= word.length;
   
   console.log(`length of given string ${length}`);

   let facorial = 1;
for (let index = length; index > 0; index--) {
    facorial=facorial*index;
    
}
return facorial;
}

var  result = factorialofWordsCount("Revision is the mother of Success");

console.log(`Factorial of string "Revision is the mother of Success" is :${result}`);

var result = factorialofWordsCount();

var result = factorialofWordsCount("We never fail, we always learn");

console.log(`Factorial of string "We never fail, we always learn" is :${result}`);

var result = factorialofWordsCount();

var result = factorialofWordsCount("Kuldeep Bhimrao Nawale");

console.log(`Factorial of string ""Kuldeep Bhimrao Nawale" is :${result}`);