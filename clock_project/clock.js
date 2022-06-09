setInterval(function(){
d=new Date();
hours=d.getHours();
minute=d.getMinutes();
second=d.getSeconds();
hrotation=30*hours+0.5* minute;
mrotation=6*minute;
srotation=6*second;
var hrs=document.getElementById("hour");
var mins=document.getElementById("minutes");
var secs=document.getElementById("seconds");
hrs.style.transform= `rotate(${hrotation}deg)`;
mins.style.transform= `rotate(${mrotation}deg)`;
secs.style.transform= `rotate(${srotation}deg)`;
},1000);