const {
	transformInputDataToIterableObject,
} = require('./src/data-handler/data-handler');
const {
	generateHistogram,
} = require('./src/histogram-handler/histogram-handler');
const {
	executionTimeHistogramRules,
	numProcsHistogramRules,
	interArrivalTimeHistogramRules,
} = require('./src/histogram-handler/histogram-rules');
const {
	showGeneratedWorkLoadModel,
} = require('./src/view-handler/view-handler');
const {
	generateWorkLoadModel,
} = require('./src/workload-handler/workload-handler');

const formatedInputData = transformInputDataToIterableObject();
const workLoadModel = generateWorkLoadModel(formatedInputData);
console.log('Modelo de carga de trabalho:');
showGeneratedWorkLoadModel(workLoadModel);

console.log('Histograma (exeTime):');
const exeTimeHistogram = generateHistogram(
	formatedInputData.exeTime,
	executionTimeHistogramRules
);
showGeneratedWorkLoadModel(exeTimeHistogram);

console.log('Histograma (numProcs):');
const numProcsHistogram = generateHistogram(
	formatedInputData.numProcs,
	numProcsHistogramRules
);
showGeneratedWorkLoadModel(numProcsHistogram);

console.log('Histograma (interArrivalTime):');
const interArrivalTimeHistogram = generateHistogram(
	formatedInputData.exeTime,
	interArrivalTimeHistogramRules
);
showGeneratedWorkLoadModel(interArrivalTimeHistogram);
