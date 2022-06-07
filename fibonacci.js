function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else {
        if (n == 1) {
            return [0, 1];
        }
        else {
            var fibo = fibonacci(n - 1);
            var result = fibo[n - 1] + fibo[n - 2];
            fibo.push(result);
            return fibo;
        }
    }
}
var fiboArray = fibonacci(10);
console.log(fiboArray);