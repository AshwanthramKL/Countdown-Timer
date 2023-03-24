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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline h4');

const futureDate = new Date();

// console.log(futureDate);

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const year = futureDate.getFullYear();

const hrs = futureDate.getHours();
const mins = futureDate.getMinutes();
const time = `${hrs}:${mins}`;
console.log(time);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${time}am`;