// let him cook 🧑‍🍳

const seaBlue = "#21419B";
const seaBlueLight = "#EAF0FF";
const skyBlue = "#20A9DB";
const skyBlueLight ="#EDFAFF";
const pink = "#E91682";
const pinkLight = "#F1D9E6";
const yellow = "#EEE71B";
const yellowLight = "#FFFDEE";


var color = document.querySelector(':root');
const Body = document.querySelector(".Body");

colorLoad()

function colorLoad() {
    if (Body.id ==  "sky") {
        color.style.setProperty('--accent', skyBlue);
        color.style.setProperty('--accentLight', skyBlueLight);
        console.log("changed to sea blue")
     }
     else if (Body.id ==  "yellow") {
        color.style.setProperty('--accent', yellow);
        color.style.setProperty('--accentLight', yellowLight);
        console.log("changed to light yellow")
     }
     else if (Body.id ==  "pink") {
        color.style.setProperty('--accent', pink);
        color.style.setProperty('--accentLight', pinkLight);
        console.log("changed to pink")
     }
     else {
        color.style.setProperty('--accent', seaBlue);
        color.style.setProperty('--accentLight', seaBlueLight);
        console.log("changed to deep blue")
     }
}

// Bro I cooked some good shit aye 🫡
