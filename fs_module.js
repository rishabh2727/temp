// reading the contents of the file synchronously without any callback

const {readFileSync,writeFileSync} = require("fs");

const file1 = readFileSync('./nodejs_folder/first.txt', 'utf8')
const file2 = readFileSync('./nodejs_folder/second.txt', 'utf8')

 writeFileSync('./nodejs_folder/result.txt', `Here is the result: ${file1}, ${file2}`);

//  everything happens line by line