function fibonacci(n: number): number {
if (n<=2){
    return 1;
}
return fibonacci(n-1) + fibonacci(n-2)
}

function showFibonacci(num: number): void {
for (let i = 1;i<=num;i++){
    console.log(fibonacci(i))
}
}
function sum(k:number): number {
let sum = 0;
for (let i=1;i<=k;i++){
    sum+=fibonacci(i);
}
return sum;
}
showFibonacci(5);
console.log(`Tổng dãy Fibonacci là: ${sum(5)}`)