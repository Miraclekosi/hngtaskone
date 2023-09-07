let dataDay = document.getElementById('day')

let dataTime = document.getElementById('time')

// Day
let Day = new Date();

let daysOfTheWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let DayofWeek =daysOfTheWeek[Day.getDay()];

console.log(DayofWeek)

dataDay.innerText =DayofWeek

// Time

let CurTime = new Date()
let hours = CurTime.getHours();
let minutes= CurTime.getMinutes();
let Seconds = CurTime.getSeconds()

let Time = `${hours}:${minutes}:${Seconds}`

dataTime.innerText = Time