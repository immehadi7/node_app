const express = require('express');
const app = express();
const userRouteTest = require('./routes/userRoute')
const adminRouteTest = require('./routes/useAdmin')
const teacherRouteTest = require('./routes/useTeacher')

app.use("/api/user/", userRouteTest ) ;  //user route ke call kore ansi thats it 
app.use("/api/user/" , adminRouteTest);
app.use("/api/user/" , teacherRouteTest);

app.get("/about" ,  (req, res)=>{
    res.send("Its a about page ")

})
app.get("/regis",(req, res)=>{
   res.redirect('api/user/login')
//    redirect korbe login e 

})


app.use(express.static('./htmlFile'));

// eivabe hobee express 5 , send file 

app.get("/",(req, res)=>{
        res.statusCode = 201 ;
        res.sendFile('./htmlFile/index.html')

  
 
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