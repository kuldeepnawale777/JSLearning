

function factorial(num) {
    if (num==0 || num== null|| num==undefined) {
 
      return "Invalid Number";
    }
    let factorial=1;
    for (let index = num; index > 0; index--) {
      
      factorial=factorial*index;

          
    }
   return factorial;
  }

 var resutl = factorial(5);
 console.log("Facotial of 5:",resutl);
 var resutl = factorial(3);
 console.log("Facotial of 3:",resutl);
 var resutl = factorial(null);
 console.log(resutl);
 var resutl = factorial(8);
 console.log("Facotial of 8:",resutl);
 var resutl = factorial();
 console.log(resutl);
 var resutl = factorial(9 );
 console.log("Facotial of 9:",resutl);
 var resutl = factorial(0 );
 console.log(resutl);
 
 
