if("token" in sessionStorage == false){
    var sesion = document.getElementById('login-show')
    sesion.addEventListener('click', (e) =>{
        window.location = '/src/index.html'
    })
}
else{
    const logout = document.getElementById('logOutBtn')
    logOutBtn.addEventListener('click', (e) =>{
        sessionStorage.removeItem('token')
        location.reload()
})
}