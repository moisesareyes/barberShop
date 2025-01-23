const superUser = document.getElementById('superUser')
const superPass = document.getElementById('superPass')
const superLogin1 = document.getElementById("superLogin1")
/* VALIDACION DE SUPER USUARIO */
if ("superUser" in sessionStorage == false){
    superLogin1.classList.add("superLogin1--show")
}   

/* LOGIN DE SUPER USARIO  */

function allMashup(){
    const url2 = `http://localhost:3000/superUser?user=${superUser.value}&pass=${superPass.value}`;
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
            console.log(data[0])
            if(data.length == 0){
                alert('ERROR DE VALIDAION')
            }
            else{
                sessionStorage.setItem('superUser',data[0].user)
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

const url = 'http://localhost:3000/users';

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
        console.log(data)
        const adminUsers = document.getElementById("adminUsers")
        data.forEach(users => {
            const tableTr = document.createElement("tr")
            tableTr.innerHTML=`
            <td class="whitespace-nowrap px-6 py-4 font-medium">${users.id}</td>
            <td class="whitespace-nowrap px-6 py-4">${users.username}</td>
            <td class="whitespace-nowrap px-6 py-4">${users.realname}</td>
            <td class="whitespace-nowrap px-6 py-4">${users.mail}</td>
            <td class="whitespace-nowrap px-6 py-4">${users.tlf}</td>`
            adminUsers.append(tableTr)
        });
        console.log(data)
    }

)
const url2 = 'http://localhost:3000/agenda';

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
        const adminAgenda = document.getElementById("adminAgenda")
        data.forEach(agenda => {
            const tableTr = document.createElement("tr")
            tableTr.innerHTML=`
            <td class="whitespace-nowrap px-6 py-4 font-medium">${agenda.id}</td>
            <td class="whitespace-nowrap px-6 py-4">${agenda.reserv}</td>
            <td class="whitespace-nowrap px-6 py-4">${agenda.barber}</td>
            <td class="whitespace-nowrap px-6 py-4">${agenda.pago}</td>
            <td class="whitespace-nowrap px-6 py-4">${agenda.fecha}</td>
            <td class="whitespace-nowrap px-6 py-4">${agenda.hour}</td>`
            adminAgenda.append(tableTr)
        });
        console.log(data)
    }

)
.catch(
    error => {
      console.error('Error',error);
    }
);
