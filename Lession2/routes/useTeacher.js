
const express = require('express')
const teacherRoute = express.Router();

teacherRoute.get("/teacher", (req,res) =>{
    res.send("<h1>Its a teacher panel </h1>")
})

module.exports = teacherRoute ;