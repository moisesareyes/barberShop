const hamburgerMenu = document.getElementById("hamburgerSuperMenu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", function(){
    nav.classList.toggle("active")
});
