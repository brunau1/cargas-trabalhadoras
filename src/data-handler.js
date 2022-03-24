const Fs = require("fs");
const Path = require("path");

function transformInputDataToIterableObject() {
  const filename = Path.resolve(__dirname, "../public/logSupercomputador.txt");
  const inputString = Fs.readFileSync(filename, "utf8");
  const sanitizedInputString = inputString
    .replace(/\r/g, "")
    .replace(/\t/g, ";");
  const splitedStringArray = sanitizedInputString.split("\n");
  splitedStringArray.shift();
  const obj = {
    subTime: [],
    numProcs: [],
    exeTime: [],
    interArrivalTime: [],
  };
  for (const line of splitedStringArray) {
    if (line.trim()) {
      const splitedLine = line.split(";");
      obj.subTime.push(parseInt(splitedLine[0]));
      obj.numProcs.push(parseInt(splitedLine[1]));
      obj.exeTime.push(parseInt(splitedLine[2]));
    }
  }
  obj.interArrivalTime = calcInterArrivalTime(obj);
  const outDir = Path.resolve(__dirname, "../public/", "temp.json");
  Fs.writeFileSync(outDir, JSON.stringify(obj, null, 2));
  return obj;
}

function generateWorkLoadModelObject() {
  return {
    numProcs: {
      average: 0,
      standardDeviation: 0,
      variationCoefficient: 0,
    },
    exeTime: {
      average: 0,
      standardDeviation: 0,
      variationCoefficient: 0,
    },
    interArrivalTime: {
      average: 0,
      standardDeviation: 0,
      variationCoefficient: 0,
    },
  };
}

function calcInterArrivalTime(obj) {
  const interArrivalTime = [0];

  for (let i = 1; i < obj.subTime.length; i++) {
    const currentTime = obj.subTime[i];
    const previousTime = obj.subTime[i - 1];
    interArrivalTime.push(currentTime - previousTime);
  }
  return interArrivalTime;
}

module.exports = {
  transformInputDataToIterableObject,
  generateWorkLoadModelObject,
};
