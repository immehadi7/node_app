
const express = require('express')
const teacherRoute = express.Router();
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../htmlFile')));
// ei folder nam dite hobe tarpor sendfile e extension

teacherRoute.get("/teacher", (req,res) =>{
    // res.status(222).json({
    //     'teacherName':'BSC Sir' ,
    //     'proff' : 'Advocate'
    // })
  res.statusCode = 333 ;
  res.sendFile(path.join(__dirname, '../htmlFile/teacher.html'));
  res.append('id',"1111"); 
//   eta diye id ke pass kora bujay
})

module.exports = teacherRoute ;