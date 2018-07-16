var monthName = "May, 2018";
var days = 31;
var startingDay = 2;

console.log("\n\nCalender Of",monthName,"\n");
console.log("Sun    Mon     Tue     Wed     Thu     Fri     Sat");

for(var i=0; i<5; i++){
    var dayRow = "";
    for(var j=1; j<=7; j++){
        var currentDay= 7*i + j- startingDay;
        if(currentDay>days){
            break;
        }else if(currentDay<1){
            currentDay =" ";
        }

        if(currentDay>9){
            dayRow += currentDay + "   ";
        }else{
            dayRow += currentDay + "    ";
        }
    }
    console.log(dayRow);
}