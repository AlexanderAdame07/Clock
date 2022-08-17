
  let live = new Date();

let title = document.getElementById("title");
title.innerHTML = "A Ticking Clock!"
let clock = document.getElementById("clock");
let date = document.getElementById("date");

  let h = live.getHours();
  let m = live.getMinutes();
  let s = live.getSeconds();
  let wd = live.getDay();
  let wn = live.getDate();
  let mt = live.getMonth();
  let yr = live.getFullYear();

console.log(weekday(wd)+","+months(mt)+suffix(wn)+yr);
date.innerHTML = (weekday(wd)+","+months(mt)+suffix(wn)+yr);


console.log(militarytostandard(h)+":"+mino(m)+":"+mono(s)) 

function increment() {
clock.innerHTML = (militarytostandard(h)+":"+mino(m)+":"+mono(s)) 
  const liveclock ='${militarytostandard(h)}:${mino(m)}:${$+mono(s)}'
}

console.log(militarytostandard(h));
function militarytostandard(military) {
  if ( h === 0){
    return 12
  } else if (h > 12) {
    return h - 12
  } else {
    return h 
  }
}



console.log(Time(h));
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

console.log(ampm(s))
function ampm(tod){
  if (h<12){
    return s+"AM";
  }
  if (h>12){
    return s+"PM";
  }
  
}

console.log(weekday(wd));
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

console.log(suffix(wn));
function suffix(sfx){
  if (sfx === 1 || date === 21 || date === 31){
    return sfx + "st";

  } else if (sfx === 2 || sfx === 22){
    return sfx + "nd";
  }
    else if (sfx === 3 || sfx === 23){
    return sfx + "rd";
    }
    else {
      return sfx + "th";
    }
  }
  
console.log(months(mt));
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
setInterval (increment, 1000);
increment();