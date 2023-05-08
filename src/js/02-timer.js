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

refs.button.addEventListener("click", onButtonClick)
refs.button.setAttribute("disabled", "")
let choseDate;
let intervalId; 

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates, dateStr, instance) {
      console.log(dateStr)
      choseDate = selectedDates[0].getTime();
      const nowDate = instance.now.getTime();
      refs.button.setAttribute("disabled", "");
      if( nowDate > choseDate){
        Notify.failure('Please choose a date in the future.')
        return
      }
      refs.button.removeAttribute("disabled", "");
    },
  };

flatpickr(refs.input, options);

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
    refs.button.setAttribute("disabled", "")
    intervalId = setInterval(()=>{
        const currentTime = Date.now()
        let timeResult = choseDate-currentTime;
        if(timeResult <= 0){
            clearInterval(intervalId)
            Notify.success("It's time to Rock-N-Roll")
            return
        }
        timeRender(convertMs(timeResult))
    }, 1000)
}
function timeRender({ days, hours, minutes, seconds }) {
    refs.spanDaysEl.textContent = addLeadingZero(days);
    refs.spanHoursEl.textContent = addLeadingZero(hours);
    refs.spanMinEl.textContent = addLeadingZero(minutes);
    refs.spanSecEl.textContent = addLeadingZero(seconds);
}
function addLeadingZero(value){
    return value.toString().padStart(2, "0")
}
