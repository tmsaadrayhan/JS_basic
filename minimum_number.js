var numberA= 7.5;
var numberB= 8;
var numberC= 7;

if(numberA<numberB) {
    if(numberA<numberC) {
        console.log("Number a is the minimum number"); 
    }
    else if(numberC<numberB) {
        console.log("Number c is the minimum number");
    }
}
else if(numberB<numberC){
    console.log("Number b is the minimum number");    
}
else {
    console.log("Number c is the minimum number");
}
