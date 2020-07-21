const os = require('os');

function performanceData() {

const cpus = os.cpus();

const osType = os.type() === 'Darwin' ? 'Mac': os.type();

const upTime = os.uptime();

const freeMem = os.freemem();

const totalMem = os.totalmem();

const usedMem = totalMem-freeMem;

const memUsage = Math.floor(usedMem/totalMem*100)/100;



const cpuModel = cpus[0].model;

const numCores = cpus.length;

const cpuSpeed = cpus[0].speed;
const cpuLoad = await getCpuLoad();
}

function cpuAverage() {
    const cpus = os.cpus();

    let idleMs = 0;
    let totalMs = 0;

    cpus.forEach((aCore)=> {
        for(type in aCore.times) {
            totalMs+= aCore.times[type];
        }
        idleMs += aCore.times.idle;
    });


    return {
        idle: idleMs /cpus.length,
        total: totalMs /cpus.length
    }
}
}

function getCpuLoad() {
    return new Promise((resolve, reject)=> {
    const start = cpuAverage();
    console.log("start: ", start);

    setTimeout(()=> {
        const end = cpuAverage();
        console.log("end: ", end);
        const idleDifference = end.idle - start.idle;
        console.log("idleDiff: ",idleDifference);
        const totalDifference = end.total -start.total;
        console.log("totalDiff: ",totalDifference);


        const percentageCpu = 100 - Math.floor(100 * idleDifference/totalDifference);
        console.log(percentageCpu);
        resolve(percentageCpu);
    }, 100);
    })}