const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
}

const  days = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat"
}

const date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

window.onload = () => {
  displayCalendar(currentMonth, currentYear);
}

displayCalendar = (currentMonth, currentYear) => {
  daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const degree = 360 / daysInMonth;
  const cal = document.querySelector('#cal');
  cal.innerHTML = " ";

  const arcRangeEnd = Math.floor(Math.random() * (daysInMonth + 1));
  const arcRangeStart = Math.floor(Math.random() * (arcRangeEnd + 1));

  document.querySelector(".month").innerHTML =
    `<span>${months[currentMonth]}</span>`

  for(let i=1; i <= daysInMonth; i++) {
    const currentDay = new Date(currentYear, currentMonth, i).getDay();
    const calendar = document.createElement("div");
    calendar.classList.add("calendar");
    calendar.innerHTML =
      `<span
        class="arc" 
        style="
          display: ${ i >= arcRangeStart && i <= arcRangeEnd ? 'block' : 'none'};
          transform-origin: bottom center;
          transform: rotate(${degree * i}deg);
        "
      >
      </span>
      <div
        class = "calendar-wrapper"
        style=
          "transform-origin: bottom center;
          transform: rotate(${degree * i}deg);"
        >
          <span style="font-weight: ${currentDay === 0 || currentDay === 6 ? '600' : '400'}">
            ${i}
          </span>
          <span style="font-weight: ${currentDay === 0 || currentDay === 6 ? '600' : '400'}">
            ${days[currentDay]}
          </span>
      </div>`;
    cal.appendChild(calendar);
  }
}

decrementMonth = () => {
  if(currentMonth == 0){
    currentYear = currentYear - 1;
    currentMonth = 11;
  } else {        
    currentMonth = currentMonth - 1;
  }
  displayCalendar(currentMonth, currentYear);
}

incrementMonth = () => {
  if(currentMonth == 11){
    currentMonth = 0; 
    currentYear = currentYear + 1;       
  } else {
    currentMonth = currentMonth + 1;
  }
  displayCalendar(currentMonth, currentYear);
}
