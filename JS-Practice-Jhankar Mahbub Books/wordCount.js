// program forword count with only loop
var speech = "I am seeking a brilliant frontend web designer to produce a responsive and interactive landing page, funnel website, to get the investor to register their interest in investing.";
var count = 0;
for (var i = 0; i < speech.length; i++) {
    if (speech[i] == " ") {
        count++;
    }
}
count++;
console.log(count);

// program for wordcount with function
function wordCount(speech){
    var count = 0;
    for (var i = 0; i < speech.length; i++) {
        if (speech[i] == " ") {
            count++;
        }
    }
    count++
    return count;
}
var words = wordCount("My name is Md Salim Hossain.");
console.log(words);


//program for vowel count
function vowelCount(speech) {
    var count = 0;
    for (var i = 0; i < speech.length; i++) {
        if (speech[i] == "a" || speech[i] == "e" || speech[i] == "i" || speech[i] == "O" || speech[i] == "u") {
            count++;
        }
    }
    return count;
}
var vcount = vowelCount("My name is Md Salim Hossain.");

console.log(vcount);
