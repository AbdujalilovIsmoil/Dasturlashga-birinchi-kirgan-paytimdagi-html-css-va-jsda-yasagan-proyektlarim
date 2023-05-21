let btn1 = document.querySelector(".box1");
let btn2 = document.querySelector(".box2");
let btn3 = document.querySelector(".box3");
btn1.addEventListener("click",function(){
    let btnTransform = document.querySelector(".box1").style.marginLeft = "0";
    if(btnTransform == "0") {
         document.querySelector(".box1").style.marginLeft = "100px";
         document.querySelector(".box1").style.transition = "1s ease";
    }else if(btnTransform == "100") {
     document.querySelector(".box1").style.marginRight = "100px";
     document.querySelector(".box1").style.transition = "1s ease";
    }else {
     document.querySelector(".box1").style.marginRight = "100px";
     document.querySelector(".box1").style.transition = "1s ease";
    }
   
     
});