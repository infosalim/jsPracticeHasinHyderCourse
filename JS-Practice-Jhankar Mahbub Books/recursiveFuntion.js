
// recursion
function writeNumber(number){
    if(0 == number){
        return;
    }
    console.log(number);
    writeNumber(number-1);
    
}
writeNumber(10);


// line break
console.log("\n");
// iteractive 

function writeIteractive(n){
    for(var i= n; i>=0; i--){
        console.log(i);
    }
}
writeIteractive(10);