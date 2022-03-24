const { transformInputDataToIterableObject } = require("./src/data-handler");
const { showGeneratedWorkLoadModel } = require("./src/interface-handler");
const { generateWorkLoadModel } = require("./src/workload-handler");

const formatedInputData = transformInputDataToIterableObject();
const workLoadModel = generateWorkLoadModel(formatedInputData);
showGeneratedWorkLoadModel(workLoadModel);
