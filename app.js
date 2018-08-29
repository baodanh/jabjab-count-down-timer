const timerDayEl = document.querySelector(".timer__day");
const timerHourEl = document.querySelector(".timer__hour");
const timerMinuteEl = document.querySelector(".timer__minute");
const timerSecondEl = document.querySelector(".timer__second");
const timerLabelDayEl = document.querySelector(".timer__label--day");
const timerLabelHourEl = document.querySelector(".timer__label--hour");
const timerLabelMinuteEl = document.querySelector(".timer__label--minute");
const timerLabelSecondEl = document.querySelector(".timer__label--second");

function getTimeDifference(start, end) {
  let miliseconds = Math.floor(end - start);
  let seconds = Math.floor(miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60 + hours * 60);
  seconds = seconds - (days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60);
  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

let timer = setInterval(function() {
  const startDate = new Date();
  const endDate = new Date("Aug 29 2018 19:00:00");
  let timeDifferenceObj = getTimeDifference(startDate, endDate);
  timerDayEl.textContent = timeDifferenceObj.days;
  timerHourEl.textContent = timeDifferenceObj.hours;
  timerMinuteEl.textContent = timeDifferenceObj.minutes;
  timerSecondEl.textContent = timeDifferenceObj.seconds;


  if (timerDayEl.textContent < 10) {
    timerDayEl.textContent = "0" + timeDifferenceObj.days;
  }
  if (timerHourEl.textContent < 10) {
    timerHourEl.textContent = "0" + timeDifferenceObj.hours;
  }
  if (timerMinuteEl.textContent < 10) {
    timerMinuteEl.textContent = "0" + timeDifferenceObj.minutes;
  }
  if (timerSecondEl.textContent < 10) {
    timerSecondEl.textContent = "0" + timeDifferenceObj.seconds;
  }
},1000)

// function addS () {
//   if (timerDayEl.textContent = "01") {
//     timerLabelDayEl.textContent;
//   } else {
//     timerLabelDayEl.textContent = timerLabelDayEl.textContent + "s"
//   };
//   if (timerHourEl.textContent = "01") {
//     timerLabelHourEl.textContent = timerLabelHourEl.textContent;
//   } else {
//     timerLabelHourEl.textContent = timerLabelHourEl.textContent + "s";
//   };
//   if (timerMinuteEl.textContent != "01") {
//     timerLabelMinuteEl.textContent = timerLabelMinuteEl.textContent + "s";
//   };
//   if (timerSecondEl.textContent != "01") {
//     timerLabelSecondEl.textContent = timerLabelSecondEl.textContent + "s";
//   }
// }
// addS();