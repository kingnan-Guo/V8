
// 变成局部变量
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
    // console.log("totalM = ", format(totalM) );
    // console.log("freeM = ", format(freeM) );
}
getMemory()




let count = 0;
let size = 20 * 1024 * 1024;
// let useMem = () => {
    
//     let arr = new Array(size);
//     console.log(count);
//     return arr;
// }
function fn(params) {
    let arr1 = new Array(size);
    let arr2 = new Array(size);
    let arr3 = new Array(size);
    let arr4 = new Array(size);
    let arr5 = new Array(size);
}
fn()


let total = []
for (let index = 0; index < 10; index++) {
    getMemory()
    total.push(new Array(size))
}

