const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require('./db');
const { json } = require("body-parser");
const app = express();
app.listen(3000)
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(express.json());

app.get('/test', function(req, res){
    var sql = `SELECT * FROM uber.product`;
    db.exec(sql,[], function(err, data){
        return res.send(JSON.stringify(err));
    })
})