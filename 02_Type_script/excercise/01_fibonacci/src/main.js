function fibonacci(n) {
    if (n <= 2) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function showFibonacci(num) {
    for (var i = 1; i <= num; i++) {
        console.log(fibonacci(i));
    }
}
function sum(k) {
    var sum = 0;
    for (var i = 1; i <= k; i++) {
        sum += fibonacci(i);
    }
    return sum;
}
showFibonacci(5);
console.log("T\u1ED5ng d\u00E3y Fibonacci l\u00E0: " + sum(5));
