import { name } from "ejs";

db.employees.aggregate([
    {$match:{department:"IT"}},{$project:{name:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:2},
])
//sort is sorting acc to salary with limit 2
// This code performs an aggregation on the employees collection, filtering documents where the department is "IT" and projecting only the name and salary fields in the output.
// The $match stage filters the documents, and the $project stage specifies which fields to include in the output.


db.employees.aggregate([
    {$group:{_id:"$department",
        total:{$sum:"$salary"}
    }
},
]);
// This code performs an aggregation on the employees collection, grouping documents by the department field and calculating the total salary for each department.
// The $group stage groups the documents, and the total field is calculated using the $sum operator to sum the salary field for each group.

db.employees.aggregate([
    {
        $project:{ empName:"$name"}
    },
])
// This code performs an aggregation on the employees collection, projecting only the name field and renaming it to empName in the output.

db.employees.aggregate([
    {
        $project:{ 
            _id:0,
            name:1,
            salary:1,
            bonus:{$multiply:["$salary", 2]}
        }
    },
])

// This code performs an aggregation on the employees collection, projecting the name and salary fields, and calculating a bonus field by multiplying the salary by 2.
db.employees.aggregate([
    {
        $project:{ 
            _id:0,
            name:1,
            salary:1,
            bonus:{$multiply:["$salary", 2]},
            location:{$arrayElemAt:["$location", 0]}
        }
    },
])

// This code performs an aggregation on the employees collection, projecting the name and salary fields, calculating a bonus field by multiplying the salary by 2, and extracting the first element from the location array using $arrayElemAt.

//name email and salary of IT department
db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{_id:0,name:1,email:1,salary:1}}
])

//display annual salary of all employees
db.employees.aggregate([
    {$project:{
        _id:0,
        annual:{$multiply:["$salary",12]}
    }}
])

//display whose salary is greater than 3000 and show CTC

db.employees.aggregate([
    {
        $match:{salary:{$gt:3000}}
    },
    {
        $project:{
            CTC:{$sum:"$salary"}
        }
    }
])

db.students.insertMany([
    {name:"Tom",age:21},{name:"Sara",age:24},{name:"Mike",age:21}
])

db.students.aggregate([
    {
        $group: {
            _id: null,
            averageAge: { $avg: "$age" }
        }
    }
])

db.students.updateMany(
    {}, 
    {$addToSet:{courses:"Physics"}}
);

db.students.updateMany(
    {},
    { $inc:{age:1}}
);

db.students.updateMany(
    {},{$pull:{courses:"Physics"}}
)
//joins
db.address.insertMany([
    {
        studentId: ObjectId('685cdd98d9897cb291748a61'),
        city:"Vizag",
        country:"India"
    },{
        studentId: ObjectId('685cdd98d9897cb291748a62'),
        city:"Vijayawada",
        country:"India"
    },{
        studentId: ObjectId('685cdd98d9897cb291748a63'),
        city:"Kerala",
        country:"India"
    }
])

db.students.aggregate([
    {$lookup:{
        from:"address",
        localField:"_id" ,
        foreignField:"studentId",
        as:"address",
    },
},{
        $unwind:"$address"
    },
    {$project: {
        _id:0,
        name:1,
        age:1,
        "address.city":1,
        "address.country":1
    }}
])
//local field od students which is common in addres collcetion
//is _id and foriegn field is studentId in address collection
//as is the name of the field in the output
// $unwind is used to deconstruct the address array field from the input documents to output a document for each element in the array.
// $project is used to specify which fields to include in the output documents, excluding the _id field and including name, age, city, and country from the address field.

db.employees.aggregate([
    {$project: {name:1,location:1}},{$unwind: "$location"}
])

db.students.aggregate([
    { $unwind: "$location" },
    { $project: { name: 1, location: 1 } }
])

