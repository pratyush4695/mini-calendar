monthNameEl = document.getElementById("month-name")
dayNameEl = document.getElementById("day-name")
dayNumEl = document.getElementById("Day-number")
yearEl = document.getElementById("Year")

date = new Date()

monthNameEl.innerText = date.toLocaleString("en", {month:"long"})   //month = date.getMonth()

dayNameEl.innerText = date.toLocaleString("en", {weekday: "long"})   //weekday = date.getDay()

dayNumEl.innerText = date.getDate()

yearEl.innerText = date.getFullYear()
















