document.getElementById("convertButton").addEventListener("click", function() {
    
    let inputValue = parseFloat(document.getElementById("inputValue").value);
    let unit = document.getElementById("unitSelect").value;

    if (isNaN(inputValue)) {
        alert("Please enter a valid number!");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "C") {
        celsius = inputValue;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = celsius + 273.15;
    } 
    else if (unit === "F") {
        fahrenheit = inputValue;
        celsius = (fahrenheit - 32) * 5/9;
        kelvin = celsius + 273.15;
    } 
    else if (unit === "K") {
        kelvin = inputValue;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
    }

    document.getElementById("celsiusResult").textContent = "Celsius: " + celsius.toFixed(2) + " °C";
    document.getElementById("fahrenheitResult").textContent = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvinResult").textContent = "Kelvin: " + kelvin.toFixed(2) + " K";
});