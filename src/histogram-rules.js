module.exports = [
  {
    condition: (executionTime) => executionTime < 1000,
    description: "0-1s",
  },
  {
    condition: (executionTime) => executionTime >= 1000 && executionTime < 2000,
    description: "1-2s",
  },
  {
    condition: (executionTime) => executionTime >= 2000 && executionTime < 3000,
    description: "2-3s",
  },
  {
    condition: (executionTime) => executionTime >= 3000 && executionTime < 4000,
    description: "3-4s",
  },
  {
    condition: (executionTime) => executionTime >= 4000 && executionTime < 5000,
    description: "4-5s",
  },
];
