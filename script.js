function start() {
  let colour = document.getElementById('co').value
  let text = document.getElementById('text')
  let speed = document.getElementById('speed').value
  text.innerHTML = document.getElementById('in').value
  text.style.color = colour
  document.getElementById('mar').scrollAmount = speed
}