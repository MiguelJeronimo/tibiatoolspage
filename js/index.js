/*Donde se pintara la data*/
let aviso_data = document.getElementById("aviso-privacidad-data")
let about_data = document.getElementById("about-data")
let caracteristicas_data = document.getElementById("caracteristicas-data")
let titulo = document.getElementById('titulo')
let tituloContacto = document.getElementById('titulo-contacto')
let contacto_data = document.getElementById('contacto-data')
/*Donde se activaran los eventos*/
let aviso = document.getElementById("aviso")
let home = document.getElementById("home")
let caracteristicas = document.getElementById("caracteristicas")
let contacto = document.getElementById('contacto')
let body = document.querySelector('body');
body.onload = ()=>{
    let bottonCarrucelSlideSize = 9
    Home()
    botonCarrucelSlide(bottonCarrucelSlideSize)
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

contacto.onclick = (e)=>{
    e.preventDefault()
    Contacto()
}

/**
 * Aparecer data en el aviso de privacidad
 */
function AvisoPrivacidad() { 
    aviso.classList.add('active')
    home.classList.remove('active')
    caracteristicas.classList.remove('active')
    contacto.classList.remove('active')
    aviso_data.classList.remove('ocultar');
    aviso_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    caracteristicas_data.classList.add('ocultar')
    caracteristicas_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    contacto_data.classList.add('ocultar')
    contacto_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    titulo.classList.remove('animate__animated','animate__bounce')
    tituloContacto.classList.remove('animate__animated','animate__bounce')
 }

 /**
  * Aparece la data del home
  */
 function Home() {
    aviso.classList.remove('active')
    home.classList.add('active')
    caracteristicas.classList.remove('active')
    contacto.classList.remove('active')
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
    contacto_data.classList.add('ocultar')
    contacto_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    tituloContacto.classList.remove('animate__animated','animate__bounce')
 }

/**
 * Aparece la data de las caracteristicas
 */
function Caracteristicas() { 
    aviso.classList.remove('active')
    home.classList.remove('active')
    caracteristicas.classList.add('active')
    contacto.classList.remove('active')
    caracteristicas_data.classList.remove('ocultar')
    caracteristicas_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    aviso_data.classList.add('ocultar')
    aviso_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    contacto_data.classList.add('ocultar')
    contacto_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    titulo.classList.remove('animate__animated','animate__bounce')
    tituloContacto.classList.remove('animate__animated','animate__bounce')
 }

 /**
  * Ver datos de contacto
  */
 function Contacto() {
    contacto.classList.add('active')
    aviso.classList.remove('active')
    home.classList.remove('active')
    aviso.classList.remove('active')
    caracteristicas.classList.remove('active')
    contacto_data.classList.remove('ocultar')
    contacto_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    caracteristicas_data.classList.add('ocultar')
    caracteristicas_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    aviso_data.classList.add('ocultar')
    aviso_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    titulo.classList.remove('animate__animated','animate__bounce')
    setTimeout(()=>{
        tituloContacto.classList.add('animate__animated','animate__bounce')
        },3000)
 }

 /**
  * Crear elementos con propiedades del carroucel
  * @param bottonCarrucelSlideSize -> numero de botones del slide
  */
 function botonCarrucelSlide(bottonCarrucelSlideSize) {
    let buttons_carrucel_slide = document.getElementById('botons_carrucel_slide');
    let button, buttons
    button = document.createElement('button')
    button.type='button'
    button.className = 'active'
    button.setAttribute('data-bs-target','#carouselExampleCaptions')
    button.setAttribute('data-bs-slide-to','0')
    button.setAttribute('aria-current',true)
    button.setAttribute('aria-label','Slide 1')
    buttons_carrucel_slide.appendChild(button)
    for (let i = 1; i <= bottonCarrucelSlideSize; i++) {
        buttons = document.createElement('button')
        buttons.type='button'
        buttons.setAttribute('data-bs-target','#carouselExampleCaptions')
        buttons.setAttribute('data-bs-slide-to',i)
        buttons.setAttribute('aria-current',true)
        buttons.setAttribute('aria-label',`Slide ${i+1}`)
        buttons_carrucel_slide.appendChild(buttons)
    }
 }