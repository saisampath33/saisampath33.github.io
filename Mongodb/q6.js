//Indexes helps MongoDB quickly find documents without scanning the whole collection.
db.employees.getIndexes()
// returns the indexes of the collection
//output will be like this
// [{ v: 2, key: { _id: 1 }, name: '_id_' }]
//_id is the default index created by MongoDB on _id field

db.employees.createIndex({email:1}) //creates index on email field

db.employees.dropIndex("email_1") //drops index on email field

db.employees.find({email:"amy@gmail.com"}).explain("executionStats") //returns the execution stats of the query

db.employees.createIndex({email:1})