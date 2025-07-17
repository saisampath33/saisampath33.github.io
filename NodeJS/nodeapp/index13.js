import dotenv from "dotenv"
dotenv.config()

const dbuser = encodeURIComponent(process.env.DBUSER)
const dbpass = encodeURIComponent(process.env.DBPASS)
console.log(dbuser,dbpass) //prints admin and admin

console.log(process.env.DBUSER) // Outputs: admin