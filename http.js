//Creating server
const { read } = require('fs');
const http = require('http');
const server = http.createServer((req,res)=>{

    console.log(req.url);
    if (req.url === '/') {
        res.end('This is the home page');
    } else if (req.url === '/about') {
        res.end(`
        <h1>Welcome to the about page</h1>
        <p>What would you like to know</p>
        `)
    }else{
        res.end(
            `
            <h1>OOPS!!! Error</h1>
            <p><a href="/">Go to home</a></p>
            `
        )
        
    }
    
});

const port = 5000;
server.listen(port, 'localhost',() =>{
    console.log('Server running on port',port);
})