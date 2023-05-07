const ref = {
    btnStart: document.querySelector("button[data-start]"),
    btnStop: document.querySelector("button[data-stop]")
}

const TIME_OUT_DELAY = 1000;
const body = document.body.style;
let intervalId = null;

ref.btnStart.addEventListener("click", onStartButton);
ref.btnStop.addEventListener("click", onStopButton);

function onStartButton(){
    body.background = getRandomHexColor()
    changeBodyColorInterval()
    ref.btnStart.setAttribute("disabled", "")
}

function onStopButton(){
    clearInterval(intervalId)
    body.background = "none"; 
    ref.btnStart.removeAttribute("disabled")
}

function changeBodyColorInterval(){
    intervalId = setInterval(()=>{
        body.background = getRandomHexColor()
    }, TIME_OUT_DELAY)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }