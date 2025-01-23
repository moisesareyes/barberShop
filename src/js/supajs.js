/* CAMBIO A RESPONSIVE */
const hamburgerMenu = document.getElementById("hamburgerSuperMenu");
const nav = document.getElementById("supernav");

hamburgerMenu.addEventListener("click", function(){
    nav.classList.toggle("active")
});
/* AUTO SLIDE */
const imgElement = document.getElementById("principal"); 
const images = ['/src/img/download.png', '/src/img/download1.png','/src/img/download2.jpg', '/src/img/download3.png'];

let index = 0;
function change() {
   imgElement.src = images[index];
   index > 2? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};

/* CERRAR SESION */
if ("token" in sessionStorage == true){
    const logOutBtn = document.getElementById('logOutBtn')
    logOutBtn.addEventListener('click', (e) =>{
        sessionStorage.removeItem('token')
        location.reload()
    })
}
/* BIENVENIDO */
if ("token" in sessionStorage == true){
    const forsingle = document.getElementById("forsingle")
    const user = sessionStorage.getItem("token")
    const wlc = document.createElement("div")
    wlc.innerHTML = `
    <div class="p-4 text-sm rounded-lg text-center text-black bg-yellow-200" role="alert">
        <span class="font-medium text-center">Bienvenido ${user}</span> 
    </div>`
    forsingle.append(wlc)
}

/* XD */

const redAgenda = document.getElementById('redAgenda')
redAgenda.addEventListener('click', (e) =>{
    window.location = '/src/agenda.html'
})