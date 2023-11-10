const express = require('express') ;
const routeTest = express.Router();

routeTest.get("/login",(req, res)=>{
    res.send("Its a login page ")

})



module.exports = routeTest ;