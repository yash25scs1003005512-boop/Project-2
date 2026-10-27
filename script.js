let sec = 0;
let min = 0;
let hr = 0;
let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay(){
    let h = hr < 10 ? "0"+hr : hr;
    let m = min < 10 ? "0"+min : min;
    let s = sec < 10 ? "0"+sec : sec;

    display.innerHTML = `${h}:${m}:${s}`;
}

function stopwatch(){
    sec++;

    if(sec==60){
        sec=0;
        min++;
    }

    if(min==60){
        min=0;
        hr++;
    }

    updateDisplay();
}

document.getElementById("start").onclick=function(){
    if(timer==null){
        timer=setInterval(stopwatch,1000);
    }
}

document.getElementById("pause").onclick=function(){
    clearInterval(timer);
    timer=null;
}

document.getElementById("reset").onclick=function(){
    clearInterval(timer);
    timer=null;
    hr=0;
    min=0;
    sec=0;
    updateDisplay();
    laps.innerHTML="";
}

document.getElementById("lap").onclick=function(){
    let li=document.createElement("li");
    li.innerHTML=display.innerHTML;
    laps.appendChild(li);
}

updateDisplay();