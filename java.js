
let title = document.getElementById("title");
let clock = document.getElementById("clock");
let date = document.getElementById("date");
title.innerHTML = "A Ticking Clock!"

function ticky() {
    const live = new Date()
    const h = live.getHours();
    const m = live.getMinutes();
    const s = live.getSeconds();
    const wd = live.getDay();
    const wn = live.getDate();
    const mt = live.getMonth();
    const yr = live.getFullYear();

    clock.innerHTML = (militarytostandard(h)+":"+leadZero(m)+":"+leadZero(s)+" "+ ampm(h) );
    date.innerHTML = (weekday(wd)+", "+months(mt)+" "+suffix(wn)+" "+(yr));
}

function militarytostandard(military) {
    let tempH = military
    if ( tempH === 0){
        tempH = 12
    } 
    else if (tempH > 12) {
        tempH =  tempH - 12
    }

    if  (tempH < 10) {
        return "0" + tempH 
    }
    else {
        return tempH
    }
}

function leadZero(ma){
    if (ma<10){
        return "0"+ma
    }
    else {
        return ma
    }
} 

function ampm(tod){
    return (tod<12 ? "AM" : "PM");
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
setInterval (ticky, 100);
ticky();