let loader = document.querySelector(".container-loader");
window.addEventListener("DOMContentLoaded",(event)=>{
     event.preventDefault();
     setTimeout(()=>{
          loader.style.opacity = "0";
          setTimeout(()=>{
               loader.style.display = "none";
          },1000);
     },4000);
});
