let title = document.getElementById("title");
let clock = document.getElementById("clock");
let date = document.getElementById("date")
function ticky() {
  const live = new Date()
  const h = live.getHours();
  const m = live.getMinutes();
  const s = live.getSeconds();
  const wd = live.getDay();
  const wn = live.getDate();
  const mt = live.getMonth();
  const yr = live.getFullYear();
  date.innerHTML = (weekday(wd)+","+months(mt)+suffix(wn)+(yr));
  clock.innerHTML = (militarytostandard(h)+":"+mino(m)+":"+mono(s)); 
    title.innerHTML = "A Ticking Clock!"
function militarytostandard(military) {
  if ( h === 0){
    return 12
    } 
    else if (h > 12) {
    return h - 12
    } 
   else {
    return "0" + h 
    }
  }
function Time(st){
  if (st<10){
    return"0"+st}
  }
function mono(ma){
  if (s<10){
    return "0"+s
    }
  else if (h<12){
    return s+"AM";
    }
  else if (h>12){
    return s+"PM";
    }
  else {
    return s
    }
  }  
function mino(mo){
  if (m<10){
    return"0"+m
    }
  else {
    return m
    }
  }
function ampm(tod){
  if (h<12){
    return s+"AM";
    }
  if (h>12){
    return s+"PM";
    }
  }
function weekday(index) {
    const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
    ];
  return days[index];
  }
function suffix(sfx){
  if (sfx === 1 || date === 21 || date === 31){
    return sfx + "st";
    } 
    else if (sfx === 2 || sfx === 22){
    return sfx + "nd";
    }
    else if (sfx === 3 || sfx === 23){
    return sfx + "rd";
    }
    else {
      return sfx + "th";
    }
  }
function months(index) {
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
    return months [index];
  }
}
setInterval (ticky, 100);
ticky();