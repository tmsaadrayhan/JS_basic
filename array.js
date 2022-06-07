var array= [10, 20, 30, 40, 50];
console.log(array[2]);
console.log(array.indexOf(40));
console.log(array.indexOf(100));

array.push(60);
console.log(array);
console.log(array.length);

array.pop();
console.log(array);
console.log(array.length);

array.unshift(60);
console.log(array);
console.log(array.length);

array.shift();
console.log(array);
console.log(array.length);

var array02= array.slice(1, 3);
console.log(array02);

var array03= array.slice(-3, -1);
console.log(array03);

var array04= array.slice(2);
console.log(array04);
