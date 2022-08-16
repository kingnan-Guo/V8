var os = require("os")

function getMemory() {
    let memory = process.memoryUsage();
    // console.log("memory ==", memory);
    let format = function (bytes) {
        return `${(bytes /1024 / 1024).toFixed(2) }MB`
    }
    console.log("heapTotal = "+ format(memory.heapTotal) + "\nheapUsed=" + format(memory.heapUsed));

    let totalM = os.totalmem
    let freeM = os.freemem
    console.log("totalM = ", format(totalM) );
    console.log("freeM = ", format(freeM) );
}
getMemory()

// Request("V8")
let count = 0;
let size = 20 * 1024 * 1024;
// 全局变量 --max-old-space-size=4096  --max-new-space-size=102400 KB
let useMem = () => {
    
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

