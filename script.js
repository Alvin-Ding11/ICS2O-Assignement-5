let area = 0 
let circum = 0 
let diam = 0
let rad = 0
let piee = Math.PI

document.getElementById('button').addEventListener('click', equa)

function equa () {
  diam = document.getElementById('input').value
  diam = parseInt(diam)

  rad = diam / 2
  
  //Circumference of the Circle
  circum = diam * piee
  circum = circum.toFixed(2);

  //Area of the Circle
  area = piee * Math.pow(rad, 2)
  area = area.toFixed(2);

  document.getElementById('areaans').innerHTML = '<p>' + area + '</p>'
  document.getElementById('circumans').innerHTML = '<p>' + circum + '</p>'
}