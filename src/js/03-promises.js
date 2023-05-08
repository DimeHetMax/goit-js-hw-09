import { Notify } from 'notiflix/build/notiflix-notify-aio';
const refs = {
  form: document.querySelector(".form")
}
refs.form.addEventListener("submit", onSubmitButton)

function onSubmitButton(event){
  event.preventDefault();
  const elements = refs.form.elements;
  let delay = Number(elements.delay.value)
  const step = Number(elements.step.value)
  const amount = Number(elements.amount.value)
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
function createPromise(position, delay) {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.5;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
}