

function string() {

    console.log("----Que 01---");
    var string="     Hey you are doing, keep it up"     ;  

    console.log("Given String :",string);
    console.log("----Que 02---");
    var length=string.length;
    console.log("Length of String :",length);

    console.log("----Que 03---");

    var trim=string.trim();
    console.log("After triming string and Length :",trim,trim.length);
    
    console.log("----Que 04---");
    var spaceRemoved=length-trim.length;
   
    console.log("Total Number of Extra Speaces :",spaceRemoved);

    console.log("----Que 05---");
    var firstAndLastChar=trim.charAt(0);
    var lastChar=trim.charAt(trim.length-1)

    console.log("First & Last Charerer after Trim:",firstAndLastChar,lastChar);
    console.log("----Que 06---");
    var onlyWord=trim.split(" ");
    console.log("Total Avaliable Word after Trim :",onlyWord.length)
    



    
    
    
 

}
 string();
