let icon = document.querySelector(".fa-bars");
let navbar = document.querySelector(".navbar-icon");
let icon1 = document.querySelector(".fa-telegram");
let icon2 = document.querySelector(".fa-youtube");
let icon3 = document.querySelector(".fa-instagram");
let icon4 = document.querySelector(".fa-facebook");
let icon5 = document.querySelector(".fa-twitter");
icon.addEventListener("click",()=>{
     navbar.classList.toggle("active");
     icon1.classList.toggle("fas-telegram");
     icon2.classList.toggle("fas-youtube");
     icon3.classList.toggle("fas-instagram");
     icon4.classList.toggle("fas-facebook");
     icon5.classList.toggle("fas-twitter");
})