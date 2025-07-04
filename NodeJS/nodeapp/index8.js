import express from "express";
const app  = express()
app.listen(7080,()=>{
    console.log("Server Started");
});
app.use(express.static("public")); //if it is in index.html it will directly takes the virtual path and opens in <localhost:7080 /
//if file name is not index.html then we should give file name in url localhost7080:/index1.html
//if we kept any image in public folder then we can see image directly

app.use("/images",express.static("images"));
app.get("/products",(req,res)=>{
    res.send("product List");
})