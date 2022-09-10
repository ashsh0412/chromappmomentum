const Clock = document.querySelector("#clock");

function ClockTime(){
    const date = new Date();
    Clock.innerHTML = date.toLocaleTimeString('en-US');
}

ClockTime();
setInterval(ClockTime, 1000);