

let arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log("Given array:",arraySeasonalFruits);

console.log("==============001=====================");
let first= arraySeasonalFruits[0];
console.log("First elemnet in given array :",first);

let second= arraySeasonalFruits[3];
console.log("First elemnet in given array :",second);

console.log("=================02================");

let addFirst =arraySeasonalFruits.unshift("Papaya");
console.log(`Add papaya befor Banana ---${arraySeasonalFruits}`);

console.log("===================03=======================");

let removeMango = arraySeasonalFruits.splice(4,1);

console.log(`Remove mango ---${arraySeasonalFruits}`);
console.log("===================04=======================");

let addLastEle=arraySeasonalFruits.push("Pineapple");
console.log(`Add Pineapple ---${arraySeasonalFruits}`);

console.log("===================05=======================");

let addInarray=arraySeasonalFruits.splice(4,0,"Dragun Fruit");
console.log(`Add Dragun Fruit in array ---${arraySeasonalFruits}`);


console.log("===================06=======================");

let replaceInarray =arraySeasonalFruits.splice(2,1,"kiwi");
console.log(`Replace organge with kiwi ---${arraySeasonalFruits}`);

console.log("===================07=======================");

let logElement =arraySeasonalFruits.slice(1,5);

console.log(`Log element from 1 to 4 ---${logElement}`);

console.log("===================08=======================");

let lastThreeElement =arraySeasonalFruits.slice(arraySeasonalFruits.length-3
    );

console.log(`Last three element  ---${lastThreeElement}`);


