const express = require('express') ;
const adminRoute = express.Router() ;


adminRoute.get("/register",(req, res)=>{
    res.send("Its a register page ")

})

module.exports = adminRoute ;