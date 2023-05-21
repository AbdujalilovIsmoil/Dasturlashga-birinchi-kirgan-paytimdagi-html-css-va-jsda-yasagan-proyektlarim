let scroll = document.querySelector(".scrollTopButton");
window.addEventListener("scroll",()=>{
  scroll.classList.toggle("active",window.scrollY > 40);
})
