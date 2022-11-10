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
