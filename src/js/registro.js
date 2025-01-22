const superUser = document.getElementById('superUser')
const superName = document.getElementById('superName')
const superTlf = document.getElementById('superTlf')
const superPass = document.getElementById('superPass')
const superPassword = document.getElementById('superPassword') 
const superEmail = document.getElementById('superEmail')

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
    if (valArray[0] == true && valArray[1] == true && valArray[2] == true && valArray[3] == true && valArray[4] == true && valArray[5] == true && valArray[6] == true){
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
    var fullVal=[fullForm(superArray), valEmail(),valPass()]
    console.log(fullVal)
    if(fullVal[0] == true && fullVal[1] == true && fullVal[2] == true){
        console.log('la maldita cabra')
    }
    else{
        console.log('ture')
    }
}