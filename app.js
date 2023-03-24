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

const format = (value)=>{
  if(value < 10){
    return `0${value}`;
  }
  return value;
}

const futureDate = new Date(2023, 4, 18, 0, 0, 0);

// console.log(futureDate);

let weekday = futureDate.getDay();
weekday = weekdays[weekday];

const date = format(futureDate.getDate());
let month = futureDate.getMonth();
month = months[month];
const year = format(futureDate.getFullYear());

const hrs = format(futureDate.getHours());
const mins = format(futureDate.getMinutes());
const time = `${hrs}:${mins}`;
// console.log(time);

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${time}`;


function getRemainingTime(){
  const today = new Date().getTime();
  const diff = futureDate - today;

  // console.log(diff);

  oneDay = 24*60*60*1000;
  oneHr = 60*60*1000;
  oneMin = 60*1000;

  // calculate all values
  let days = Math.floor(diff / oneDay);
  let hours = Math.floor((diff % oneDay) / oneHr);
  let mins = Math.floor((diff % oneHr) / oneMin);
  let secs = Math.floor((diff % oneMin) / 1000);

  // console.log(mins);
  const values = [days, hours, mins, secs]; 

  // console.log(items);
  items.forEach((item, index)=>{
    // console.log(item.classList[0]);
    item.textContent = format(values[index]);
  })
}

let countdown = setInterval(getRemainingTime, 1000);
