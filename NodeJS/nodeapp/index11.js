// import express from 'express'
// import jwt from "jsonwebtoken"
// const SECRET = "something"
// const app = express()
// app.listen(6000,()=>{
//     console.log("Server Started")
// });
// const users=[{
//     email:"john@gmail.com",
//     pass:"1234",
//     role: "user",
// },{
//     email:"sai@gmail.com",
//     pass:"1234",
//     role: "admin",
// }];
// app.use(express.json());

// const authenticate = (req,res,next)=>{
//     try{
//         let token = req.headers.authorization;
//         token = token.split(" ")[1];//return exact token number exclude bearer
//         const user = jwt.verify(token,SECRET)
//         req.role = user.role;
//         next()
//         return res.json(token);
//     }catch(err){
//         return res.status(400).json({ message:"Access Denied"}) 
//     }
//     // return res.json({ message: "Access Denied" })
// }

// const authorize = (role)=>{
//     return(req,res,next)=>{
//         if (req.role == "admin"){
//             next()
//         }else{
//             return res.status(403).json({message: "Unauthorized Access"});
//         }
//     }
// }
// app.post("/login",async (req,res)=>{
//     const { email,pass } = req.body;
//     const found = users.find(
//         (user) => user.email === email && user.pass === pass
//     );
//     if(found){
//         const token = await jwt.sign(found,SECRET,{expiresIn:'1h'});
//         res.status(200).json({ user: found, token });
//     }else{
//         res.status(403).json({ message: "Access Denied "});
//     }
// });

// app.get("/users",authenticate,authorize(admin),(req,res)=>{
//     res.json(users);
// })


import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const SECRET = "secret";
const app = express();
app.listen(7080, () => {
console.log("Server started");
});
let users = [];
app.use(express.json());

const authenticate = (req, res, next) => {
try {
let token = req.headers.authorization;
token = token.split(" ")[1];
const user = jwt.verify(token, SECRET);
req.role = user.role;
next();
} catch (err) {
return res.status(400).json({ message: "Invalid Token" });
}
};

const authorize = (role) => {
return (req, res, next) => {
if (req.role === "admin") {
next();
} else {
return res.status(403).json({ message: "Unauthorized Access" });
}
};
};

// app.post("/login", async (req, res) => {
// const { email, pass } = req.body;
// const existingUser = users.find((user) => user.email === email);
// const matchPass = await bcrypt.compare(pass, existingUser.pass);
// // t takes two arguments: the plain password and the hashed password.
// // It hashes the plain password and checks if it matches the stored hash.
// // Returns true if they match, false otherwise.
// if (matchPass) {
// const token = jwt.sign(found, SECRET, { expiresIn: "1h" });
// res.status(200).json({ user: found, token });
// } else {
// res.status(403).json({ message: "Access Denied" });
// }
// });

app.post("/login", async (req, res) => {
const { email, pass } = req.body;

if (!email || !pass) {
return res.status(400).json({ message: "Email and password are required" });
}

const existingUser = users.find((user) => user.email === email);
if (!existingUser) {
return res.status(403).json({ message: "User not found" });
}

const matchPass = await bcrypt.compare(pass, existingUser.pass);
if (matchPass) {
const token = jwt.sign(existingUser, SECRET, { expiresIn: "1h" });
res.status(200).json({ user: existingUser, token });
} else {
res.status(403).json({ message: "Access Denied" });
}
});


app.post("/register", async (req, res) => {
const { name, email, pass, role } = req.body;
const hashedpwd = await bcrypt.hash(pass, 10);
const user = {
name,
email,
pass: hashedpwd,
role,
};
users.push(user);
res.json(user);
});

app.get("/users", authenticate, authorize("admin"), (req, res) => {
res.json(users);
});