function updateClock(){
const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

let hour = now.getHours();

let current = "No Class";

if(hour==8) current="ERP(KS)";
else if(hour==9) current="ST(ND)";
else if(hour==10) current="NGD Lab";
else if(hour==12) current="ERP(KS)";
else if(hour==13) current="JAVA(ND)";

document.getElementById("currentClass").innerHTML=current;
}

setInterval(updateClock,1000);
updateClock();
