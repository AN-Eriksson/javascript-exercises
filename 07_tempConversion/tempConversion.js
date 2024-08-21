const convertToCelsius = function(inFahrenheit) {
  return Math.round((inFahrenheit - 32) * (5/9) * 10) / 10;
};

const convertToFahrenheit = function(inCelsius) {
  return Math.round((inCelsius * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
