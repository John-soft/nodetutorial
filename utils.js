const john = 'John';
const peter = 'Peter';

function sayHi(name){
    if (name === 'John') {
        console.log('My name is John');
    }else{
        console.log('My name is not john');
    }
}


module.exports = {
    john,
    peter,
    sayHi
};