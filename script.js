//___________________variables html______________
let tarjetas = document.querySelectorAll('.square')
let span = document.querySelector('#colorDisplay')
let span_mensaje = document.querySelector('#message')
let h1 = document.querySelector('h1')
let boton = document.querySelector('#reset')
//___________________declaracion de variables________________
let colors
let pickedColor; //almacena el texto Rgb(....)
let clickedColor;
let color;
let rgb;
//___________________Iniciar Pagina___________________
generateRandomColors(6)
pickColor()
//___________________
for (let i = 0; i < tarjetas.length; i++) {
  //color = color del array
  color = colors[i]
  tarjetas[i].style['background-color'] = color


  //agregamos el evento a las tarjetas 
  tarjetas[i].addEventListener('click', function () {
    clickedColor = this.style['background-color']

    if (clickedColor == pickedColor) {
      span_mensaje.textContent = 'Correcto!'
      h1.style.color = clickedColor
      changeColors(clickedColor)    
    } else {
      this.style['background-color'] = '#232323'
      span_mensaje.textContent = 'Intentalo Nuevamente :('

    }
  })
}

boton.addEventListener('click',function(){
  generateRandomColors(6)
  pickColor()
  for (let i = 0; i < tarjetas.length; i++) {
    color = colors[i]
    tarjetas[i].style['background-color'] = color    
  }
})




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
function randomColor() {
  let r = Math.floor(Math.random() * 255)
  let g = Math.floor(Math.random() * 255)
  let b = Math.floor(Math.random() * 255)
  rgb = (`rgb(${r}, ${g}, ${b})`)
  return rgb
}

function generateRandomColors(num) {
  arreglo = []
  for (i = 0; i < num; i++) {
    arreglo.push(randomColor())
  }
  colors = arreglo;
  return colors;
}









// tarjetas[0].addEventListener('click', function(){

//   console.log(this.style['background-color'])
// })
