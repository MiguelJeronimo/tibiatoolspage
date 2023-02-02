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
const bottonCarrucelSlideSize = 11
window.onload = ()=>{
    Home()
    botonCarrucelSlide(bottonCarrucelSlideSize)
    _ImgCarrucelContainer(bottonCarrucelSlideSize)
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

 /* Ejemplo del codigo del carrucel
            <div class="carousel-item active">
              <img 
                src=""
                 height="500" width="200" class="d-block imagenes-carroucel" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Experiencia compartida</h5>
                <p>Calcula el rango de nivel con los que puedes charear :)</p>
              </div>
            </div>
*/
function _ImgCarrucelContainer(bottonCarrucelSlideSize) {
    let containerImg = document.getElementById('container-img')
    const active = true
    containerImg.appendChild(CarrucelItems(0,active))
    for (let index = 1; index < bottonCarrucelSlideSize; index++) {
        containerImg.appendChild(CarrucelItems(index+1))
    }
    
}

function CarrucelItems(bottonCarrucelSlideSize,active) {
    //Items container Carrucel
    let carrucelItem = document.createElement('div')
    if (active) {
        carrucelItem.classList.add('carousel-item','active')
    }
    carrucelItem.classList.add('carousel-item')
    //carrucelItem.className='active'
    carrucelItem.appendChild(imgCarrucel(bottonCarrucelSlideSize))
    carrucelItem.appendChild(DescriptionImageCarrucel())
    return carrucelItem
}

function imgCarrucel(bottonCarrucelSlideSize) {
    //Image of the carrucel
    let imgApp = document.createElement('img')
    imgApp.height = 500
    imgApp.width = 230
    imgApp.src =`img/${bottonCarrucelSlideSize}.png`
    imgApp.classList.add('d-block','imagenes-carroucel')
    return imgApp
}

function DescriptionImageCarrucel() {
      //Div of the information image carrucel
      let carrucelCaption = document.createElement('div')
      carrucelCaption.classList.add('carousel-caption','d-none','d-md-block')
      let tituloImage = document.createElement('h5')
      tituloImage.innerText="Experiencia compartida"
      let descriptionImage = document.createElement('p')
      descriptionImage.innerHTML="Calcula el rango de nivel con los que puedes charear :)"
      carrucelCaption.appendChild(tituloImage)
      carrucelCaption.appendChild(descriptionImage)
      return carrucelCaption
}


