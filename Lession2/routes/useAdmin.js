const express = require('express') ;
const adminRoute = express.Router() ;


adminRoute.get("/register",(req, res)=>{
  res.cookie("name", 'mehedi')
  res.cookie("age", '23')
  res.cookie("proff", 'bekar')
  res.clearCookie("proff")
res.end()
})

module.exports = adminRoute ;