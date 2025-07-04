import jwt from "jsonwebtoken"
const SECRET = "sometext"
const user = {
    name:"Sampath",
    email:"sampathmay10@gmail.com",
    role:"admin"
}
const token = jwt.sign(user,SECRET,{ expiresIn: "1h" });
console.log(token); //print secret token that was a lock to the message that is user

// const decoded = jwt.verify(token,SECRET)
//this is to unlock with secret key and see the message
// console.log(decoded);