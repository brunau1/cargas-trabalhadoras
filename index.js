const { transformInputDataToIterableObject } = require("./src/data-handler");
const { generateHistogram } = require("./src/histogram-handler");
const { showGeneratedWorkLoadModel } = require("./src/interface-handler");
const { generateWorkLoadModel } = require("./src/workload-handler");

const formatedInputData = transformInputDataToIterableObject();
const workLoadModel = generateWorkLoadModel(formatedInputData);
showGeneratedWorkLoadModel(workLoadModel);

const histogram = generateHistogram(formatedInputData.exeTime);
showGeneratedWorkLoadModel(histogram);