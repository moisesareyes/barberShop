const superUser = document.getElementById('superUser')
const superPass = document.getElementById('superPass')


/* CAMPOS VACIOS */ 

const superArray = [superUser,superPass]
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
    if (valArray[0] == true && valArray[1] == true){
        return true
    }
    else{
        alert('Por favor, rellene todos los campos.');
        return false 
    }
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

/* ELIMINACION DE ESPACIOS */

function espacios(space){
    space.value = space.value.replace(/ /g, '');
}

/* Mashup */

function allMashup(){
    var fullVal=[fullForm(superArray),valMin(superUser,5),valMin(superPass,8)]
    console.log(fullVal)
    if(fullVal[0] == true && fullVal[1] == true && fullVal[2] && true ){
        const url = `http://localhost:3000/users?username=${superUser.value}&pass=${superPass.value}`;
        fetch (url)
        .then(
            response => {
                if(!response.ok){
                    alert('Error al conecntar con Json')
                }
                return response.json()
            }
        )
        .then(
            data => {
                console.log(data[0])
                if(data.length == 0){
                    alert('ERROR DE VALIDAION')
                }
                else{
                    sessionStorage.setItem('token',data[0].username)
                    alert('Sesion iniciada')
                }   
            }

        )
        .catch(
            error => {
            console.error('Error',error);
            }
        );
    }
    else{
        alert('Error de validación, intentelo de nuevo. Recuerda: El usuario debe contar con minimo 5 caracteres, mientras que la contraseña de 8.')
    }
}