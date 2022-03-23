const Fs = require("fs");
const Path = require("path");

module.exports = {
  transformInputDataToIterableObject: () => {
    const filename = Path.resolve(
      __dirname,
      "../public/logSupercomputador.txt"
    );
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
    };
    let cont = 0; // contador para limitar o tamanho da base de dados
    for (const line of splitedStringArray) {
      if (cont < 10) {
        const splitedLine = line.split(";");
        obj.subTime.push(splitedLine[0]);
        obj.numProcs.push(splitedLine[1]);
        obj.exeTime.push(splitedLine[2]);
        cont++;
      } else break;
    }
    const outDir = Path.resolve(__dirname, "../public/", "temp.json");
    Fs.writeFileSync(outDir, JSON.stringify(obj)); //JSON.stringify(obj, null, 2)
    return obj;
  },
};
