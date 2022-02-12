const sColor = document.querySelector('input')
let currentColor = 'black'
let canDraw = false
let mouseX = 0
let mouseY = 0

let screen = document.querySelector('canvas')
let ctx = screen.getContext('2d')

window.addEventListener('resize', () => updateWidth())

sColor.onchange = () => currentColor = sColor.value
screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
screen.addEventListener('mouseup', mouseUpEvent)

//Deixa o canvas responsivo
function updateWidth() {
  screen.width = window.innerWidth * 0.9
  screen.height = window.innerHeight * 0.5
}

function mouseDownEvent(e) {
  canDraw = true
  mouseX = e.pageX - screen.offsetLeft
  mouseY = e.pageY - screen.offsetTop
}

function mouseMoveEvent(e) {
  if(canDraw) {
    draw(e.pageX, e.pageY)
  }
}

function mouseUpEvent() {
  canDraw = false
}

function draw(x, y) {
  let pointX = x - screen.offsetLeft
  let pointY = y - screen.offsetTop

  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.lineJoin = "round"
  ctx.moveTo(mouseX, mouseY)
  ctx.lineTo(pointX, pointY)
  ctx.closePath()
  ctx.strokeStyle = currentColor
  ctx.stroke()

  mouseX = pointX
  mouseY = pointY
}

function clearScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

updateWidth()