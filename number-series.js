 // s0 = 1 2 3 4 5 6 7 8 9
var series = "";
var n;
for(var i =1; i<10; i++){
    n = i;
    series += n + " ";
}

console.log("Series 0 =",series);

 //s1 = 2 4 6 8 10 12 14 ...

 var series = "";
 var n;
 for(var i =1; i<10; i++){
     n = i*2;
     series += n+" ";
 }
 console.log("Series 1 =",series);

 //s2 = 1 4 7 10 13 16 ...

series = "1 ";
n= 1;
for(var i =1; i<10; i++){
    n += 3;
    series += n+" ";
}
console.log("Series 2 =",series);


 //s3 = 0 3 8 15 24 35 48 ...

 series ="";
 for(var i = 1; i<10; i++){
     n = i*i-1;
     series += n +" ";
 }
 console.log("Series 3 =",series);

 //s4 = 1 4 3 8 5 12 7 16 9 20 ...

 series = "";

 for(var i =1; i<10; i++){
     n = i;
     if(n%2 == 0){
         n = i*2;
     }
     series += n+ " ";
 }
 console.log("Series 4 =",series);


 //s5 = 0 1 1 2 3 5 8 13 ... fibonacci

 series ="0 1 ";
 n = 0;
 var x= 0;
 var y = 1;

 for(var i=1; i<10;i++){
     n = x+y;
     x =y;
     y =n;
     series += n+ " ";
 }
 console.log("Series 5 =",series);