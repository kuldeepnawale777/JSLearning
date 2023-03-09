


var string = function (str) {
    
var firstWord="";
    for  (let index = 0; index <str.length; index++) {
        var char = str.charAt(index);
        console.log(index);
        
        firstWord= firstWord + char;
        return firstWord;
         }
    }
var result = string("Hey cooldeep");
console.log(result);


var string =function (str) {
    var word="";
for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    word = word+char;
    
   
}
return word;
}
var result =string("Hey are u there")




var string = function (str){
    var word ="";
    var counter=0
    for  (let index = 0 ; index <str.length ; index++){
      char = str.charAt(index);
     
      
      if (char==" ")
      {
        counter++
        if (counter==1  ) {
            if ( counter==2) {
              
            }
        }
     
       
      }
      
      
      word=word+char;
    }
    console.log(counter);
    return word;
  }
  var result = string("Hey are you there");
  console.log(result);


function reverse(str) {
  let stored ="";
  for (let index = str.length-1; index >=0 ; index--) {
    let char=str.charAt(index)
    
   if (char==" ") {
    break;
   }
   stored = stored +char;
      }
      return stored;
}
let resutl = reverse("hey are you");
console.log(resutl);



var arrayTest=["kuldeep","nawale","pune","banglor"];
console.log(arrayTest);

var test=arrayTest.includes("kuldeep");
console.log(test);

var inexOf= arrayTest.indexOf("kuldeep");
console.log(inexOf);

var upd= arrayTest[0]=35;
console.log(upd);

console.log(arrayTest);

//var del = arrayTest.splice(1,1)
console.log(arrayTest);

var arrayKuldeep=[0,1,2,3,4,5,6];
console.log(arrayKuldeep);

var testSlice = arrayKuldeep.splice(3,3);
console.log(arrayKuldeep);