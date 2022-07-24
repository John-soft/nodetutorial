const fs = require('fs');

//readFileSync
const first = fs.readFileSync('./contents/first.txt','utf-8');
const second = fs.readFileSync('./contents/second.txt','utf-8');
console.log(first, second);

//writeFileSync
const write = fs.writeFileSync('./contents/third.txt', 'This is the third text from inside a module');
console.log(write);

//readFile
const read = fs.readFile('./contents/first.txt', 'utf8',(err, data)=>{
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log(read);