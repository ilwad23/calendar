// This date will not change
const date = new Date();

// This date will change
let mdate = new Date();

const calender = () => {
  // Variables
  const lastday = new Date(mdate.getFullYear(), mdate.getMonth() + 1, 0);
  const prevlastday = new Date(mdate.getFullYear(), mdate.getMonth(), 0);
  const monthsindays = document.querySelector(".days");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const mh = (document.querySelector("#mh").innerHTML =
    months[mdate.getMonth()]);
  const Syr = document.querySelector("#Syr ");
  const datep = (document.querySelector(".date p").innerHTML =
    "Today: " + date.toDateString());
  let days = "";
  let years = "";
  let Cyears = 1975;
  let count = prevlastday.getDay();

  // Apends elements to the days element.
  for (let i = 1; i <= prevlastday.getDay() + 1; i++) {
    days += `<div class="past-date spots" id="${i}">${
      prevlastday.getDate() - count
    }</div>`;
    monthsindays.innerHTML = days;
    count--;
  }
  for (let i = 1; i <= lastday.getDate(); i++) {
    if (
      date.getDate() === i &&
      date.getMonth() === mdate.getMonth() &&
      date.getFullYear() === mdate.getFullYear()
    ) {
      days += `<div class="today spots" id="25">${i}</div>`;
      monthsindays.innerHTML = days;
    } else {
      days += `<div class="spots" id="${i + 3}">${i}</div>`;
      monthsindays.innerHTML = days;
    }
  }
  for (let i = 1; i <= 41 - lastday.getDate() - prevlastday.getDay(); i++) {
    days += `<div class="past-date spots" id="${i + 34}">${i}</div>`;
    monthsindays.innerHTML = days;
  }

  // Gives the options to go to to a different year
  for (let i = 0; i < 75; i++) {
    if (i + Cyears === mdate.getFullYear()) {
      years += `<option value="${i + Cyears}" selected>${i + Cyears}</option>`;
      Syr.innerHTML = years;
    } else {
      years += `<option value="${i + Cyears}">${i + Cyears}</option>`;
      Syr.innerHTML = years;
    }
  }
};
calender();

// Variable
const left = document.querySelector(".fa-angle-left");
const right = document.querySelector(".fa-angle-right");
const p = document.querySelector(".date p");
const Syr = document.querySelector("#Syr");
let ycount = mdate.getFullYear();
let bcount = mdate.getMonth();

// Add Event Listeners
left.addEventListener("click", previous);
right.addEventListener("click", next);
p.addEventListener("click", current);
Syr.addEventListener("change", change);

// Functions for the event listeners
function current(e) {
  // When the p tag, which states the current date, is clicked on it reloads the page so that the current date and month will show.
  location.reload();
}
function previous(params) {
  // When the left angle is click on it shows the previous month.
  bcount--;
  mdate = new Date(ycount, bcount, 1);
  calender();
}
function next(params) {
  // When the right angle is click on it shows the next month.
  bcount++;
  mdate = new Date(ycount, bcount, 1);
  calender();
}
function change(params) {
  // When the span that states the year is click on options for years between 1975 abd 2020 will show, which be selected.
  ycount = Syr.value;
  mdate = new Date(ycount, bcount, 1);
  calender();
}
