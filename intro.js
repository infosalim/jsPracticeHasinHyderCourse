function sayHi(name){
    if(name){
        console.log("Hello "+name);
    }else{
        console.log("How are you?");
    }
}

sayHi("Salim");
sayHi();
sayHi();
sayHi();

function isEven(number){
    if(number %2 == 0){
        return true;
    }
    return false;
}
console.log(isEven(67)); 