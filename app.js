const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    res.end("Hello from my backend");

    if(req.method === "GET" && req.url === "/"){
        res.end("Welcome to URL shortener");
    }
    else if(req.method === "POST" && req.url === "/shorten"){
        res.end("Create short url");
    }
    else{
        res.end("ROute not found");
    }
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});