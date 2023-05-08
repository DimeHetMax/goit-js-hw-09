import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs ={
    input: document.querySelector("#datetime-picker"),
    button: document.querySelector("button[data-start]"),
    spanDaysEl: document.querySelector("span[data-days]"),
    spanHoursEl: document.querySelector("span[data-hours]"),
    spanMinEl: document.querySelector("span[data-minutes]"),
    spanSecEl: document.querySelector("span[data-seconds]"),
}

refs.button.setAttribute("disabled", "")
refs.button.addEventListener("click", onButtonClick)
let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr, instance) {
        
      const choseDate = selectedDates[0].getTime();
      const nowDate = instance.now.getTime();
      refs.button.setAttribute("disabled", "");

      if( nowDate > choseDate){
        clearInterval(intervalId)
        Notify.failure('Please choose a date in the future.')
        return
      }
      refs.button.removeAttribute("disabled", "")
      intervalId = setInterval(()=>{
            const currentTime = Date.now();
            const deltaTime = convertMs(choseDate - currentTime);
            console.log(deltaTime);
        }, 1000)
    },
  };

const result = flatpickr(refs.input, options);
console.log(result)
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }

function onButtonClick(){
    clearInterval(intervalId)
    console.log(result)
}
