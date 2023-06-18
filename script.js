function convert() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var result;
    
    if (fromUnit === toUnit) {
        result = inputValue;
    } else if (fromUnit === "cm" && toUnit === "m") {
        result = inputValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
        result = inputValue / 100000;
    } else if (fromUnit === "cm" && toUnit === "inch") {
        result = inputValue / 2.54;
    } else if (fromUnit === "cm" && toUnit === "ft") {
        result = inputValue / 30.48;
    } else if (fromUnit === "cm" && toUnit === "yd") {
        result = inputValue / 91.44;
    } else if (fromUnit === "cm" && toUnit === "mile") {
        result = inputValue / 160934.4;
    } else if (fromUnit === "m" && toUnit === "cm") {
        result = inputValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
        result = inputValue / 1000;
    } else if (fromUnit === "m" && toUnit === "inch") {
        result = inputValue * 39.37;
    } else if (fromUnit === "m" && toUnit === "ft") {
        result = inputValue * 3.281;
    } else if (fromUnit === "m" && toUnit === "yd") {
        result = inputValue * 1.094;
    } else if (fromUnit === "m" && toUnit === "mile") {
        result = inputValue / 1609.344;
    } else if (fromUnit === "km" && toUnit === "cm") {
        result = inputValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
        result = inputValue * 1000;
    } else if (fromUnit === "km" && toUnit === "inch") {
        result = inputValue * 39370.079;
    } else if (fromUnit === "km" && toUnit === "ft") {
        result = inputValue * 3280.84;
    } else if (fromUnit === "km" && toUnit === "yd") {
        result = inputValue * 1093.613;
    } else if (fromUnit === "km" && toUnit === "mile") {
        result = inputValue / 1.609;
    } else if (fromUnit === "inch" && toUnit === "cm") {
        result = inputValue * 2.54;
    } else if (fromUnit === "inch" && toUnit === "m") {
        result = inputValue * 0.0254;
    } else if (fromUnit === "inch" && toUnit === "km") {
        result = inputValue * 0.0000254;
    } else if (fromUnit === "inch" && toUnit === "ft") {
        result = inputValue / 12;
    } else if (fromUnit === "inch" && toUnit === "yd") {
        result = inputValue / 36;
    } else if (fromUnit === "inch" && toUnit === "mile") {
        result = inputValue / 63360;
    } else if (fromUnit === "ft" && toUnit === "cm") {
        result = inputValue * 30.48;
    } else if (fromUnit === "ft" && toUnit === "m") {
        result = inputValue * 0.3048;
    } else if (fromUnit === "ft" && toUnit === "km") {
        result = inputValue * 0.0003048;
    } else if (fromUnit === "ft" && toUnit === "inch") {
        result = inputValue * 12;
    } else if (fromUnit === "ft" && toUnit === "yd") {
        result = inputValue / 3;
    } else if (fromUnit === "ft" && toUnit === "mile") {
        result = inputValue / 5280;
    } else if (fromUnit === "yd" && toUnit === "cm") {
        result = inputValue * 91.44;
    } else if (fromUnit === "yd" && toUnit === "m") {
        result = inputValue * 0.9144;
    } else if (fromUnit === "yd" && toUnit === "km") {
        result = inputValue * 0.0009144;
    } else if (fromUnit === "yd" && toUnit === "inch") {
        result = inputValue * 36;
    } else if (fromUnit === "yd" && toUnit === "ft") {
        result = inputValue * 3;
    } else if (fromUnit === "yd" && toUnit === "mile") {
        result = inputValue / 1760;
    } else if (fromUnit === "mile" && toUnit === "cm") {
        result = inputValue * 160934.4;
    } else if (fromUnit === "mile" && toUnit === "m") {
        result = inputValue * 1609.344;
    } else if (fromUnit === "mile" && toUnit === "km") {
        result = inputValue * 1.609;
    } else if (fromUnit === "mile" && toUnit === "inch") {
        result = inputValue * 63360;
    } else if (fromUnit === "mile" && toUnit === "ft") {
        result = inputValue * 5280;
    } else if (fromUnit === "mile" && toUnit === "yd") {
        result = inputValue * 1760;
    }
    
    document.getElementById("result").innerHTML = result;
}