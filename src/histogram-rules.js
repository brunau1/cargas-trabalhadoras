module.exports = [
  {
    condition: (executionTime) => executionTime < 1000,
    label: "0-1000",
  },
  {
    condition: (executionTime) => executionTime >= 1000 && executionTime < 5000,
    label: "1000-5000",
  },
  {
    condition: (executionTime) => executionTime >= 5000 && executionTime < 20000,
    label: "5000-20.000",
  },
  {
    condition: (executionTime) => executionTime >= 20000 && executionTime < 100000,
    label: "20.000-100.000",
  },
  {
    condition: (executionTime) => executionTime >= 100000 && executionTime < 250000,
    label: "100.000-250.000",
  },
];
