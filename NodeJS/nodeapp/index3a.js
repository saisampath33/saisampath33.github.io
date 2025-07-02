import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("Good Morning");
})

server.listen(3001,()=>{
    console.log("Server Started");
})

