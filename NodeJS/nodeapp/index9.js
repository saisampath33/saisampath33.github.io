import bcrypt from 'bcrypt'
const pwd = "pass1234"
// const hashedpwd =  await bcrypt.hash(pwd,10) //10 is the cost factor the high number is the high the security is
//await is to return the promise
// console.log("HashPWD: ",hashedpwd)
const check = await bcrypt.compare(pwd,"$2b$10$6dEYfghnpEqkjXW0wNF9geOWpYW/lXUwKY7YAQDiNCqnEt1JVSGsG");
console.log(check)
//true means pwd and hashedpwd is same

