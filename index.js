/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let convertBtn = document.getElementById("convert-btn")

function renderConversion(lengthStr, volumeStr, massStr){
    let lengthOutput = document.getElementById("length-output")
    let volumeOutput = document.getElementById("volume-output")
    let massOutput = document.getElementById("mass-output")

    lengthOutput.textContent = lengthStr
    volumeOutput.textContent = volumeStr
    massOutput.textContent = massStr
}


convertBtn.addEventListener("click", function() {
    let inputValue = document.getElementById("input-field").value

    if (inputValue === "") {
        let lengthStr = "Waiting for input"
        let volumeStr = "Waiting for input"
        let massStr = "Waiting for input"

        renderConversion(lengthStr, volumeStr, massStr)
    } else {
        let valueToMeters = (Number(inputValue) / 3.281).toFixed(3)
        let valueToFeets = (Number(inputValue) * 3.281).toFixed(3)
        let valueToLiters = (Number(inputValue) / 0.264).toFixed(3)
        let valueToGallons = (Number(inputValue) * 0.264).toFixed(3)
        let valueToKilograms = (Number(inputValue) / 2.204).toFixed(3)
        let valueToPounds = (Number(inputValue) * 2.204).toFixed(3)

        let lengthStr = `${inputValue} meters = ${valueToFeets} feet | ${inputValue} feet = ${valueToMeters} meters`
        let volumeStr = `${inputValue} liters = ${valueToGallons} gallons | ${inputValue} gallons = ${valueToLiters} liters`
        let massStr = `${inputValue} kilos = ${valueToPounds} pounds | ${inputValue} pounds = ${valueToKilograms} kilograms`

        renderConversion(lengthStr, volumeStr, massStr)
    }

})
let inputField = document.getElementById("input-field")
inputField.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      convertBtn.click();
    }
  });