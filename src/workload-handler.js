const {
  calcAverage,
  calcStandardDeviation,
  calcVariationCoefficient,
} = require("./math-handler/math-handler");

function generateWorkLoadModelObject() {
  return {
    numProcs: {
      average: 0,
      standardDeviation: 0,
      variationCoefficient: 0,
    },
    exeTime: {
      average: 0,
      standardDeviation: 0,
      variationCoefficient: 0,
    },
    interArrivalTime: {
      average: 0,
      standardDeviation: 0,
      variationCoefficient: 0,
    },
  };
}

function generateWorkLoadModel(inputData) {
  const workLoadModel = generateWorkLoadModelObject();
  workLoadModel.numProcs.average = calcAverage(inputData.numProcs);
  workLoadModel.numProcs.standardDeviation = calcStandardDeviation(
    inputData.numProcs
  );
  workLoadModel.numProcs.variationCoefficient = calcVariationCoefficient(
    inputData.numProcs
  );
  workLoadModel.exeTime.average = calcAverage(inputData.exeTime);
  workLoadModel.exeTime.standardDeviation = calcStandardDeviation(
    inputData.exeTime
  );
  workLoadModel.exeTime.variationCoefficient = calcVariationCoefficient(
    inputData.exeTime
  );
  workLoadModel.interArrivalTime.average = calcAverage(
    inputData.interArrivalTime
  );
  workLoadModel.interArrivalTime.standardDeviation = calcStandardDeviation(
    inputData.interArrivalTime
  );
  workLoadModel.interArrivalTime.variationCoefficient =
    calcVariationCoefficient(inputData.interArrivalTime);
  return workLoadModel;
}

module.exports = {
  generateWorkLoadModelObject,
  generateWorkLoadModel,
};
