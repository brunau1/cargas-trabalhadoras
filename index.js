const {
  transformInputDataToIterableObject,
  generateWorkLoadModelObject,
} = require("./src/data-handler");
const { showGeneratedWorkLoadModel } = require("./src/interface-handler");
const {
  calcAverage,
  calcStandardDeviation,
  calcVariationCoefficient,
} = require("./src/math-handler");

const formatedInputData = transformInputDataToIterableObject();
const workLoadModel = generateWorkLoadModelObject();

// Calculo do modelo de carga de trabalho

// NumProcs
workLoadModel.numProcs.average = calcAverage(formatedInputData.numProcs);
workLoadModel.numProcs.standardDeviation = calcStandardDeviation(
  formatedInputData.numProcs
);
workLoadModel.numProcs.variationCoefficient = calcVariationCoefficient(
  formatedInputData.numProcs
);

// ExeTime
workLoadModel.exeTime.average = calcAverage(formatedInputData.exeTime);
workLoadModel.exeTime.standardDeviation = calcStandardDeviation(
  formatedInputData.exeTime
);
workLoadModel.exeTime.variationCoefficient = calcVariationCoefficient(
  formatedInputData.exeTime
);

// InterArrivalTime
workLoadModel.interArrivalTime.average = calcAverage(
  formatedInputData.interArrivalTime
);
workLoadModel.interArrivalTime.standardDeviation = calcStandardDeviation(
  formatedInputData.interArrivalTime
);
workLoadModel.interArrivalTime.variationCoefficient = calcVariationCoefficient(
  formatedInputData.interArrivalTime
);

showGeneratedWorkLoadModel(workLoadModel);
