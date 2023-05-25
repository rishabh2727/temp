const http = require('http');

const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end("Welcome baby");
    }
    if (req.url === '/about'){
        res.end("I am the GOAT");
    }
    res.end(`
    <h1>Oops!</h1>
    <p> We cant find to seem the page</p>
    <a href='/'>backhome</a>
    `)
}
)

server.listen(5000);