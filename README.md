<h3 align="center">Disco Barber Shop</h3>

<p align="center">
Prueba Técnica para Desarrollador Junior: Página de
Citas para Cortes de Cabello  <br>
  <br>
  <br>



## Introducción:
<p>Proyecto realizado a modo de prueba utilizando HTML, CSS, JAVASCRIPT, además del Framework de CCS Tailwind para el diseño y JSON Server para el manejo de datos en la pagina, vale aclarar primero que nada que es el primer proyecto realizado por mi persona cuyo funcionamiento depende totalmente de Javascript, por lo cual, espero les guste.

## Entorno:
Para el fucionamiento ideal de la pagina el equipo ejecutante debe contar con Node.js instalado y funcionando, además de JSON Server para ejecutar el siguiente comando contar de hacer uso de API Rest predeterminada

```bash
 npx json-server db.json   
```
<p>Además requiere de Visual Studio Code con la extensión "Live Server" para su ejecución. Una vez instalada la extensión basta con hacer click derecho sobre "index.html" y seleccionar la opción "Open with Live Server" para entrar a la pagina en perfecto estado.



## Funcionamiento:
<p> Finalmente la pagina es batante intuitiva consiste en un sistema CRUD básico donde el usuario entra en el index de la pagina y puede elegir entre registrarse o inciar sesión con sus datos para acceder a la funcionalidad completa de la pagina, la cual incluye la opción de agendar cita, aquí tenemos un formulario que consiste en un pago previo para apartar una cita para un corte de cabello. El usuario puede elegir su barbero favorito, uno de los horarios de trabajo predeterminados y el día para su cita. En caso de que una cita previa coincida con lo solicitado por el usuario, automaticamente será rechazada y el usuario puede buscar una fecha disponible.

<p>Aunado a esto la pagina cuenta con un apartado de información  sobre la empresa ficticia que representa. Además de que yendo de manera manual a la url "superUser.html", podrá encontrarse con la información de los usuarios y citas programadas utilizando los datos de inicio de sesión

```bash
Usuario:admin
Contraseña:123
```
<p>Varios usuarios de prueba se encuentran ya dentro de la API Rest "db.json".

## Tips:
<p>- No se puede acceder a la vista de "Registro" mientras una sesión está activa
<p>- No se puede acceder a la vista de "Agendar Cita" mientras NO haya un sesión activa
<p>- Toda la pagina es responsive excepto el apartado de administración en "superUser.html"