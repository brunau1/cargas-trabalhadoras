const {
	calcAverage,
	calcStandardDeviation,
	calcVariationCoefficient,
	round,
} = require('../math-handler/math-handler');

function generateHistogramObject() {
	return {
		columns: [],
	};
}

function formatHistogramObjectToShowDataTable(histogram, totalInputData) {
	const dataTable = {};
	for (const column of histogram.columns) {
		dataTable[column.label] = {
			average: column.average,
			standardDeviation: column.standardDeviation,
			variationCoefficient: column.variationCoefficient,
			frequency: column.values.length,
			percentage: round(column.values.length / totalInputData, 5),
		};
	}
	return dataTable;
}

function defineHistogramColumnRules(histogram, rules) {
	for (const rule of rules) {
		histogram.columns.push({
			condition: rule.condition,
			label: rule.label,
			average: 0,
			standardDeviation: 0,
			variationCoefficient: 0,
			values: [],
		});
	}
}

function distributeDataIntoColumns(histogram, executionTimes) {
	for (const executionTime of executionTimes) {
		for (const column of histogram.columns) {
			if (column.condition(executionTime)) {
				column.values.push(executionTime);
				break;
			}
		}
	}
}

function calcWorkLoadModelForEachColumn(histogram) {
	for (const column of histogram.columns) {
		column.average = calcAverage(column.values);
		column.standardDeviation = calcStandardDeviation(column.values);
		column.variationCoefficient = calcVariationCoefficient(column.values);
	}
}

function generateHistogram(inputData, rules) {
	const histogram = generateHistogramObject();
	defineHistogramColumnRules(histogram, rules);
	distributeDataIntoColumns(histogram, inputData);
	calcWorkLoadModelForEachColumn(histogram);
	const dataTable = formatHistogramObjectToShowDataTable(
		histogram,
		inputData.length
	);
	return dataTable;
}

module.exports = {
	generateHistogram,
};
