// mongodump -d lpua -o S:\lpubackup
//dumping the database lpua to S:\lpubackup

// mongorestore -d lpua S:\lpubackup
//restoring the database lpua from S:\lpubackup

//regex query to find employees with name containing "Cathy"
// This query will return all documents in the employees collection where the name field contains "Cathy
db.employees.find({name:{$regex:"Cathy"}});
//regular expression operator $regex is used to match a string pattern in the name field

db.employees.find({ name: { $regex: "cathy", $options: "i" } });

db.employees.find({ name: { $regex: "^C" } });
//this query will return all documents in the employees collection where the name field starts with "C"

db.employees.find({ name: { $regex: "y$" } });
//this query will return all documents in the employees collection where the name field ends with "y"