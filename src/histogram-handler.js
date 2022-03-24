function generateHistogramObject() {
  return {
    columns: [],
  };
}

function formatHistogramObjectToShowDataTable(histogram) {}

function defineHistogramColumnRules(histogram, rules) {
  for (const rule of rules) {
    histogram.columns.push({
      condition: rule.condition,
      description: rule.description,
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

function generateHistogram(executionTimes) {
  const histogram = generateHistogramObject();
  const rules = require("./histogram-rules");
  defineHistogramColumnRules(rules);
  distributeDataIntoColumns(executionTimes);
  return histogram;
}

module.exports = {
  generateHistogramObject,
  defineHistogramColumnRules,
  distributeDataIntoColumns,
};
