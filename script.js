let area = 0
let circum = 0
let diam = 0
let rad = 0
let piee = 0
// Set variables, piee stands for pi as I decided to change its value inside the function

document.getElementById('button').addEventListener('click', equa)

function equa () {
  diam = document.getElementById('input').value
  diam = parseInt(diam)

  if (diam > 0) {
    rad = diam / 2
    piee = Math.PI

    // Circumference of the Circle
    circum = diam * piee
    circum = circum.toFixed(2)

    // Area of the Circle
    area = piee * Math.pow(rad, 2)
    area = area.toFixed(2)

    document.getElementById('hArea').innerHTML = '<p>' + 'Area of the Circle = ' + area + '</p>'
    document.getElementById('hCircum').innerHTML = '<p>' + 'Circumference of the Circle = ' + circum + '</p>'
  } else if (diam <= 0) {
    document.getElementById('hArea').innerHTML = 'NaN: Error, please input a valid positive integer'
    document.getElementById('hCircum').innerHTML = 'NaN: Error, please input a valid positive integer'
  }
}
