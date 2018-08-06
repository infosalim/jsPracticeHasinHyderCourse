
function reverseString(data){
    var reverseString = data.split('').reverse().join('');
    return reverseString;
}
var sentense = "Hello World";
var reverseSentence = reverseString(sentense);
console.log(reverseSentence);