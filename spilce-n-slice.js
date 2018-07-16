// slice er khetre 1st index holo kon element theke nite hobe ebong 2nd index holo kon element er ag porjonto nite hobe... lice korle purber array thik thake kete ber hoy na
// splice er khetre 1st index holo kon element theke katte hobe ar 2nd holo koyta katte hobe...spilce e kete ana hoy


var list = [
    "sun",
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat"
];
// var chunk = list.slice(1,4);

// var length = list.length-3;
// var chunk = list.slice(length);

// var chunk =list.slice(-3);
// console.log(chunk);

var chunk = list.splice(1,3);
console.log(list,chunk);