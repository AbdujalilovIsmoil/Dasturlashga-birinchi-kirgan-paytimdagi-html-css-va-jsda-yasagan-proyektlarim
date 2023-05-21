let monkeyOne = document.querySelector(".monkey-one");
let monkeyTwo = document.querySelector(".monkey-two");

monkeyOne.addEventListener("click",()=>{
  monkeyOne.style.display = "none";
  monkeyTwo.style.display = "block";
});
monkeyTwo.addEventListener("click",()=>{
  monkeyOne.style.display = "block";
  monkeyTwo.style.display = "none";
});