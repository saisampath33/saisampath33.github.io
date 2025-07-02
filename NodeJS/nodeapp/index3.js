import http from 'http';

let server = http.createServer((req,res)=>{
    res.end("Request recieved ....");
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});