module.exports = [
  {
    condition: (executionTime) => executionTime < 120,
    label: "0-150s",
  },
  {
    condition: (executionTime) => executionTime >= 120 && executionTime < 600,
    label: "150-600s",
  },
  {
    condition: (executionTime) => executionTime >= 600 && executionTime < 3000,
    label: "600-3000s",
  },
  {
    condition: (executionTime) => executionTime >= 3000 && executionTime < 14000,
    label: "3000-14.000s",
  },
  {
    condition: (executionTime) => executionTime >= 14000 && executionTime < 62000,
    label: "14.000-62.000s",
  },
  {
    condition: (executionTime) => executionTime >= 62000 && executionTime < 250000,
    label: "62.000-250.000s",
  },
];
