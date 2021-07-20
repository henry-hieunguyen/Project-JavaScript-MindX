const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btn30m = document.getElementById("btntime1");
const btn1h = document.getElementById("btntime2");
const btn1h30m = document.getElementById("btntime3");
const btn2h = document.getElementById("btntime4");
const label = document.getElementById("label");
let hours = 0;
let minutes = 0;

let seconds = 60;
let totalSeconds = null;
let interval = null;

hoursLeft = () => {
    return Math.floor(totalSeconds / 3600);
}

minutesLeft = () => {
    const hourInSecond = hoursLeft() * 3600;
    return Math.floor((totalSeconds - hourInSecond) / 60);
}

start = () => {
    hours = document.getElementById("hour");
    minutes = document.getElementById("minute");
    hours = parseInt(hours.value);
    minutes = parseInt(minutes.value);
    totalSeconds = (hours * 60 * 60) + (minutes * 60);
    
    interval = setInterval(() => {
        let _hours = document.querySelector("#hours");
        let _minutes = document.querySelector("#minutes");
        let _seconds = document.querySelector("#seconds");

        if (seconds == 0) { seconds = 60; }
        totalSeconds--;
        seconds--;

        _hours.innerHTML = hoursLeft();
        _minutes.innerHTML = (minutesLeft() < 10 ? "0" + minutesLeft() : minutesLeft());
        _seconds.innerHTML = (seconds < 10 ? "0" + seconds : seconds);

    }, 1000);
}

stop = () => {
    clearInterval(interval);
}