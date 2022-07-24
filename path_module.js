const path = require('path');

//path separator
console.log(path.sep);
//path join
const filePath = path.join('/contents/','subfolder', 'text.txt');
console.log(filePath);
//getting the absolute path
const absolutePath = path.resolve(__dirname, 'contents','subfolder', 'test.txt');
console.log(absolutePath);
const base = path.basename(absolutePath);
console.log(base);