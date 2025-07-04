import express from 'express'
import jwt from "jsonwebtoken"
const SECRET = "some"
const app = express()
app.listen(6000,()=>{
    console.log("Server Started")
});
const users=[{
    email:"john@gmail.com",
    pass:"1234",
    role: "user",
},{
    email:"sai@gmail.com",
    pass:"1234",
    role: "admin",
}];
app.use(express.json());
app.post("/login",async (req,res)=>{
    const { email,pass } = req.body;
    const found = users.find(
        (user) => user.email === email && user.pass === pass
    );
    if(found){
        const token = await jwt.sign(found,SECRET,{expiresIn:'1h'});
        res.status(200).json({ user: found, token });
    }else{
        res.status(403).json({ message: "Access Denied "});
    }
});