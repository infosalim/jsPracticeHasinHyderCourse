var friends = [
    {
        name: "Hridoy",
        age: 24,
        bari: "shokhipur",
        type: "pagla",
        isGf: true
    },
    {
        name: "Ebrahim",
        age: 26,
        bari: "valuka",
        type: "premik",
        isGf: true
    },
    {
        name: "Nayeem",
        age: 25,
        bari: "bogura",
        type: "villen",
        isGf: false
    },
    {
        name: "Kawshar",
        age: 24,
        bari: "dhaka",
        type: "kobi",
        isGf: true
    },
    {
        name: "Salim",
        age: 21,
        bari: "madhupur",
        type: "programmer",
        isGf: false
    }

];
var selectedFriends = [];
for(var i=0; i< friends.length; i++){
    var friend = friends[i];
    if(friend.age > 20 && friend.isGf == false ){
        if(friend.bari == "madhupur" || friend.bari == "dhaka"){
            selectedFriends.push(friend);
        }
    }
}
console.log(selectedFriends);