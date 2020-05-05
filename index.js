let countdownMinutes = 25;

// get year 
let date = new Date(); 
const clockUpDate = document.querySelector(".clock-up_date");

let dateToday = date.getDate(),
dateMonth = date.getMonth() + 1,
dateYear = date.getFullYear();
let getDate = `${dateToday}:0${dateMonth}:${dateYear}`;

clockUpDate.innerText = getDate;

// get time

setInterval(function clock() {
  let newDate = new Date();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let seconds = newDate.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  let clockUpTime = document.querySelector(".clock-up-time");
  let getTime = `${hours}:${minutes}:${seconds}`;
  clockUpTime.innerText = getTime;
}, 1000);

// get stopwatch

let seconds = 0, 
    minutes = 0, 
    hours = 0,
    milliseconds = 0,
    time;

let stopwatch = document.querySelector(".clock-center_left--time");

function start() {
  milliseconds += 100;
  if (milliseconds == 1000) {
    seconds++;
    milliseconds = 0;
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes < 10) {
    hours++;
    minutes = 0;
  }
  if (hours < 10) hours = 0;
  
  let getStopwatch = `${hours}:${minutes}:${seconds}:${milliseconds}`;
  stopwatch.innerText = getStopwatch;
}

function timer() {
  time = setInterval(start, 100);
}

// stop 
let stop = () => {
  clearInterval(time);
}

// loop
let loop = () => {
  let textCenterRight = document.querySelector(".clock-center_right-value");
  let div = document.createElement("div");
  let stopwatchText = stopwatch.innerText;
  let txt = document.createTextNode(stopwatchText);
  div.appendChild(txt);
  textCenterRight.appendChild(div);
}

// reset
let reset = () => {
  stopwatch.innerText = "0:0:0:000";
  seconds = 0; 
  minutes = 0; 
  hours = 0; 
  milliseconds = 0;
}

const minutesOut = document.querySelector(".clock-down_right--time");

// increase
let increase = () => {
  countdownMinutes++;
  if (countdownMinutes < 10)  {
    document.querySelector(".clock-down_left--minutes").innerText = `0${countdownMinutes}`
   } 
   else document.querySelector(".clock-down_left--minutes").innerText = countdownMinutes;
  minutesOut.innerText = `${countdownMinutes}:00`;
}

// decrease
let decrease = () => {
  countdownMinutes--;
  if (countdownMinutes < 10)  {
    document.querySelector(".clock-down_left--minutes").innerText = `0${countdownMinutes}`
   } 
   else document.querySelector(".clock-down_left--minutes").innerText = countdownMinutes
  minutesOut.innerText = `${countdownMinutes}:00`;
}

// start
let downLeftMinutesValue = document.querySelector(".clock-down_left--minutes");
let sec = 60;
let min;
let timeOut;

function countdown() {
  // debugger
  sec--;
  if (sec == 0) {
    min-=1;
    sec = 60;
  }
  if (min == 0) {
  }
  const minutesOut = document.querySelector(".clock-down_right--time");
  minutesOut.innerText = `${min}:${sec}`;
}

function timing() {
  min == 1 ? min = 0 : min = countdownMinutes - 1;
  timeOut = setInterval(countdown, 100);
}

// stop 
let stopMinutes = () => {
  clearInterval(timeOut);
}

// reset
let resetMinutes = () => {
  minutesOut.innerText = "00:00";
  sec = 60; 
  min = downLeftMinutesValue.innerText; 
}