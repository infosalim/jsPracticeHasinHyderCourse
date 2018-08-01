var firstArray = [1,3,5,7,9];
var secondArray = [2,4,6,8,10];
function sortedArray(first, second) {
    var marged = [];
    var length = firstArray.length + secondArray.length;
    var j = 0;
    var k = 0;
    for (var i = 0; i < length; i++) {
        if (first[j] < second[k] || second[k] == undefined) {
            marged.push(firstArray[j]);
            j++;
        } else {
            marged.push(secondArray[k]);
            k++;
        }
    }
    return marged;
}

console.log(sortedArray(firstArray,secondArray));