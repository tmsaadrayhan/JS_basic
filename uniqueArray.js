var array= [30, 60, 10, 20, 90, 80, 80, 50, 60];
var unique= [];
for(i= 0;i<array.length;i++) {
    var exist= unique.indexOf(array[i]);
    if(exist==-1){
        unique.push(array[i]);
    }
}
console.log(unique);
