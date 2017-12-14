var HOUR = 7;
var MINUTE = 30;
var PERIOD = "AM";

var time = "It's ";

if (MINUTE > 30) {
    time += "almost " + (HOUR + 1) + ","
} 
else {
    time += "just after " + (HOUR)
}
if (PERIOD == "PM") {
    time += " it's the evening."
}
else {
    time += " it's the morning."
}
//console.log (time);

//BONUS
var time = "It's ";

if (MINUTE == 5) {
    time += "5 after " + HOUR;
}
else if (MINUTE == 15) {
    time += "quarter after " + HOUR;
}
else if (MINUTE == 30) {
    time += "half past " + HOUR;
}
else if (MINUTE > 30) {
    time += "almost " + (HOUR + 1)
}
else {
    time += "just after " + HOUR
}

if (PERIOD == "PM") {
    if (HOUR > 6) {
        time += " in the evening."
        }
        else {
        time += " in the afternoon."
        } 
    }
    else {
        time += " in the morning."
    }

console.log (time)