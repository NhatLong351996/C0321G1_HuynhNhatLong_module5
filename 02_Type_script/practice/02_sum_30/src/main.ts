let sum: number = 0;
let count: number = 0;
for (let i = 2; count < 30; i++){//i=3
    let isPrime: boolean = true;
    if (i == 2){
        sum+=i; //sum=2
        count++; //count=1
        continue;
    }
    for (let j=2;j<=Math.sqrt(i);j++){
        if (i%j==0){
            isPrime = false;
            break;
        }
    }//isprime=true
    if (!isPrime){
        continue;
    }
    sum+=i;//sum=5
    count++;//count=2
}
console.log(sum);