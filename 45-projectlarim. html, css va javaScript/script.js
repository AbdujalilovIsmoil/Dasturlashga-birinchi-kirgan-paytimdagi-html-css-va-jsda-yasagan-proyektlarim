let personLanguage = {
  Uzbek: {
    value: 
    ` 
      Mening ismim Ismoil. Mening familyam Abdujalilov.  Men Toshkent Viloyati Bekabod shahrida tug'ilganman.
      Men 2005 yil 4 oy 21 - aprelda tug'ilganman. IT sohasida 1 yildan buyon o'qiyman. Yo'nalishim Front-End
      Developer. Hozirda Coders Uz kanali asoschisiman. Maqsadim ummatga ilm berish.
    `
  },
  Rus: {
    value: 
    `
    Меня зовут Исмаил. Моя семья Абдужалилов. Я родился в городе Бекабад Ташкентской области. Я родилась 21
    апреля 2005 года, 4 месяца. Я изучаю IT в течение 1 года. Мое направление Front-End Developer. В настоящее
    время я являюсь основателем Coders Uz Channel. Моя цель - передать знания умме.
    `
  },
  Eng: {
    value: 
    `
    My name is Ismail. My family is Abdujalilov. I was born in Bekabad, Tashkent Region.
    I was born on April 21, 2005, 4 months. I have been studying IT for 1 year. My direction is Front-End
    Developer. I am currently the founder of Coders Uz Channel. My goal is to impart knowledge to the ummah.
    `
  }
}
let language = document.querySelector(".language");
let paragraph = document.querySelector(".paragraph");
language.addEventListener("click",(event)=>{
  if(event.target.value == "Uzb"){
      setTimeout(()=>{
        paragraph.innerHTML = personLanguage.Uzbek.value;
      },500)
  }
  if(event.target.value == "Rus"){
    setTimeout(()=>{
      paragraph.innerHTML = personLanguage.Rus.value;
    },500)
  }
  if(event.target.value == "Eng"){
    setTimeout(()=>{
      paragraph.innerHTML = personLanguage.Eng.value;
    },500)
  }
})