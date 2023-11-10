const express = require('express') ;
const routeTest = express.Router();

routeTest.get("/login",(req, res)=>{
    res.send("Its a login page ")

})

routeTest.get("/register",(req, res)=>{
    res.send("Its a register page ")

})


module.exports = routeTest ;