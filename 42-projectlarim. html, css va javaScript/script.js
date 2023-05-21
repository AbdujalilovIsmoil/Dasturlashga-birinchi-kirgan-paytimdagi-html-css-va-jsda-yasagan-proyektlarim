let title = document.querySelector(".container-title");
let author = document.querySelector(".container__author");
let year = document.querySelector(".container__year");
let btn = document.querySelector(".btn");
let inputTitle = document.querySelector(".inputTitle");
let inputAuthor = document.querySelector(".inputAuthor");
let inputYear = document.querySelector(".inputYear");
let clear = document.querySelector(".clear");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  clear.addEventListener("click", () => {
    title.removeChild(titleParagraph);
    author.removeChild(authorParagraph);
    year.removeChild(yearParagraph);
  });
  let titleParagraph = document.createElement("h1");
  let authorParagraph = document.createElement("h1");
  let yearParagraph = document.createElement("h1");
  titleParagraph.classList.add("titleParagraph");
  authorParagraph.classList.add("authorParagraph");
  yearParagraph.classList.add("yearParagraph");
  title.appendChild(titleParagraph);
  author.appendChild(authorParagraph);
  year.appendChild(yearParagraph);

  if (
    inputTitle.value == "" &&
    inputAuthor.value == "" &&
    inputYear.value == ""
  ) {
    alert("Textlarni hammasi bo'sh Textlarni ichini to'ldiring.");
  } else {
    titleParagraph.innerHTML = inputTitle.value;
    authorParagraph.innerHTML = inputAuthor.value;
    yearParagraph.innerHTML = inputYear.value;
  }
  inputTitle.value = null;
  inputAuthor.value = null;
  inputYear.value = null;
});
