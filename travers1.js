var list = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];
// var length = list.length; // only one time check loop
// // normally print all element
// for(var i=0; i<length; i++){
//     console.log("Element at",i,"offset is",list[i]);
// }
// console.log("\n");

// // traverse and print all element
// for(var i =length-1; i>=0; i--){
//     console.log("Element at",i,"offset is",list[i]);
// }

for(i in list){
    console.log("Element at",i,"offset is",list[i]);
}