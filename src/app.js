// let him cook 🧑‍🍳

// const seaBlue = "#21419B";
const seaBlue = "#0079ff";
const seaBlueLight = "#EAF0FF";
const skyBlue = "#20A9DB";
const skyBlueLight ="#EDFAFF";
// const pink = "#E91682";
const pink = "#FF69B4";
const pinkLight = "#F1D9E6";
// const yellow = "#EEE71B";
const yellow = "#f6fa70";
const yellowLight = "#FFFDEE";


var color = document.querySelector(':root');
const Body = document.querySelector(".Body");

colorLoad()

function colorLoad() {
    if (Body.id ==  "sky") {
        color.style.setProperty('--accent', skyBlue);
        color.style.setProperty('--accentLight', skyBlueLight);

     }
     else if (Body.id ==  "yellow") {
        color.style.setProperty('--accent', yellow);
        color.style.setProperty('--accentLight', yellowLight);

     }
     else if (Body.id ==  "pink") {
        color.style.setProperty('--accent', pink);
        color.style.setProperty('--accentLight', pinkLight);

     }
     else {
        color.style.setProperty('--accent', seaBlue);
        color.style.setProperty('--accentLight', seaBlueLight);

     }
}

// Bro I cooked some good shit aye 🫡

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("nav").classList.add("scrolled")
    } 
    else {
        document.getElementById("nav").classList.remove("scrolled")
    } 
}

const openModal1 = document.getElementById('1')
const openModal2 = document.getElementById('2')
const openModal3 = document.getElementById('3')

const modal1 = document.getElementById('modal1')
const modal2 = document.getElementById('modal2')
const modal3 = document.getElementById('modal3')

const modal1Close = document.getElementById('modal1Close')
const modal2Close = document.getElementById('modal2Close')
const modal3Close = document.getElementById('modal3Close')


// modal 1

try{
openModal1.addEventListener("click", ()=>{
    modal1.classList.add('show')
    Body.classList.add('body-no-scroll')
    modal1.showModal()
   
})


modal1Close.addEventListener("click", ()=>{
    modal1.classList.remove('show')
    modal1.close()
})

//modal 2

openModal2.addEventListener("click", ()=>{
    modal2.classList.add('show')
    Body.classList.add('body-no-scroll')
    modal2.showModal()
})

modal2Close.addEventListener("click", ()=>{
    modal2.classList.remove('show')
    modal2.close()
})

// modal 3

openModal3.addEventListener("click", ()=>{
    modal3.classList.add('show')
    Body.classList.add('body-no-scroll')
    modal3.showModal()
})

modal3Close.addEventListener("click", ()=>{
    modal3.classList.remove('show')
    modal3.close()
})

window.addEventListener('click', outsideClick);


// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal1) {
    modal1.classList.remove('show')
    modal1.close()
  }
  if (e.target == modal2){
    modal2.classList.remove('show')
    modal2.close()
  }
  if (e.target == modal3){
    modal3.classList.remove('show')
    modal3.close()
  }
 
}
}catch{
    console.log('')
}


// Script for product card skeleton loading 

const blurDiv = document.querySelectorAll(".blur-load")
blurDiv.forEach(div => {
const img = div.querySelector("img")

    function loaded() {
        div.classList.add("loaded")
    }

    if (img.complete) {
        loaded();
    }

    else {
        img.addEventListener("load" ,loaded)
    }
})