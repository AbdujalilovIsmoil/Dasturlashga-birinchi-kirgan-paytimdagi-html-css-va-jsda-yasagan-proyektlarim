let password = document.querySelector(".password");
let eye = document.querySelector(".eye-1");

eye.addEventListener("click", () => {
  if (password.type == "password") {
    password.setAttribute("type", "text");
    eye.classList.add("active");
  } else {
    password.setAttribute("type", "password");
    eye.classList.remove("active");
  }
});
