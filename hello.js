var booleanVariable= true;
console.log(booleanVariable);
console.log(typeof booleanVariable);

var numberVariable01= 12;
console.log(numberVariable01);
console.log(typeof numberVariable01);

var numberVariable02= 13.5;
console.log(numberVariable02);
console.log(typeof numberVariable02);

console.log(numberVariable01 + numberVariable02);

var numberVariable03= "15";
console.log(numberVariable03);
console.log(typeof numberVariable03);

console.log(numberVariable01 + numberVariable02 + numberVariable03 + 05+ 0.1);

var numberVariable04= parseFloat(numberVariable03);
console.log(numberVariable04);
console.log(typeof numberVariable04);

console.log(numberVariable01 + numberVariable02 + numberVariable04 + 05+ 0.1);

var numberVariable05= +numberVariable03;
console.log(numberVariable05);
console.log(typeof numberVariable05);

console.log(numberVariable01 + numberVariable02 + numberVariable05 + 05+ 0.1);

var numberVariable06= "" + numberVariable05
console.log(numberVariable06);
console.log(typeof numberVariable06);

console.log(numberVariable01 + numberVariable02 + numberVariable06 + 05+ 0.1);

var number01= 0.1;
var number02= 0.2;

console.log(number01 + number02);

var result= number01 + number02;
result= result.toFixed(2);

console.log(result);

number01= 100;
number02= 25;

console.log(number01 + number02);

console.log(number01 - number02);

console.log(number01 * number02);

console.log(number01 / number02);

console.log(120 / number02);

console.log(120 % number02);

var number= 5;

console.log(number++);
console.log(number);
console.log(++number);
console.log(number--);
console.log(number);
console.log(--number);

number= -5;
console.log(Math.abs(number));

number= 5.456;
console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.floor(number));
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.round(Math.random()*100));

var stringVariable= "T.M. Saad Rayhan";
console.log(stringVariable);
console.log(typeof stringVariable);

console.log(stringVariable.length);

console.log(stringVariable.toLocaleLowerCase());

console.log(stringVariable.toUpperCase());

console.log(stringVariable.indexOf("Saad"));

console.log(stringVariable.split(" "));

const canNotBeChanged= "Saad";
//the value of this variable can not be changed.
console.log(canNotBeChanged);

let canBeChanged= "Bangladesh";
//the value of this variable can be changed.
canBeChanged= "developed";
console.log(canBeChanged);