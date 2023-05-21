let img = document.querySelector(".container__images");
let images = document.querySelectorAll("img");
let next = document.getElementById("Next");
let prev = document.getElementById("Prev");
let index = 0;
function Carousel() {
  console.log(index);
  if (index > images.length - 1) {
    index = 0;
  }
  if (index < 0) {
    index = images.length - 1;
    console.log(index);
  }
  img.style.transform = `translateX(${-index * 500}px)`;
}
next.addEventListener("click", () => {
  index++;
  Carousel();
});
prev.addEventListener("click", () => {
  index--;
  Carousel();
});
