// let hourDiction = document.getElementById("hours");
// let d = document.querySelector("#day");
// let h = document.querySelector("#hour");
// let m = document.querySelector("#minute");
// let s = document.querySelector("#second");

// let deadline = new Date("May 18, 2024 12:00:12").getTime();

// function getTime() {
//   let currentDate = new Date().getTime();
//   let distance = deadline - currentDate;

//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   seconds = checkTime(seconds);
//   minutes = checkTime(minutes);
//   hour = checkTime(hour);

//   if (hour <= 1) {
//     hourDiction.innerHTML = "Hour";
//   }

//   d.innerHTML = days;
//   h.innerHTML = hour;
//   m.innerHTML = minutes;
//   s.innerHTML = seconds;
//   setInterval("getTime()", 1000);
// }

// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// getTime();
