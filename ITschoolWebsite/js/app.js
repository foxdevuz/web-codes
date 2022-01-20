"use strict";
// o'zgaruvchilar
let userName = document.getElementById("userName");
let userImage = document.getElementById("userImage");
let send = document.querySelector(".add")
let modal = document.querySelector(".done");
let backdrop = document.querySelector(".backdrop");
let backdrop2 = document.querySelector(".backdrop2");
let rwdNAV =document.getElementById("rwd")
let rwdNAV2 =document.getElementById("rwd2")
let rwdNAV3 =document.getElementById("rwd3")
let rwdNAV4 =document.getElementById("rwd4")
// Functions
    send.addEventListener("click", () => {
        modal.classList.add("show");
        backdrop.classList.add("show");
    })


backdrop.addEventListener("click", () => {
    backdrop.classList.remove("show");
    modal.classList.remove("show")
})
rwdNAV.addEventListener("click", () => {
        rwdNAV2.classList.toggle("showNAV")
        rwdNAV3.classList.toggle("showNAV3")
        rwdNAV4.classList.toggle("showNAV4")
})
