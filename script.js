// Live Clock

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleTimeString();

document.getElementById("today").innerHTML =
now.toDateString();

}

setInterval(updateClock,1000);
updateClock();


// Day System

function showDay(day){

document.querySelectorAll(".day").forEach(d=>{
d.classList.remove("active");
});

document.getElementById(day).classList.add("active");

}


// Auto Open Current Day

const days = [
"sunday",
"monday",
"tuesday",
"wednesday",
"thursday",
"friday",
"saturday"
];

const currentDay =
days[new Date().getDay()];

if(document.getElementById(currentDay)){

showDay(currentDay);

}


// Attendance System

let present =
parseInt(localStorage.getItem("present")) || 0;

let absent =
parseInt(localStorage.getItem("absent")) || 0;

document.getElementById("present").innerHTML =
present;

document.getElementById("absent").innerHTML =
absent;

function addPresent(){

present++;

document.getElementById("present").innerHTML =
present;

localStorage.setItem("present",present);

}

function addAbsent(){

absent++;

document.getElementById("absent").innerHTML =
absent;

localStorage.setItem("absent",absent);

}


// Current Class Demo

function updateClass(){

const hour = new Date().getHours();

let current =
"No Active Class";

let next =
"Check Timetable";

if(hour>=8 && hour<9){

current="ERP (KS)";
next="ST (ND)";

}
else if(hour>=9 && hour<10){

current="ST (ND)";
next="NGD LAB";

}
else if(hour>=10 && hour<11){

current="NGD LAB";
next="ERP (KS)";

}
else if(hour>=12 && hour<13){

current="ERP (KS)";
next="JAVA (ND)";

}
else if(hour>=13 && hour<14){

current="JAVA (ND)";
next="No More Classes";

}

document.getElementById("currentClass").innerHTML =
current;

document.getElementById("nextClass").innerHTML =
next;

}

setInterval(updateClass,1000);
updateClass();


// Countdown

function countdown(){

const now = new Date();

let mins =
60 - now.getMinutes();

let secs =
60 - now.getSeconds();

document.getElementById("countdown").innerHTML =
mins + "m " + secs + "s";

}

setInterval(countdown,1000);
countdown();
