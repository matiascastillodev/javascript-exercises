const convertToCelsius = function (fahrenheitTemp) {
  if (typeof fahrenheitTemp == "number") {
    fahrenheitTemp = (fahrenheitTemp - 32) * 5 / 9;
    if (Number.isInteger(fahrenheitTemp)) {
      return parseInt(fahrenheitTemp);
    } else {
      return parseFloat(fahrenheitTemp.toFixed(1));
    }
  } else {
    return "ERROR";
  }
};

convertToCelsius(32);

const convertToFahrenheit = function (celsiusTemp) {
  if (typeof celsiusTemp == "number") {
    celsiusTemp = (celsiusTemp * 9 / 5 + 32);
    if (Number.isInteger(celsiusTemp)) {
      return parseInt(celsiusTemp);
    } else {
      return parseFloat(celsiusTemp.toFixed(1));
    }
  } else {
    return "ERROR";
  }
};

convertToFahrenheit(0);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
