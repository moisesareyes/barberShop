const superUser = document.getElementById('superUser')
const superName = document.getElementById('superName')
const superTlf = document.getElementById('superTlf')
const superPass = document.getElementById('superPass')
const superPassword = document.getElementById('superPassword') 
const superEmail = document.getElementById('superEmail')
const url = 'http://localhost:3000/users';

if("token" in sessionStorage == true){
    window.location = "/src/index.html"
}

/* CAMPOS VACIOS */ 

const superArray = [superUser,superName,superTlf,superPass,superPassword,superEmail]
function fullForm(maxArray){
    var valArray = [];
    console.log(maxArray)
    for (i = 0; i < maxArray.length; i++){
        console.log(maxArray[i])
        if (maxArray[i].value == ""){
            valArray.push(false)
        }
        else{
            console.log(valArray.value)
            valArray.push(true)
        }
    }
    console.log(valArray)
    if (valArray[0] == true && valArray[1] == true && valArray[2] == true && valArray[3] == true && valArray[4] == true && valArray[5] == true){
        return true
    }
    else{
        return false 
    }
}

/* ELIMINACION DE ESPACIOS */

function espacios(space){
    space.value = space.value.replace(/ /g, '');
}

/* LENGTH MINIMO Y MAXIMO */

function valMin(minElement,minLarge){
    console.log ('se ejecuta')
    var lenghtElement = minElement.value
    if(lenghtElement.length < minLarge){
        return false
    }
    else{
        return true
    }
}

/* SOLO NUMEROS DE TELEFONOS */

function valideKey(evt){
    
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { 
      return true;
    } else if(code>=48 && code<=57) { 
      return true;
    } else{
      return false
    }
}


/* GMAIL */ 

function valEmail(){
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(superEmail.value) ){
		return true
	}
    else{
		return false
	}
}

/* CONTRASEÑAS IGUALES */

function valPass(){
    if(superPass.value == superPassword.value){
        return true
    }
    else{
        return false
    }
}

/* Mashup */

function allMashup(){
    var fullVal=[fullForm(superArray), valEmail(),valPass(),valMin(superUser,5),valMin(superTlf,11),valMin(superPassword,8)]
    console.log(fullVal)
    if(fullVal[0] == true && fullVal[1] == true && fullVal[2] == true && fullVal[3] == true && fullVal[4] == true && fullVal[5] == true){
        const newReg ={
            "id":"5000",
            "username":superUser.value,
            "realname":superName.value,
            "pass":superPass.value,
            "mail":superEmail.value,
            "tlf":superTlf.value
        }
        fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
        body: JSON.stringify(newReg)
        
        })
        .then(response => response.json())
        sessionStorage.setItem("token",superUser.value)
        alert('Registro de usuario exitoso')
        window.location = "/src/index"
    }
    else{
        alert(`Error de validación, revise los campos de nuevo. Recuerde:
            - Todos los campos deben ser rellenados
            - El correo debe tener un formato valido
            - El número de telefono debe tener un formato valido (04241234567)
            - El nombre de usuario debe poseer 5 caracteres o más
            - La contraseña debe poseer 8 caracteres o más
            - Ambas contraseñas deben coincidir
            `)
    }
}

/* REGISTRO MODAL */
const reg = document.getElementById("regiModalBtn")
const closreg = document.getElementById("regiModalClose")
const regiModal = document.getElementById("regiModal")
reg.addEventListener('click',(e)=>{
    e.preventDefault();
    regiModal.classList.add("regiModal--show")
}   
)
closreg.addEventListener('click',(e)=>{
    e.preventDefault();
    regiModal.classList.remove("regiModal--show")
}   
)
