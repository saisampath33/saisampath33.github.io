
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