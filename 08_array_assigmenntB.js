
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]

console.log(`1.Total element avaliable in array : ${arrayNumbers.length}`);

let firstNumb = arrayNumbers[0];
let lastNumb = arrayNumbers[arrayNumbers.length-1]
console.log(`2.Fist number in array is : ${firstNumb} & Last number in array is : ${lastNumb}`);

let lastThirdEle = arrayNumbers[arrayNumbers.length-3]
console.log(`3.Last third element in array is : ${lastThirdEle}`);


let arrayEven = []
let arrayOdd=[]
let positionEven=[]
let positionOdd=[]



for (let index = 0; index < arrayNumbers.length; index++) {
    let element = arrayNumbers[index];
    if (element%2==0) {
        arrayEven.push(element)
    }
}

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        arrayOdd.push(element);
    }
}
let sumOfPositionEven=0;


for (let index = 0; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    positionEven.push(element);

}
for (let index = 0; index < positionEven.length; index++) {
    const element = positionEven[index];
    sumOfPositionEven=sumOfPositionEven+element;
    
}

for (let index = 1; index < arrayNumbers.length; index=index+2) {
    const element = arrayNumbers[index];
    positionOdd.push(element)
    
}
let sumOfPositionOdd=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    if (index%2!=0) {
        const element = arrayNumbers[index];
        sumOfPositionOdd=sumOfPositionOdd + element;
    }
    
}


let sum = 0;

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sum=sum+arrayNumbers[index];
}

let multipleOfFive= [];

for (let index = 0; index < arrayNumbers.length; index++) {
               let element = arrayNumbers[index];
               if (element%5==0) {
                multipleOfFive.push(element);
               }
        
       
    }
    
let inculdeNumber = arrayNumbers.includes(115);
let inculdeNumberSeconcd = arrayNumbers.includes(23);

console.log(`4.Even number in array :${arrayEven}`);
console.log(`5.Odd number in array :${arrayOdd}`);
console.log(`6. Even position elments form array : ${positionEven}`);
console.log(`6.1 Sum of all even position element form array :${sumOfPositionEven}`);
console.log(`7.Odd position elements form array :${positionOdd}`);
console.log(`7.1 Sum of all odd Position element form array : ${sumOfPositionOdd}`);
console.log(`8.Sum of all elements in array : ${sum}`);
console.log("9.Number which are multiple of 5 in array :",multipleOfFive);

console.log('10.Is 115 Avaliable in array :',inculdeNumber);
console.log('11.Is 23 Avaliable in array :',inculdeNumberSeconcd);

const addElement = arrayNumbers.splice(3,2,55,66);
console.log("12.Insert Numbers 55,66 :",arrayNumbers);
const deleteElement = arrayNumbers.splice(4,3);
console.log("13.Delete 3 element starting from index4:",arrayNumbers);

//const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11]





