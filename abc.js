


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


