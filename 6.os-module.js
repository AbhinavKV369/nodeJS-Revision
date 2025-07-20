const os = require("os");

// Current user info

const user = os.userInfo();
console.log(user)

// System uptime
console.log("System uptime is " + os.uptime() +" seconds");

// Current OS
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)