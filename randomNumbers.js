sixCount = 0;
fiveCount = 0;
fourCount = 0;
threeCount = 0;
twoCount = 0;
oneCount = 0;

for (i = 0; i < 10000; i++) {
    var dice = Math.ceil(Math.random() * 6);
    if (dice == 6) {
        sixCount++;
    }
    else if(dice==5) {
        fiveCount++;
    }
    else if(dice==4) {
        fourCount++;
    }
    else if(dice==3) {
        threeCount++;
    }
    else if(dice==2) {
        twoCount++;
    }
    else {
        oneCount++;
    }
}
console.log(sixCount);
console.log(fiveCount);
console.log(fourCount);
console.log(threeCount);
console.log(twoCount);
console.log(oneCount);