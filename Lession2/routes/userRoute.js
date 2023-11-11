const express = require('express') ;
const routeTest = express.Router();

routeTest.get("/login",(req, res)=>{
    res.status(333).json({
        'name' : "mehedi" ,
        "id" : '2222'
    });
//   sending as json file to the server
//  res.send("a login page")
})



module.exports = routeTest ;