function getMemory() {
    let memory = process.memoryUsage();
    // console.log("memory ==", memory);
    let format = function (bytes) {
        return `${(bytes /1024 / 1024).toFixed(2) }MB`
    }
    console.log("heapTotal: "+ format(memory.heapTotal) + "\nheapUsed" + format(memory.heapUsed));
}
getMemory()

// var os = require("v8")
// console.log("v8",os.getHeapStatistics);
let count = 0;
let useMem = () => {
    let size = 20 * 1024 * 1024;
    let arr = new Array(size);
    console.log(count);
    return arr;
}

let total = []
for (let index = 0; index < 15; index++) {
    getMemory()
    total.push(useMem())
    count = index
}

