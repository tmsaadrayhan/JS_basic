var array= [30, 60, 10, 20, 90, 80, 80, 50];
var maxNum= array[0];
for(i=1; i<array.length; i++) {
    if (maxNum<array[i]) {
        maxNum= array[i];
    }
}
console.log(maxNum);