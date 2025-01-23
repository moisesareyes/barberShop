const login = document.getElementById("login-show")
const closeLogin = document.getElementById("closeLogin")
const loginModal = document.getElementById("loginModal")
login.addEventListener('click',(e)=>{
    e.preventDefault();
    loginModal.classList.add("loginModal--show")
}   
)
closeLogin.addEventListener('click',(e)=>{
    e.preventDefault();
    loginModal.classList.remove("loginModal--show")
}   
)
