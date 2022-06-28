//___________________variables html______________
let tarjetas = document.querySelectorAll('.square');
let span = document.querySelector('#colorDisplay');
let span_mensaje = document.querySelector('#message');
let h1 = document.querySelector('h1');
let botonReset = document.querySelector('#reset');
let btnEasy = document.querySelector('#btnEasy');
let btnHard = document.querySelector('#btnHard');
//___________________declaracion de variables________________
let colors
let pickedColor; //almacena el texto Rgb(....)
let clickedColor;
let color;
let rgb;
// let easy= false;
let numberOfSquares = 6

//______________________________________________________________________________________

//Carga Colores y Da enventos a los cuadros
function manejarClicks() {
  for (let i = 0; i < tarjetas.length; i++) {
   


    //agregamos el evento a las tarjetas 
    tarjetas[i].addEventListener('click', function () {
      clickedColor = tarjetas[i].style['background-color']
      


      if (clickedColor == pickedColor) {
        span_mensaje.textContent = 'Correcto! '
        h1.style.color = clickedColor
        changeColors(clickedColor)        
        botonReset.textContent = 'Play Again?'
     
        
        aparecer()        
      } else {
        this.classList.add('fadeOut');
        span_mensaje.textContent = 'Intentalo Nuevamente :( ';   
       
      }
    })
  }
}


//___________________Funciones
function changeColors(color) {
  for (let tarjeta of tarjetas) {
    tarjeta.style['background-color'] = color
  }
}
function pickColor() {
  let posicion = Math.floor(Math.random() * colors.length);
  pickedColor = colors[posicion];
  span.textContent = pickedColor
}
//Crea un color rgb
function randomColor() {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  rgb = (`rgb(${r}, ${g}, ${b})`)
  return rgb
}

//Llenar el arreglo
function generateRandomColors() {
  arreglo = []
  for (i = 0; i < numberOfSquares; i++) {
    arreglo.push(randomColor())
  }
  colors = arreglo;
  return colors;
}

function cargarColores() {
  for (let i = 0; i < tarjetas.length; i++) {
    //color = color del array
    color = colors[i]
    tarjetas[i].style['background-color'] = color
  }
}
function aparecer(){
  for(let k=0;k<tarjetas.length;k++){
    tarjetas[k].classList.remove('fadeOut')
  }
}


//___________________Iniciar Pagina___________________
generateRandomColors()
pickColor()
cargarColores()
manejarClicks()

//_________________________________Evento Click_______________________________________________________
botonReset.addEventListener('click', function () {
  generateRandomColors() // genera nuevos colores
  pickColor() // titulo span 
  cargarColores()

 
  if (botonReset.textContent == 'Play Again?') {
    botonReset.textContent = 'Nuevos Colores'
    manejarClicks()
    span_mensaje.textContent = ''
    h1.style.color = 'white'
  }
})

btnEasy.addEventListener('click', function () {
  btnEasy.classList.add('selected')
  btnHard.classList.remove('selected');
  span_mensaje.textContent = ''
  numberOfSquares = 3
  aparecer()
  generateRandomColors()
  pickColor()
  cargarColores()
 // manejarClicks()
  //ocultar los ultimos 3 cuadrados
  for (let i = 3; i < tarjetas.length; i++) {
    tarjetas[i].style['visibility'] = 'hidden'
  }
})

btnHard.addEventListener('click', function () {
  btnHard.classList.add('selected')
  btnEasy.classList.remove('selected')
  span_mensaje.textContent = ''
  numberOfSquares = 6

  
  generateRandomColors()
  pickColor()
  cargarColores()
  manejarClicks()
  //aparecer()


  for (let i = 3; i < tarjetas.length; i++) {
    tarjetas[i].style['visibility'] = 'visible'
  }
})

