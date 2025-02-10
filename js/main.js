let dropDown = document.querySelector(".toggle-mega");
let megaList = document.querySelector(".mega-list");
let countDownDate = new Date("Feb 1,2026 23:59:59").getTime();

dropDown.addEventListener("click", () => {
  megaList.classList.toggle("drop-mega");
  dropDown.classList.toggle("clicked");
});

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  document.querySelector(".counter .days-count.num").innerHTML = days < 10 ? `0${days}` : days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".counter .hours-count.num").innerHTML = hours < 10 ? `0${hours}` : hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".counter .minutes-count.num").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".counter .seconds-count.num").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff == 0) {
    clearInterval(counter);
  }
}, 1000);
