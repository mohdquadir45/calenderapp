/* const date = new Date();

const renderCalendar = () => {
    const monthDays = document.querySelector(".days");
const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
console.log(prevLastDay);
const firstDayIndex = date.getDay();

const lastDayIndex = new Date(date.getUTCFullYear(), date.getMonth()+1, 0).getDate();
console.log(lastDayIndex)
const nextDays = 7-lastDayIndex-1;
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

document.querySelector(".date h1").innerHTML = months[date.getMonth()];
document.querySelector(".date p").innerHTML = date.toDateString();

let days = "";

for(let x = firstDayIndex; x > 0; x-- ){
    days += `<div class="prev-date">${prevLastDay-x+1}</div>`
}
for(let i = 1; i <= lastDay; i++){
    if (
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth()
      ) {
        days += `<div class="today">${i}</div>`;
      } else {
        days += `<div>${i}</div>`;
      }
   
}

for(let j = 1; j <= nextDays; j++){
    days += `<div class="next-date">${j}</div>`
    
}
monthDays.innerHTML = days;

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});
}

renderCalendar(); */
const currentDate = document.querySelector(".date h1");

const daysTag = document.querySelector(".days");
const prevNextIcon = document.querySelectorAll(".month i");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = ["January", 'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'];

const calenderFunction = () => {
    let firstDayMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDateMonth = new Date(currYear, currMonth+1, 0).getDate();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let days = "";

    for(let i = firstDayMonth; i > 0; i--){
        days +=`<div class="prev-date">${lastDateofLastMonth-i+1}</div>`
    }
    for(let i = 1; i <= lastDateMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "today" : "";
            days +=`<div class="${isToday}">${i}</div>`
    }
    for(let i = lastDayofMonth; i < 6; i++){
        days +=`<div class="next-date">${i-lastDayofMonth+1}</div>`
    }

     currentDate.innerHTML = `${months[currMonth]} ${currYear}`
     daysTag.innerHTML=days;
}
calenderFunction();

prevNextIcon.forEach(icon => {
    icon.addEventListener("click", ()=>{
        currMonth = icon.id ==="prev" ? currMonth - 1 : currMonth + 1;
        calenderFunction()
    })
})