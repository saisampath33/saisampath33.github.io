import { name } from "ejs"

//post 
db.posts.insertOne({_id:"p1",post:"Post1"})
db.posts.insertOne({_id:"p2",post:"Post2"})

//insert a comment to post

db.comments.insertOne({
    _id:"c1",
    pid:"p1",
    comment:"This is a comment1 of post1",
})
db.comments.insertOne({
    _id:"c2",
    pid:"p1",
    comment:"This is a comment2 of post1",
})
db.comments.insertOne({
    _id:"c3",
    pid:"p2",
    comment:"This is a comment1 of post2",
})
db.comments.insertOne({
    _id:"c4",
    pid:"p2",
    comment:"This is a comment2 of post2",
})
db.comments.insertOne({
    _id:"c5",
    pid:"p2",
    comment:"This is a comment3 of post2",
})
//join posts and comments
db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    }},
    {$unwind:"$comments"}
])
//project only post and comment
db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    }},
    {$unwind:"$comments"},
    {$project:{
        _id:0,
        post:1,
        comment:"$comments.comment"
    }}
])
//project only post and comment with condition
db.posts.aggregate([
    {$group:{
        _id:"$post",
        comments:{$push:"$comments"}}},
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    }},
])
db.marks

//changing feild name in projection from department to dept
db.employees.aggregate([{
    $project:{_id:0,name:1,dept:"$department"}
}])

db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            Grade:"gradeA"
        }
    }
]
)

//using $cond operator to create a new field Grade based on salary
// If salary is greater than 2000, Grade is "GradeA", otherwise "GradeB"
db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            Grade:{$cond:[{$gt:["$salary",2000]},"GradeA","GradeB"]}
        }
    }
]
)

//using if-then-else syntax in $cond operator
db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            Grade:{$cond:{if:{$gt:["$salary",2000]},
                then:"Grade A",
                else:"Grade B"}
            },
        },
    },
]);

//add a new feild strsalary in employees
db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            strsalary:"$salary"
        }
    }
])

//store 2500 for all IT department employees and store 1000 to other employees in feild strsalary
db.employees.aggregate([
    {
        $project:{
            _id:0,
            name:1,
            salary:1,
            strsalary:{$cond:{if:{$eq:["$department","IT"]},then:2500,else:1000}}
        }
    }
])

//if we update then permiinant changèin the document

//store 2500 for all IT department employees and store 1000 to other employees in feild strsalary using updateMany
db.employees.updateMany(
    {},
    {
        $set:{
            strsalary:{$cond:{if:{$eq:["$department","IT"]},then:2500,else:1000}}
        }
    }
)

//update strsalary to 2500 for all IT department employees and 1000 for others
db.employees.updateMany(
  { department: 'IT' },
  { $set: { strsalary: 2500 } }
);

db.employees.updateMany(
  { department: { $ne: 'IT' } },
  { $set: { strsalary: 1000 } }
);


db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        department:1,
        Sal:{$convert:{input:"strSalary", to:"int"}}}},
        {$group:{
            _id:"$department",total:{$sum :"$Sal"}}
        }
])


// This code converts the strsalary field to an integer and groups the documents by department, summ
db.employees.aggregate([
{
$project: {
    _id: 0,
    name: 1,
    department: 1,
    Sal: {
    $convert: { input: "$strsalary", to: "int", onError: 0, onNull: 0 }
    }
}
},
{
$group: {
    _id: "$department", // Grouping by department with _id as department name 
    total: { $sum: "$Sal" }
}
},
{$out:"depWiseSalary"}
]);

db.depWiseSalary.find()

db.createView("depWiseSalaryView","employees")