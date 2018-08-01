//fibo[n] = fibo[n-1] + fibo[n-2];

function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
console.log(fibonacci(10));

// fibonacci with recursive function

function fibonacciSeries(n){
    if(1 >= n ){
        return n;
    }
    return fibonacciSeries(n-1)+fibonacciSeries(n-2);
}