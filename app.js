const express = require("express");
const app=express();

app.use(express.text());

app.get("/",(req,res)=>{
    res.send("Welcome to URL shortener");
});

app.post("/shorten",(req,res)=>{
     console.log(req.body);
     res.send("URL received");
});

app.use((req,res)=>{
    res.send("Route not found");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});