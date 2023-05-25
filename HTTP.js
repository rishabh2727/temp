// Http module allows us to set up our server
const http = require('http');
const page = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.end("WELCOME TO OUR HOME PAGE");
    }
    if (req.url === '/about'){
        res.end("Here is our short history");
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href = "/">back home</a>
    `)
})
page.listen(3000);

// The createServer method is called on the http module to create an HTTP server.
//  It takes a callback function that handles incoming requests and generates responses.

// Inside the callback function, the code checks the value of the req.url property to determine the requested URL.
// If the requested URL is '/', it means the user is accessing the home page. In this case,
//  the server sends the response with the message "WELCOME TO OUR HOME PAGE"
//  using the res.end method.

