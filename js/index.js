/*Donde se pintara la data*/
let aviso_data = document.getElementById("aviso-privacidad-data")
let about_data = document.getElementById("about-data")
let caracteristicas_data = document.getElementById("caracteristicas-data")
let titulo = document.getElementById('titulo')
/*Donde se activaran los eventos*/
let aviso = document.getElementById("aviso")
let home = document.getElementById("home")
let caracteristicas = document.getElementById("caracteristicas")
let body = document.querySelector('body');
body.onload = ()=>{
    Home()
}
/*EVENTOS*/
aviso.onclick = (e)=>{
    e.preventDefault()
    AvisoPrivacidad()
}

home.onclick = (e)=>{
    e.preventDefault()
    Home()
}

caracteristicas.onclick = (e)=>{
    e.preventDefault()
    Caracteristicas()
}

/**
 * Aparecer data en el aviso de privacidad
 */
function AvisoPrivacidad() { 
    aviso.classList.add('active')
    home.classList.remove('active')
    caracteristicas.classList.remove('active')
    aviso_data.classList.remove('ocultar');
    aviso_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    caracteristicas_data.classList.add('ocultar')
    caracteristicas_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    titulo.classList.remove('animate__animated','animate__bounce')
 }

 /**
  * Aparece la data del home
  */
 function Home() {
    aviso.classList.remove('active')
    home.classList.add('active')
    caracteristicas.classList.remove('active')
    about_data.classList.remove('ocultar')
    about_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    setTimeout(()=>{
    titulo.classList.add('animate__animated','animate__bounce')
    },3000)
    about_data.classList.add('animate__bounce','animate__delay-2s')
    aviso_data.classList.add('ocultar')
    aviso_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    caracteristicas_data.classList.add('ocultar')
    caracteristicas_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
 }

/**
 * Aparece la data de las caracteristicas
 */
function Caracteristicas() { 
    aviso.classList.remove('active')
    home.classList.remove('active')
    caracteristicas.classList.add('active')
    caracteristicas_data.classList.remove('ocultar')
    caracteristicas_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    aviso_data.classList.add('ocultar')
    aviso_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    titulo.classList.remove('animate__animated','animate__bounce')
 }

 /**
  * Quitar el active del menu
  */
