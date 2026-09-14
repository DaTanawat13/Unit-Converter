const resetButton = document.querySelector("#reset");
const input = document.querySelector("#inputValue");
const result = document.querySelector("#Result");
const convert = document.querySelector('#convert');

const fromUnit = document.querySelector('#fromUnit');
const toUnit = document.querySelector('#toUnit');

const centimeters = document.querySelector('#centimeters');
const meters = document.querySelector('#meters');
const kilometers = document.querySelector('#kilometers');
const feet = document.querySelector('#feet');
const veno = document.querySelector('#veno');


convert.addEventListener("click", function () {
  const inputNumber = Number(input.value);

  // Centimeters
  if (fromUnit.value === "centimeters" && toUnit.value === "meters") {
    result.textContent = inputNumber * 0.01;

  } else if (fromUnit.value === "centimeters" && toUnit.value === "kilometers") {
    result.textContent = inputNumber * 0.00001;

  } else if (fromUnit.value === "centimeters" && toUnit.value === "feet") {
    result.textContent = inputNumber * 0.0328084;

  } else if (fromUnit.value === "centimeters" && toUnit.value === "veno") {
    result.textContent = inputNumber / 161;

  // Meters
  } else if (fromUnit.value === "meters" && toUnit.value === "centimeters") {
    result.textContent = inputNumber * 100;

  } else if (fromUnit.value === "meters" && toUnit.value === "kilometers") {
    result.textContent = inputNumber * 0.001;

  } else if (fromUnit.value === "meters" && toUnit.value === "feet") {
    result.textContent = inputNumber * 3.28084;

  } else if (fromUnit.value === "meters" && toUnit.value === "veno") {
    result.textContent = inputNumber / 1.61;

  // Kilometers
  } else if (fromUnit.value === "kilometers" && toUnit.value === "centimeters") {
    result.textContent = inputNumber * 100000;

  } else if (fromUnit.value === "kilometers" && toUnit.value === "meters") {
    result.textContent = inputNumber * 1000;

  } else if (fromUnit.value === "kilometers" && toUnit.value === "feet") {
    result.textContent = inputNumber * 3280.84;

  } else if (fromUnit.value === "kilometers" && toUnit.value === "veno") {
    result.textContent = inputNumber / 0.00161;

  // Feet
  } else if (fromUnit.value === "feet" && toUnit.value === "centimeters") {
    result.textContent = inputNumber * 30.48;

  } else if (fromUnit.value === "feet" && toUnit.value === "meters") {
    result.textContent = inputNumber * 0.3048;

  } else if (fromUnit.value === "feet" && toUnit.value === "kilometers") {
    result.textContent = inputNumber * 0.0003048;

  } else if (fromUnit.value === "feet" && toUnit.value === "veno") {
    result.textContent = inputNumber * 0.18931677;

  // Veno
  } else if (fromUnit.value === "veno" && toUnit.value === "centimeters") {
    result.textContent = inputNumber * 161;

  } else if (fromUnit.value === "veno" && toUnit.value === "meters") {
    result.textContent = inputNumber * 1.61;

  } else if (fromUnit.value === "veno" && toUnit.value === "feet") {
    result.textContent = inputNumber * 5.28215223;

  } else if (fromUnit.value === "veno" && toUnit.value === "kilometers") {
    result.textContent = inputNumber * 0.00161;

  // Same unit, so dizzy bruv
  } else {
    result.textContent = inputNumber;
  }
});

resetButton.addEventListener("click", function () {
  input.value = "";
  result.textContent = "0";
});



