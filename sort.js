// var list = [
//     "sun",
//     "mon",
//     "tue",
//     "wed",
//     "thu",
//     "fri",
//     "sat"
// ];

// console.log(11>2);     // true
// console.log("11">"2");  // false (cause it's a strig)


// var a =1, b = 3;
// [a,b] = [b,a]; // swap

var list = [11,35,1,7,223,88,113,602,33];

// list.sort();
// console.log(list);

var length = list.length -1;

for(var i=0; i<length; i++){
    for(var j =0; j<length; j++){
        if(list[j] > list[j+1]){
            [ list[j], list[j+1]] = [list[j+1], list[j]];
        }
    }
}
console.log(list);