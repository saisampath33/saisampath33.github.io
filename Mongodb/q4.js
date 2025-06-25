db.employees.find({department:"IT"});
db.employees.find({department:{$eq:"IT"}}) //above command is same as this but used eq as variable
db.employees.find({salary:{$gt:3000}}) //salary greater than 3000
db.employees.find({salary:{$gte:3000}}) //salary greater than or equal to 3000

db.employees.find({salary:{$lt:3000}}) //less than
db.employees.find({salary:{$lte:3000}})//less than equal to
db.employees.find({salary:{$ne:3000}}) //not equal to
db.employees.find({salary:{$gt:3000},department:{$eq:"IT"}},{name:1}).limit(1); //salary greater than 3000 and department is IT and only displays name and after passing all conditions first document is displayed


//display the top 2 highest paid employees
db.employees.find().sort({salary:-1}).limit(2)

db.collection.find({
$and: [
{ salary: { $lt: 3000 } },
{ department: { $eq: "IT" } }
]  //both should be true
})


db.employees.find({
$or: [
{ salary: { $lt: 3000 } }, //either condition should be true 
{ department: "IT" }
]
})
