let input = document.querySelector("input");
let textarea = document.querySelector("textarea");
let box = document.querySelector(".box");

input.addEventListener("keyup",()=>{
     box.innerHTML = input.value;
});
textarea.addEventListener("keyup",()=>{
     box.innerHTML = textarea.value;
});