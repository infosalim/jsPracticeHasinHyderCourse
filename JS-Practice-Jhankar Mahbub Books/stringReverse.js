

// string reverse with only for loop
var word = "salim";
var reverseWord = "";
for (var i = word.length - 1; i >= 0; i--) {
    var letter = word[i];
    reverseWord += letter;
}
console.log(reverseWord);

// string reverse with function
function reverse(word) {
    var reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        var letter = word[i];
        reverseWord += letter;
    }
    return reverseWord;
}
console.log(reverse("My name is Md Salim Hossain"));

//polindrome check
function reverse(word) {
    var reverseWord = "";
    for (var i = word.length - 1; i >= 0; i--) {
        var letter = word[i];
        reverseWord += letter;
        if(reverseWord == word){
            return "It's a Polindrome";
        }else{
            return "It's not Polindrome";
        }
    }
}
reverse("eee");