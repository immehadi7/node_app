const app= require('./app')
const port = 4500 ; 

app.listen(port , (res, req)=>{
    console.log(`server is runing at http://localhost:${port}`);
    console.log("hello")
} )