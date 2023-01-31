/*Donde se pintara la data*/
let aviso_data = document.getElementById("aviso-privacidad-data")
let about_data = document.getElementById("about-data")
let caracteristicas_data = document.getElementById("caracteristicas-data")
/*Donde se activaran los eventos*/
let aviso = document.getElementById("aviso")
let home = document.getElementById("home")
let caracteristicas = document.getElementById("caracteristicas")
/*EVENTOS*/
aviso.onclick = function (e) {
    e.preventDefault()
    AvisoPrivacidad(aviso_data,about_data,caracteristicas_data)
}

//Aparecer data en el aviso de privacidad
function AvisoPrivacidad(aviso_privacidad,about_data,caracteristicas_data) { 
    aviso_privacidad.classList.remove('ocultar');
    aviso_privacidad.classList.add('animate__animated','animate__fadeIn','animate__delay-2s')
    about_data.classList.add('ocultar')
    caracteristicas_data.classList.add('ocultar')
 }

 function Home(aviso_privacidad,about_data,caracteristicas_data) {
    about_data.classList.
 }

 