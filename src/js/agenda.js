const superRef = document.getElementById('superRef')
const superBarber = document.getElementById('superBarber')
const superHorario = document.getElementById('superHorario')
const superDate = document.getElementById('superDate')
let input = document.getElementById("superDate").min = new Date().toISOString().slice(0, 10);
const url = 'http://localhost:3000/agenda';

/* SESION */

if("token" in sessionStorage == false){
    alert('NECESITAS INICIAR SESION')
    window.location = '/src/index.html'
}

const logout = document.getElementById('logOutBtn')

logOutBtn.addEventListener('click', (e) =>{
    sessionStorage.removeItem('token')
    window.location = "/src/index.html"
})

/* CAMPOS VACIOS */ 

const superArray = [superRef,superBarber,superHorario,superDate]
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
    if (valArray[0] == true && valArray[1] == true && valArray[2] == true && valArray[3] == true){
        return true
    }
    else{
        return false 
    }
}

/* LENGTH MINIMO */

function valMin(minElement,minLarge){
    var lenghtElement = minElement.value
    if(lenghtElement.length < minLarge){
        return false
    }
    else{
        return true
    }
}

/* SOLO NUMEROS */

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


/* Mashup */

function allMashup(){
    var fullVal=[fullForm(superArray),valMin(superRef,20)]
    console.log(fullVal)
    if(fullVal[0] == true && fullVal[1] == true){
        var pred = sessionStorage.getItem('token')
        const newReg ={
            "id":"5000",
            "reserv":pred,
            "barber":superBarber.value,
            "pago":superRef.value,
            "fecha":superDate.value,
            "hour":superHorario.value
        }
        const url2 = `http://localhost:3000/agenda?barber=${superBarber.value}&fecha=${superDate.value}&hour=${superHorario.value}`;
        fetch (url2)
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
                console.log(data)
                if(data.length == 1){
                    alert('Ya hay una cita programada')
                }
                else{
                    fetch(url, {
                        method: 'POST',
                        headers: {
                           'Content-Type': 'application/json',
                        },
                    body: JSON.stringify(newReg)
                    
                    })
                    .then(response => response.json())
                    alert('Información de cita guardada, por favor espere la confirmación a través de los medios establecidos')
               
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
        alert(`Error de validación, revise los campos de nuevo. Recuerde:
            - Todos los campos deben estar llenos
            - La referencia del pago cuenta con 20 números`)
    }
}
/* AGENDA MODAL */
const agenda = document.getElementById("agendaModalBtn")
const closeLoginagendaModal = document.getElementById("closeLoginagendaModal")
const agendaModal = document.getElementById("agendaModal")
console.log (agenda)
agenda.addEventListener('click',(e)=>{
    e.preventDefault();
    agendaModal.classList.add("agendaModal--show")
}   
)
closeLoginagendaModal.addEventListener('click',(e)=>{
    e.preventDefault();
    agendaModal.classList.remove("agendaModal--show")
}   
)