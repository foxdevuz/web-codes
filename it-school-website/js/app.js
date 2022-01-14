"use strict";
// Ozgaruvchilar
let courses = document.querySelector(".course")
let nol = 22
if (courses.style.marginTop == nol) {
    courses.classList.add("coourse")
} else {
    courses.classList.remove("coourse")
}

// navbar show
let show = document.getElementById("navbarShow");
let nav1 = document.getElementById("nav")
let nav2 = document.getElementById("nav1")
let nav3 = document.getElementById("nav2")
let nav4 = document.getElementById("nav3")
show.addEventListener("click", () => {
   nav1.classList.toggle("navShow")
   nav2.classList.toggle("navShow")
   nav3.classList.toggle("navShow")
   nav4.classList.toggle("navShow")

})





// Auto typing
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Robototexnika", "Web dasturlash", "Grafik Dizayn", "Android dasturlash", "Python", "3D modellash"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});



// header show 
window.addEventListener("scroll", function() {
    const header = document.querySelector("nav")
    header.classList.toggle("scrolling", this.scrollY > 0)
})