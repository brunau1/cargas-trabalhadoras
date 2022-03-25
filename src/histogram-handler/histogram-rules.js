const executionTimeHistogramRules = [
	{
		condition: (executionTime) => executionTime < 120,
		label: '0-150s',
	},
	{
		condition: (executionTime) => executionTime >= 120 && executionTime < 600,
		label: '150-600s',
	},
	{
		condition: (executionTime) => executionTime >= 600 && executionTime < 3000,
		label: '600-3000s',
	},
	{
		condition: (executionTime) =>
			executionTime >= 3000 && executionTime < 14000,
		label: '3000-14.000s',
	},
	{
		condition: (executionTime) =>
			executionTime >= 14000 && executionTime < 62000,
		label: '14.000-62.000s',
	},
	{
		condition: (executionTime) =>
			executionTime >= 62000 && executionTime < 250000,
		label: '62.000-250.000s',
	},
];

const numProcsHistogramRules = [
	{
		condition: (numProcs) => numProcs === 32,
		label: '32',
	},
	{
		condition: (numProcs) => numProcs === 64,
		label: '64',
	},
	{
		condition: (numProcs) => numProcs === 128,
		label: '128',
	},
	{
		condition: (numProcs) => numProcs === 256,
		label: '256',
	},
	{
		condition: (numProcs) => numProcs === 512,
		label: '512',
	},
];

const interArrivalTimeHistogramRules = [
	{
		condition: (interArrivalTime) => interArrivalTime < 100,
		label: '0-100s',
	},
	{
		condition: (interArrivalTime) =>
			interArrivalTime >= 100 && interArrivalTime < 300,
		label: '100-300s',
	},
	{
		condition: (interArrivalTime) =>
			interArrivalTime >= 300 && interArrivalTime < 1200,
		label: '300-1200s',
	},
	{
		condition: (interArrivalTime) =>
			interArrivalTime >= 1200 && interArrivalTime < 5000,
		label: '1200-5000s',
	},
];

module.exports = {
	executionTimeHistogramRules,
	numProcsHistogramRules,
	interArrivalTimeHistogramRules,
};
