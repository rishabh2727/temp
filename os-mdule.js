const os = require('os');
const { relative } = require('path');
const { release } = require('process');
const user = os.userInfo()
console.log(user);

console.log(`The system uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmemory: os.totalmem(),
    freememory: os.freemem(),
}
console.log(currentOS);
