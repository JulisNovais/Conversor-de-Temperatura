function converter() {
  var temp = document.getElementById("temperatura").value
  var select = document.getElementById("tempType")
  var optionValue = select.options[select.selectedIndex].value
  var convert = 0
  
  if( optionValue == 'f') {
    convert = (9 * temp / 5) + 32
    convert = convert + ' °F'
  } else if(optionValue == 'k') {
    convert = parseFloat(temp) + 273.15 
    convert = convert + ' K'
  } else {
    convert = 'Escolha uma unidade de medida!'
  }
  var result = document.getElementById('resultado')
  result.innerHTML = convert
}

var button = document.getElementById('button');
var temperature = document.getElementById('tempType');

function changeTemp() {
  if (temperature.value === 'f') {
      button.innerHTML = 'Converter para °F';
  } else if (temperature.value === 'k') {
      button.innerHTML = 'Converter para K';
  } 
}

temperature.addEventListener('change', changeTemp);