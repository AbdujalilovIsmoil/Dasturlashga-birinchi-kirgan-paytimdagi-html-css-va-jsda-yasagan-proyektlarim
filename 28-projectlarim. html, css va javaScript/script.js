let search = document.querySelector(".search__text");
let btn = document.querySelector(".btn");
let ulList = document.querySelector(".ul__list");

window.addEventListener("DOMContentLoaded", ()=>{
     btn.addEventListener("click",(event)=>{
          if(search.value == ""){
               alert("Inputni ichini to'ldir");
               event.preventDefault();
          }else {
               event.preventDefault();
               let listItem = document.createElement("li");
               let clearBtn = document.createElement("button");
               listItem.innerText = search.value;
               clearBtn.textContent = "Delete";
               listItem.classList.add("listItem");
               clearBtn.classList.add("clear");
               ulList.appendChild(listItem);
               listItem.appendChild(clearBtn);
               search.value = null;
                    clearBtn.addEventListener("click",()=>{
                    ulList.removeChild(listItem);
                    listItem.classList.add("delete");
               });
          }
     });
});
