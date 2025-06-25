db.employees.insertOne({
    name:"John Smith",
    email:"john@gmail.com",
    department:"IT",
    salary:1456,
    location:["FL","OH"],
    date: Date()
})

//insert many 
db.employees.insertMany([{
    name:"Mike Joseph",
    email:"mike@gmail.com",
    department:"IT",
    salary:2456,
    location:["FL","TX"],
    date: Date()
},{
    name:"Cathy G",
    email:"cathy@gmail.com",
    department:"IT",
    salary:3456,
    location:["AZ","TX"],
    date: Date()
}])

db.employees.find().skip(1) //- skips 1st object and shows rest all
db.employees.find().limit(1) // - only shows 1st document
db.employees.find().skip(1).limit(1) //- only second document is displayed
db.employees.find().sort({name:1}) //sort the document based on name in ascending order
db.employees.find().sort({name:-1}) //same way but in descending order
db.employees.find().sort({name:1}).limit(1) //sort in name basis and shows only one
db.employees.find({department:"IT"}) //shows every document where department is IT
db.employees.find({},{name:1}) //display only name feild in all documents
db.employees.find({},{_id:0,name:1}) //it will not even displays id only name is displayed
//first bracket is filter and second bracket is projection
//0 is false we can give false too in place of 0 // 0 or 1 is only taken by ID
db.employees.find({},{_id:0,name:1,department:1}) //displays all names and departments
db.employees.find({location:"FL"})
db.employees.find({},{Empname:"$name"}) //it changes name to Empname for display purpose not as perminent change