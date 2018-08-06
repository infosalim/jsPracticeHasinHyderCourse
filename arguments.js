function addStudents(storage, ...people){
    for(i=0; i<people.length; i++){
        storage.push(people[i]);
    }
}

var students = [];
addStudents(students, "Salim","Rubel","Abir","Shuvro");
console.log(students);

// this function is called hoisting.......
// if we call a function anywhere in the page no problem with that.... function think it is in the top of the page and the variables and function calls are below the function...

// when a function is declared the input data is called parameters and when a function is called the input data is called arguments....