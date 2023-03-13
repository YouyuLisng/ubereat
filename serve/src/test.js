const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.listen(3000)
app.use(bodyParser.json());
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'form'
})
conn.connect(function(err){
    console.log(err)
})

app.post('/test', function(req, res){
    const data = {
        Contact_person: req.body.Contact_person,
        Email: req.body.Email,
        Phone_Number: req.body.Phone_Number
    }
    conn.query(`INSERT INTO main_user SET ,SELECT LAST_INSERT_ID()`, { Contact_person: data.Contact_person, Email: data.Email, Phone_Number: data.Phone_Number }, (result, fields) => {
        return res.json({ status: 200, message: '輸入成功', result})
    })
})