let area = 0
let circum = 0
let diam = 0
let rad = 0
let piee = 0
// Set variables, piee stands for pi as I decided to change its value inside the function

document.getElementById('button').addEventListener('click', equa)
// Event Listener that runs the equation function when the button is clicked

// Function where the equation is done.
function equa () {
  diam = document.getElementById('input').value
  diam = parseInt(diam)

  // If statement that controls whats gets displayed. If the value of the inputed diameter is positive then it continues normaly and displays the answer. If the diameter is 0 or a negative number, then the program switchs to displaying an error message and asks the user to input a positive value.
  if (diam > 0) {
    rad = diam / 2
    piee = Math.PI

    // Equation for the circumference of the circle, rounded to 2 decimal places
    circum = diam * piee
    circum = circum.toFixed(2)

    // Equation for the area of the aircle, rounded to 2 decimal places
    area = piee * Math.pow(rad, 2)
    area = area.toFixed(2)

    // Answer display's by accessing the headers on top of the images
    document.getElementById('harea').innerHTML = '<p>' + 'Area of the Circle = ' + area + '</p>'
    document.getElementById('hcircum').innerHTML = '<p>' + 'Circumference of the Circle = ' + circum + '</p>'
    // Eror message display
  } else if (diam <= 0) {
    document.getElementById('harea').innerHTML = 'NaN: Error, please input a valid positive integer'
    document.getElementById('hcircum').innerHTML = 'NaN: Error, please input a valid positive integer'
  }
}
