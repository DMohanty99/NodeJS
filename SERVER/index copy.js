const http = require("http");
const fs =require("fs");
const url=require("url");

const myServer = http.createServer((req,res)=>{
 console.log("req recieved",req.headers);
 const myUrl=url.parse(req.url,true);
    
 fs.appendFile('log.txt',`${Date.now()}:${req.url}:new date recieved \n`,(err,data)=>{
    switch(myUrl.pathname){
        case "/":
            res.end("home page"); 
            break;
        case "/about":

            res.end("I am"+`${myUrl.query.myname}`);
            break;
        case "/signup":
            if(req.method==="GET"){
                res.end("form to be filled up");
            }
            else if(req.method==="POST"){
                //db put
                res.end("success");
            } 
            break;
        default:
            res.end("404: Not Found");
    }
    
 })
 
})

myServer.listen(8000,()=>console.log("server started"));