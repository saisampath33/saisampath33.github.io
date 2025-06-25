// db.users.insertOne({name:"Sampath",age:21}) - create collection and inserts name and age as one object
// db.users.find() is a MongoDB command that retrieves (finds) all documents (objects/records) from the users collection in the current database.
//users is one collection in lpua database
//db.users.findOne() - find first document listed
//db.users.drop() - deletes whole collection named user

db.users.insertMany([
    {name:"Pavan",age:21},
    {name:"Abhinav",age:25},
]); //we pass array of objects