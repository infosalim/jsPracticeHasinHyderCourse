var list = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];

var list2 = list.slice();

list2[1] = "No Day";
console.log(list, list2);