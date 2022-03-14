let canvas
let context

isDrawing = false
window.onload = () => {
      canvas = document.getElementById("drawingCanvas")
      context = canvas.getContext("2d")
      canvas.onmousedown = startDrawing
      canvas.onmouseup = stopDrawing
      canvas.onmouseout = stopDrawing
      canvas.onmousemove = draw
   }

   function startDrawing(e) {
    isDrawing = true 
    context.beginPath()
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop)
  }
const draw =(e) => {
if (isDrawing == true)
{

var x = e.pageX - canvas.offsetLeft
var y = e.pageY - canvas.offsetTop

context.lineWidth = 14
context.lineTo(x, y)
context.stroke()
}
}
function stopDrawing() {
    isDrawing = false	
}
function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height)
}
let createMass = []
const randomMass = () => {
  for (let i = 0; i < 10000; i++) {
    createMass.push(Math.random() * 0.6 - 0.3)
     }
     console.log(createMass)
     return createMass
    }
  
const saveCanvas = () => {
  const img = context.getImageData(0, 0, 100, 100)
  const pixArray = img.data
  const array = Array.from(pixArray)
  let pixel = []
  for (let i = 3; i < array.length; i+=4) {
    pixel.push(array[i])
  }
  for (i = 0; i < pixel.length; i++)
    if (pixel[i]>0) {
        pixel[i]=1
       }
       return pixel
      }
const reading = () => { 
  let sum = 0
  let weights = createMass
  let arrayPixel = saveCanvas()
  for (let i = 0; i < weights.length; i++) {
    sum += arrayPixel[i] * weights[i] 
    }
  console.log('это сумма', sum)
  if (sum > 0){
    alert('Это крестик')
  } else{
    alert('Это нолик')
  }
}
 const errorKrest = () => {
  this.errorMass = 1
  return errorMass
};
const errorNull = () => {
  this.errorMass = -1
  return errorMass
}
let weights = randomMass()
let speedLearn = 0.7
let sum = 0
let arrayResult = []
const resultMass = () => {
    let arrayPixel = saveCanvas()
    for (let i = 0; i < arrayPixel.length; i++) {
    arrayResult[i] = Number(weights[i] + arrayPixel[i] * speedLearn * this.errorMass) 
    }
    return arrayResult
  } 
  
  const compil = () => { 
    console.log(arrayResult)
  let pixelM = saveCanvas()
  console.log(pixelM)
  let sum = 0
  for (let i = 0; i < pixelM.length; i++) {
    sum = pixelM[i] * arrayResult[i]
    }
  console.log('это сумма', sum)
  if (sum > 0){
    alert('Это крестик')
  } else{
    alert('Это нолик')
  }
}
