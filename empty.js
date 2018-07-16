var list =[
    "sun",
    NaN,
    "mon",
    "",
    null,
    "tue",
    "wed",
    ,
    ,
    "thu",
    undefined,
    "fri",
    null,
    "sat"
];
console.log(list);

var newList = [];
for(i in list){
    if(list[i]){
        newList.push(list[i]);
    }
}
console.log(newList);