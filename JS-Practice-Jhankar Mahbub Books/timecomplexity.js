var elaka = ["Sajib","mit","Ruman","Suva"];
var school = ["Prince","Rinku","Juwel","Arpon"];
var poly = ["Antor","Anik","Kawshar","Nayeem","Ebu"];

var myFriends = [elaka, school, poly];

for(var i = 0; i<myFriends.length; i++){
    var friends = myFriends[i];
    for(j = 0; j<friends.length; j++){
        console.log(friends[j]);
    }
}