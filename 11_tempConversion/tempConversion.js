const convertToCelsius = function(temp) {
  const toCelsiusFormula = (temp - 32) * 5/9;
  let result = Math.round(toCelsiusFormula * 10) / 10;
  return result;
};

const convertToFahrenheit = function(temp) {
  const toFarenheitFormula = (temp * 9/5) + 32;
  let result = Math.round(toFarenheitFormula * 10) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
