const { transformInputDataToIterableObject } = require("./src/data-handler/data-handler");
const { generateHistogram } = require("./src/histogram-handler/histogram-handler");
const { showGeneratedWorkLoadModel } = require("./src/view-handler/view-handler");
const { generateWorkLoadModel } = require("./src/workload-handler");

const formatedInputData = transformInputDataToIterableObject();
const workLoadModel = generateWorkLoadModel(formatedInputData);
showGeneratedWorkLoadModel(workLoadModel);

const histogram = generateHistogram(formatedInputData.exeTime);
showGeneratedWorkLoadModel(histogram);