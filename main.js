//Getting the DOM for the elements
const inputBox = document.getElementById("inputbox");
const inputUnit = document.getElementById("inputunit");
const outputUnit = document.getElementById("outputunit");
let outputTemp = document.getElementById("outputTemp");

function convert() {
  let inputTemp = parseFloat(inputBox.value); // handles floating point numbers
  // Handles non numeric input
  if (isNaN(inputTemp)) {
    alert("Please enter a valid number to convert.");
    return;
  }
  // If both temperature options are the same
  if (inputUnit.value === outputUnit.value) {
    outputTemp.textContent = inputTemp + "°" + outputUnit.value;
  }

  // Convert celcius to fahrenheit
  else if (inputUnit.value == "celsius" && outputUnit.value == "fahrenheit") {
    outputTemp.textContent =
      (inputTemp * 1.8 + 32).toFixed(1) + "°" + outputUnit.value;
  }

  // Convert celcius to kelvin
  else if (inputUnit.value == "celsius" && outputUnit.value == "kelvin") {
    outputTemp.textContent =
      (inputTemp + 273.15).toFixed(1) + "°" + outputUnit.value;
  }

  // Convert fahrenheit to celsius
  else if (inputUnit.value == "fahrenheit" && outputUnit.value == "celsius") {
    outputTemp.textContent =
      ((inputTemp - 32) / 1.8).toFixed(1) + "°" + outputUnit.value;
  }

  // Convert fahrenheit to kelvin
  else if (inputUnit.value == "fahrenheit" && outputUnit.value == "kelvin") {
    outputTemp.textContent =
      ((inputTemp - 32) / 1.8 + 273.15).toFixed(1) + "°" + outputUnit.value;
  }

  // Convert kelvin to celsius
  else if (inputUnit.value == "kelvin" && outputUnit.value == "celsius") {
    outputTemp.textContent =
      (inputTemp - 273.15).toFixed(1) + " degrees " + outputUnit.value;
  }

  // Convert kelvin to fahrenheit
  else if (inputUnit.value == "kelvin" && outputUnit.value == "fahrenheit") {
    outputTemp.textContent =
      ((inputTemp - 273.15) * 1.8 + 32).toFixed(1) +
      " degrees " +
      outputUnit.value;
  }
}
