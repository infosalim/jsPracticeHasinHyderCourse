var males = ["Salim","Suvro","Rafiq","Sumi"];
var females = ["Dolon","Rimi"];

// var lastPerson = males.pop();
// females.push(lastPerson);

delete(males[2]);
males.splice(2,1);
console.log(males,females);