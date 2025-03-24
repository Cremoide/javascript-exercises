const convertToCelsius = function(fah, cel) {

  cel = (fah - 32) / (9/5)

  if (Number.isInteger(cel) === false) {
    var roundCel = Math.round(cel * 10) / 10
    return roundCel;
  } else {
    return cel;
  }
};

const convertToFahrenheit = function(cel, fah) {

  fah = cel * 9/5 + 32

  if (Number.isInteger(fah) === false) {
    var roundFah = Math.round(fah * 10) / 10
    return roundFah;
  } else {
    return fah;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
