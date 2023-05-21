


window.addEventListener("click",()=>{
     let input1 = document.querySelector("#input1"),
     input2 = document.querySelector("#input2"),
     input3 = document.querySelector("#input3"),
     btn = document.querySelector("#btn"),
     book = document.querySelector("#book");

     btn.addEventListener("click",(event)=>{
          event.preventDefault();
     });
     if(input1.value == " " && input2.value == " " && input3.value == " ") {
          alert("Please input your information");
     }
});    