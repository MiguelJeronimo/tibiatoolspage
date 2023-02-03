/*Donde se pintara la data*/
let about_data = document.getElementById("about-data")
let caracteristicas_data = document.getElementById("caracteristicas-data")
let titulo = document.getElementById('titulo')
let tituloContacto = document.getElementById('titulo-contacto')
let contacto_data = document.getElementById('contacto-data')
/*Donde se activaran los eventos*/
let home = document.getElementById("home")
let caracteristicas = document.getElementById("caracteristicas")
let contacto = document.getElementById('contacto')
let body = document.querySelector('body');
/**
 * constante para iterar la data de las tarjetas
 */
const bottonCarrucelSlideSize = 11
window.onload = ()=>{
    Home()
    botonCarrucelSlide(bottonCarrucelSlideSize)
    _ImgCarrucelContainer(bottonCarrucelSlideSize)
}

/*EVENTOS*/
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

 /**
  * Aparece la data del home
  */
 function Home() {
    home.classList.add('active')
    caracteristicas.classList.remove('active')
    contacto.classList.remove('active')
    about_data.classList.remove('ocultar')
    about_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    setTimeout(()=>{
    titulo.classList.add('animate__animated','animate__bounce')
    },3000)
    about_data.classList.add('animate__bounce','animate__delay-2s')
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
    home.classList.remove('active')
    caracteristicas.classList.add('active')
    contacto.classList.remove('active')
    caracteristicas_data.classList.remove('ocultar')
    caracteristicas_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
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
    home.classList.remove('active')
    caracteristicas.classList.remove('active')
    contacto_data.classList.remove('ocultar')
    contacto_data.classList.add('animate__animated','animate__fadeIn','animate__delay-1s')
    caracteristicas_data.classList.add('ocultar')
    caracteristicas_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
    about_data.classList.add('ocultar')
    about_data.classList.remove('animate__animated','animate__fadeIn','animate__delay-1s')
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

/**
 * Esta función imprime la data del la descripción del carrucel con las imagenes dinamicamente
 * @param {*} bottonCarrucelSlideSize -> numero de botones del slide 
 */
function _ImgCarrucelContainer(bottonCarrucelSlideSize) {
    let containerImg = document.getElementById('container-img')
    const arrayTitles = ['Inicio','Menu','Blessings','Jugadores',
                          'Guilds','Higscores','House','Experiencia Compartida',
                          'Stamina','Mundos','Criaturas','Spells']
    const arrayDescription = ['Ubicación de rashid, noticias, boses del día',
                              'Contamos con varias funcionalidades',
                              'Calcula el costo de tus bless :)',
                              'Revisa el avance de tus jugadores favoritos',
                              'Busca tu guild',
                              'Ver a los mas tops',
                              'Verifica el costo de las casas',
                              'Calcula el rango de nivel con los que puedes charear :)',
                              'Revisa cuanto tiempo tarda en recargar tu estamina :)',
                              'Información de los mundos ',
                              'Ve las criaturas y su información',
                              'Consulta las spells de Tibia :)'

                        ]
    const active = true
    const incative = false
    containerImg.appendChild(CarrucelItems(0,active,arrayTitles[0],arrayDescription[0]))
    for (let index = 1; index < bottonCarrucelSlideSize; index++) {
        containerImg.appendChild(CarrucelItems(index+1,incative,arrayTitles[index+1], arrayDescription[index+1]))
    }
    
}

/**
 * 
 * @param {*} bottonCarrucelSlideSize -> numero de botones del slide
 * @param {*} active -> parametro booleano para determinar si una etiqueta es activa o no
 * @param {*} tittle -> Titulo de la tarjeta
 * @param {*} description -> Descripción de la tarjeta
 * @returns carrucelItem -> Elemento html que contiene la info de la tarjeta
 */
function CarrucelItems(bottonCarrucelSlideSize,active,tittle, description) {
    //Items container Carrucel
    let carrucelItem = document.createElement('div')
    if (active) {
        carrucelItem.classList.add('carousel-item','active')
    }
    carrucelItem.classList.add('carousel-item')
    carrucelItem.setAttribute('data-bs-interval','10000')
    //carrucelItem.className='active'
    carrucelItem.appendChild(imgCarrucel(bottonCarrucelSlideSize))
    carrucelItem.appendChild(DescriptionImageCarrucel(tittle,description))
    return carrucelItem
}

/**
 * 
 * @param {*} bottonCarrucelSlideSize -> numero de botones del slide
 * @returns imgApp -> Elemento imagen ya con la imagen puesta
 */
function imgCarrucel(bottonCarrucelSlideSize) {
    //Image of the carrucel
    let imgApp = document.createElement('img')
    imgApp.height = 500
    imgApp.width = 230
    imgApp.src =`img/${bottonCarrucelSlideSize}.png`
    imgApp.classList.add('d-block','imagenes-carroucel')
    return imgApp
}

/**
 * 
 * @param {*} title -> Titulo de la tarjeta 
 * @param {*} description -> Descripción de la tarjeta
 * @returns carrucelCaption -> Division que contiene el titulo y descripción de la tarjeta
 */
function DescriptionImageCarrucel(title, description) {
      //Div of the information image carrucel
      let carrucelCaption = document.createElement('div')
      carrucelCaption.classList.add('carousel-caption','d-none','d-md-block')
      let tituloImage = document.createElement('h1')
      tituloImage.innerText= title
      tituloImage.classList.add('letras')
      let descriptionImage = document.createElement('h5')
      descriptionImage.innerHTML= description
      descriptionImage.classList.add('letras-descripcion')
      carrucelCaption.appendChild(tituloImage)
      carrucelCaption.appendChild(descriptionImage)
      return carrucelCaption
}


