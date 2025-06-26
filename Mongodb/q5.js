db.employees.insertMany([
    {
        name:"Amy",
        email:"amy@gmail.com",
        department:"HR",
        salary:2000,
        location:["NY", "TX"],
        date:Date(),
    },{
        name:"Rafeal",
        email:"rafeal@gmail.com",
        department:"Admin",
        salary:1500,
        location:["OH", "TX"],
        date:Date(),
    },
])

db.employees.countDocuments(); //counts how many documents are there in the collection
db.employees.countDocuments({department:"IT"}); //counts how many documents are there in the collection with department IT

db.employees.findOne(); //return a object
db.employees.find(); //returns a array of objects
db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:2000}} //updates salary to 2000
); //updates the first document that matches the condition

//updates all documents that match the condition
db.employees.updateMany(
    {department:"IT"}, 
    {$inc:{points:-1}}
); //adds points field to all documents 
//if points field already exists, it will increment the value by 1
//if points field does not exist, it will add the field with value 1

db.employees.updateMany(
    {}, 
    {$rename:{points:"score"}}
);
//renames points field to score in all documents

db.employees.updateMany(
    {}, 
    {$unset:{score:""}}
);
//removes score field from all documents
db.employees.updateMany(
    {email:"john@gmail.com"}, 
    {$push:{skills:"MERN"}}
);
//adds MERN to skills array all documents with email john@gmail.com
db.employees.updateMany(
    {}, 
    {$push:{skills:"JAVA"}}
);
//adds Java to skills array(creates array) in all documents

db.employees.updateMany(
    {email:"john@gmail.com"}, 
    {$pull:{skills:"MERN"}}
);
//removes MERN from skills array in all documents with email john@

db.employees.updateMany(
    {email:"john@gmail.com"}, 
    {$addToSet:{skills:"MERN"}}
);
//adds MERN to skills array only if it does not exist in the array

db.employees.updateMany(
    {email:"john@gmail.com"}, 
    {$pop:{skills:1}}
);
//removes the last element from skills array in all documents with email john


db.employees.updateMany(
    {email:"john@gmail.com"}, 
    {$pop:{skills:-1}}
);
//removes the first element from skills array in all documents with email john


db.employees.updateOne(
    {email:"brain@gmail.com"}, 
    {$set:{name:"Brain"}},
    {upsert:true}
);
//if document does not exist, it will create a new document with the given data that is upsert true

db.employees.deleteOne({
    email:"brain@gmail.com"
})
//deletes the first document that matches the condition

db.employees.deleteMany(
    {department:"IT"}
)
//deletes all documents that match the condition
