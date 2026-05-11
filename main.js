const inputBox = document.getElementById("inputbox");
const inputUnit = document.getElementById("inputunit");
const outputUnit = document.getElementById("outputunit");
let outputTemp = document.getElementById("outputTemp");

function convert() {
  let inputTemp = parseFloat(inputBox.value);
  if (isNaN(inputTemp)) {
    alert("Please enter a valid number to convert.");
    return;
  }
  if (inputUnit.value === outputUnit.value) {
    outputTemp.textContent = inputTemp + " degrees " + outputUnit.value;
  } else if (inputUnit.value == "celsius" && outputUnit.value == "fahrenheit") {
    outputTemp.textContent =
      (inputTemp * 1.8 + 32).toFixed(1) + " degrees " + outputUnit.value;
  } else if (inputUnit.value == "celsius" && outputUnit.value == "kelvin") {
    outputTemp.textContent =
      (inputTemp + 273.15).toFixed(1) + " degrees " + outputUnit.value;
  } else if (inputUnit.value == "fahrenheit" && outputUnit.value == "celsius") {
    outputTemp.textContent =
      ((inputTemp - 32) / 1.8).toFixed(1) + " degrees " + outputUnit.value;
  } else if (inputUnit.value == "fahrenheit" && outputUnit.value == "kelvin") {
    outputTemp.textContent =
      ((inputTemp - 32) / 1.8 + 273.15).toFixed(1) +
      " degrees " +
      outputUnit.value;
  } else if (inputUnit.value == "kelvin" && outputUnit.value == "celsius") {
    outputTemp.textContent =
      (inputTemp - 273.15).toFixed(1) + " degrees " + outputUnit.value;
  } else if (inputUnit.value == "kelvin" && outputUnit.value == "fahrenheit") {
    outputTemp.textContent =
      ((inputTemp - 273.15) * 1.8 + 32).toFixed(1) +
      " degrees " +
      outputUnit.value;
  }
}
