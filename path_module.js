const path = require('path');

console.log(path.sep);

const filePath = path.join('node app','nodejs folder','text.txt');
console.log(filePath);

const absolute = path.resolve(__dirname,'node app','nodejs folder','text.txt');
console.log(absolute);

