// Calcula a media do array de numeros
function calcAverage(array) {
  const sum = array.reduce((acc, currentValue) => acc + currentValue, 0);
  return round(sum / array.length, 5);
}

// Calcula o desvio padrão do conjunto de entrada
function calcStandardDeviation(array) {
  const average = calcAverage(array);
  const sum = array.reduce(
    (acc, currentValue) => acc + Math.pow(currentValue - average, 2),
    0
  );
  return round(Math.sqrt(sum / array.length), 5);
}

// Calcula o coeficiente de variação do conjunto de entrada
function calcVariationCoefficient(array) {
  const average = calcAverage(array);
  const standardDeviation = calcStandardDeviation(array);
  return round(standardDeviation / average, 5);
}

function round(value, decimalPlaces) {
  return parseFloat(value.toFixed(decimalPlaces));
}

module.exports = {
  calcAverage,
  calcStandardDeviation,
  calcVariationCoefficient,
};
