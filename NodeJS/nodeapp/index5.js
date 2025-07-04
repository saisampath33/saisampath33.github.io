import express from 'express'

const app = express()

const logger = (req,res,next) =>{
    req.message = "Logger";
    next();
};

// app.use(logger); //this line will apply the middleware globally
app.get("/",(req,res)=>{
    res.send(req.message);
})
app.get('/products',logger,(req,res)=>{ //applied logger for only this function
    res.send(req.message);
})

app.listen(8000,()=>{
    console.log("Server Started")
})