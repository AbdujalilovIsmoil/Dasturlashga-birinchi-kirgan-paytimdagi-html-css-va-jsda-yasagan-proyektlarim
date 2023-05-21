let navigation = document.querySelector(".navigation");
let faBars = document.querySelector(".fa-bars");
let faTimes = document.querySelector(".fa-times");

faBars.addEventListener("click",()=>{
     navigation.classList.toggle("active");
     faBars.style.display = "none";
     faTimes.style.display = "block";
     
});
faTimes.addEventListener("click",()=>{
     navigation.classList.toggle("active");
     faBars.style.display = "block";
     faTimes.style.display = "none";
});