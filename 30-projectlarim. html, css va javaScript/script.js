let bodyColors = [
     "red","blue",
     "pink","yellow",
     "black","green",
     "silver","grey",
     "orange","tomato","white"
];
     
let color = document.querySelector(".color");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
     let randomColor = randomBackgroundColor();
     document.body.style.backgroundColor = bodyColors[randomColor];
     document.querySelector(".color").innerHTML = bodyColors[randomColor];
});
function randomBackgroundColor() {
     return Math.floor(Math.random() * bodyColors.length);
}