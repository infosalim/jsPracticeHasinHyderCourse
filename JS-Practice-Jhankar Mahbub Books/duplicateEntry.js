var mens = ["Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim", "Salim", "Rasel", "Sharif", "Amit", "Abir", "Shuvro", "Salim", "Sagor", "Amit", "Sanjoy", "Sagor", "Rubel", "Rasel", "Amit", "Shuvro", "Abir", "Sharif", "Salim"];

// without function
var selected = [];
for (var i = 0; i < mens.length; i++) {
    var men = mens[i];
    if (selected.indexOf(men) == -1) {
        selected.push(men);
    }
}
console.log(selected);
function removeDulpicate(mens) {
    var selected = [];
    for (var i = 0; i < mens.length; i++) {
        var men = mens[i];
        if(selected.indexOf(men) == -1){
            selected.push(men);
        }
    }
    return selected;
}

console.log(removeDulpicate(mens));


//delete same words from a sentence
function removeWord(sentence){
    var selected = "";
    for(var i = 0; i< sentence.length; i++){
        if(selected.indexOf(sentence[i]) == -1 || sentence[i] == " "){
            selected += sentence[i];
        }
    }
    return selected;
}
console.log(removeWord("My name is Salim"));

//ignore duplicates



