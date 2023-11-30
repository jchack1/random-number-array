const generateRandomOrderArray = require("./generateRandomOrderArray");

//get start time, run function, and get end time
const timeStart = Date.now();

const randomOrderArray = generateRandomOrderArray(10000);

const timeEnd = Date.now();

//log array, time, and memory data
console.log(`randomOrderArray: ${JSON.stringify(randomOrderArray)}`);

const memoryUsed = (process.memoryUsage().heapUsed / (1024 * 1024)).toFixed(2);

console.log("\n");
console.log(`total time: ${timeEnd - timeStart} ms`);
console.log(`approximate memory usage: ${memoryUsed} MB`);
