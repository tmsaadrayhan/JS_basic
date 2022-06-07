var numberA= 9.15;
var numberB= 9.1;
var numberC= 9.2;

if(numberA>numberB) {
    if(numberA>numberC) {
        console.log("Number a is the maximum number"); 
    }
    else if(numberC>numberB) {
        console.log("Number c is the maximum number");
    }
}
else if(numberB>numberC){
    console.log("Number b is the maximum number");    
}
else {
    console.log("Number c is the maximum number");
}