import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET = "sometext";
const app = express();

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
app.listen(7080, () => {
console.log("Server started");
});
});

//models > userModel

const userSchema = mongoose.Schema(
{
name: { type: String },
email: { type: String, unique: true },
password: { type: String },
role: { type: String },
},
{ timestamps: true }
);
const userModel = mongoose.model("User", userSchema);
const Router = express.Router();
const authenticate = (req, res, next) => {
try {
let token = req.headers.authorization;
token = token.split(" ")[1];
const user = jwt.verify(token, SECRET);
req.role = user.role;
next();
} catch (err) {
console.log(err);
return res.json({ message: "Invalid Token" });
}
};

const authorize = (role) => {
return (req, res, next) => {
if (role === req.role) {
    next();
} else {
    return res.json({ message: "Unauthorized access" });
}
};

};
app.use(express.json());
Router.post("/register", async (req, res) => {
try {
const { name, email, password, role } = req.body;
const hashedpwd = await bcrypt.hash(password, 10);
const user = {
    name,
    email,
    password: hashedpwd,
    role,
};
const result = await userModel.create(user);
res.status(201).json(result);
} catch (err) {
console.log(err);
res.status(400).json({ message: "Something went wrong" });
}
});

Router.patch("/:id",authenticate,authorize("admin"),async (req,res)=>{
    try{
        const id = req.params.id
        const body = req.body;
        // const {role} = req.body; //only role will be updated
        const result = await userModel.findByIdAndUpdate(id,body); //in place of body pass role it can only update role
        res.status(200).json(result);
    }catch(err){
        console.log(err);
        res.status(200).json("something went wrong");
    }

})
Router.delete("/:id",async (req,res)=>{
    try{
        const id = req.params.id;
        const result = await userModel.findByIdAndDelete(id)
        // res.status(200).json(result);
        res.status(200).json("Successfully Deleted");
    }catch(err){
        console.log(err);
        res.status(500).json("Something Went Wrong");
    }
})

Router.get("/users", authenticate, authorize("admin"), async (req, res) => {
try {
const result = await userModel.find();
res.status(200).json(result);
} catch (err) {
console.log(err);
res.status(400).json({ message: "Something went wrong" });
}
});

Router.post("/login", async (req, res) => {
try {
const { email, password } = req.body;
const user = await userModel.findOne({ email });
if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
    const userObj = {
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
    res.status(200).json({ userObj, token });
    } else {
    res.status(400).json({ message: "Invalid password" });
    }
} else {
    res.status(400).json({ message: "User not found" });
}
} catch (err) {
console.log(err);
res.status(400).json({ message: "Something went wrong" });
}
});



app.use("/api", Router);
