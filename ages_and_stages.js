var yourAge = 45;
var result;
if(yourAge<0 || yourAge>200){
    result = "You are a vampire";
}else if(yourAge <= 1){
    result = "You are a baby";
}else if(yourAge <= 3){
    result = "You are a todler";
}else if(yourAge <= 12){
    result = "You are a kid";
}else if(yourAge <18){
    result = "You are a teenager";
}else if(yourAge >= 18){
    result = "You are an adult";
}

console.log(result);