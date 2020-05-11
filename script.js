function colorClock() {
let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (seconds < 10 ) {
    seconds = '0' + seconds;
};
if (hours < 10 ) {
    hours = '0' + hours;
};
if (minutes < 10) {
    minutes = '0' + minutes;
};

let clockFace = hours+ ':' + minutes + ':' + seconds;
var hexColor = '#' + hours + minutes + seconds;

document.getElementById('clock').innerHTML = clockFace;
document.body.style.background = hexColor;

setTimeout(function() {
    colorClock();
  }, 1000);

};
colorClock();

