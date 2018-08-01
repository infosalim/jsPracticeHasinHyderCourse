function isPrime(n){
    // base cases
    if(n <= 1) return false;
    if(n <=3 ) return true;
    //this is checked so that we can skip five numbers in the loop
    if(n%2 == 0 || n%3 == 0 ) return false;
    for(var i=5; i*i <=n; i=i+6)
        if(n%i == 0 || n%(i+2) == 0)
        return false;
    return true;
}
console.log(isPrime(69));
console.log(isPrime(163));

//factorial
 function factorial(number){
     if(number < 1){
         return 1;
     }
     return number*factorial(number-1);
 }
 console.log(factorial(5));


// addition series
 var total = 0;
 for(var i =0; i<=10; i++){
     total += i;
 }
 console.log(total);