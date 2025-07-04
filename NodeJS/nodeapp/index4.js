import express from 'express'

const app = express()

app.listen(8000,()=>{
    console.log("Server Started at 8080");
})

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })


//we can set the status codes and send data in json format
// app.get("/products",(req,res)=>{
//     // res.send("Product List")
//     res.status(201).json({
//         id:1,name:"Product 1",price: 25
//     }); 
// })

// app.get("/ab*cd",(req,res)=>{
//     res.send("Hello")
// })


//can we give any other name after 8000/
// app.get("/:name",(req,res)=>{
//     // res.send("Good Morning")
//     res.send(req.params.name); //prints the parameter name given in url
// })

//here we should give only name keyword afte 8000/
// app.get("/name",(req,res)=>{
//     res.send("Good Morning")
// })

// app.get("/name/:name",(req,res)=>{
//     res.send(req.params.name)
// })

//localhost8000:/john/21 => prints john21
// app.get("/:name/:age",(req,res)=>{
//     res.send(req.params.name + req.params.age)
// })

//localhost8000:/name/john/age/21
app.get("/name/:name/age/:age",(req,res)=>{
    res.send(req.params.name + req.params.age)
})

// app.get("/",(req,res)=>{
//     res.send(req.headers.authorization)
// })


//this is a query string 
//localhost:8000/?name=john&age=21
app.post("/",(req,res)=>{
    res.send(req.query.name+req.query.age)
})

// app.post("/",(req,res)=>{
//     res.send("Post Request");
// })

app.delete("/",(req,res)=>{
    res.send("Delete");
})

app.patch("/",(req,res)=>{
    res.send("Path Request");
})
