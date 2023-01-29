const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".phone-menu");




hamburger.addEventListener('click', ()=>{
 if (menu.classList.contains("expanded")){
    menu.classList.add("shrinked")
    menu.classList.remove("expanded")
 }
 else{
    menu.classList.add("expanded")
    menu.classList.remove("shrinked")
 }

});