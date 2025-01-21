/* CAMBIO A RESPONSIVE */
/*const hamburgerMenu = document.getElementById("hamburgerSuperMenu");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", function(){
    nav.classList.toggle("active")
});
/* AUTO SLIDE */
const imgElement = document.getElementById("principal"); 
const images = ['/src/img/download.png', '/src/img/download1.png','/src/img/download2.jpg'];

let index = 0;
function change() {
   imgElement.src = images[index];
   index > 1? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};