var n = 145;
var range = Math.ceil(Math.sqrt(n));

var divisors ="";
for(var i=1; i<=range; i++){
    if(n%i == 0){
        if(i == n/i){
            divisors += i +" " 
        }else{
            divisors += i +" " + (n/i) + " ";
        }
    }
}
console.log(divisors);