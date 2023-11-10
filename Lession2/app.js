const express = require('express');
const app = express();
const userRouteTest = require('./routes/userRoute')

app.use(userRouteTest) ; 

app.get("/about" ,  (req, res)=>{
    res.send("Its a about page ")

})
app.get("/",(req, res)=>{
    res.send("Its a home page ")

})

app.use((req,res)=>{
    res.send("<h3>Wrogng 404</h3>")
})







app.post("/post",(req, res)=>{
    res.send("Its a post page ")

})
app.put("/put",(req, res)=>{
    res.send("Its a put page ")

})
app.delete("/delete",(req, res)=>{
    res.send("Its a delete page ")

})
module.exports=app;