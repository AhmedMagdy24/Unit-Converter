const inputNumber = document.getElementById("inputNumber")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
//const button = document.getElementById("buttonCalc")
//console.log(mass)
//button.addEventListener("click", function () {
//    console.log(inputNumber.nodeValue)
//})

//add Default Value to number input field on inital view
inputNumber.value = "0";
unitConversion();

//listen for changes in input field by user
inputNumber.addEventListener("input", unitConversion)
function unitConversion() {
    //Length Unit Conversion 
    let footCalc = parseFloat((inputNumber.value * 3.28084).toFixed(3))
    let meterCalc = parseFloat((inputNumber.value * 0.3048).toFixed(3))
    //Volume Unit Conversion
    let gallonCalc = parseFloat((inputNumber.value * 0.2641720524).toFixed(3))
    let literCalc = parseFloat((inputNumber.value * 3.785411784).toFixed(3))
    //Mass Unit Conversion
    let poundCalc = parseFloat((inputNumber.value * 2.2046226218).toFixed(3))
    let kiloCalc = parseFloat((inputNumber.value * 0.45359237).toFixed(3))
    
    //add numbers to text
    //length
    length.innerText = `${inputNumber.value} meter = ${footCalc} feet | ${inputNumber.value} feet = ${meterCalc} meter`;
    //volume
    volume.innerText = `${inputNumber.value} liter = ${gallonCalc} gallon | ${inputNumber.value} gallon = ${literCalc} liter`;
    //mass
    mass.innerText = `${inputNumber.value} kilogram = ${poundCalc} pound | ${inputNumber.value} pound = ${kiloCalc} kilogram`;
    
    
}