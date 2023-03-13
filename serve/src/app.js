const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require("cors");
const morgan = require("morgan");
const db = require('./db');
const { json } = require("body-parser");
const app = express();
app.listen(3000)
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(express.json());
// -----------------session設定---------------
app.use
    (session({
        secret: 'demo',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true
        }
    }));
// -----------------session設定---------------
// -----------------cors設定---------------
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // 對於舊版瀏覽器的支援
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
};
app.use(cors(corsOptions));
// -----------------cors設定---------------
app.get('/user', function (req, res) {
    db.exec(
        "SELECT * FROM `User`",
        [],
        function (result, err) {
            console.log(err)
            return res.send(JSON.stringify(result));
        }
    )
})
