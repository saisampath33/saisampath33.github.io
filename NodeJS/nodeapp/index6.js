import express from 'express'
const app = express();


app.use(express.json()) //for sending json request 
// app.use(express.text()); //for sending text request

app.listen(2000,()=>{
    console.log("Server Started");
})

//only in post method wwe can data from url
app.post("/",(req,res)=>{
    res.send(req.body);
});