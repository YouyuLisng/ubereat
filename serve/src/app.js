const express = require("express");
const fs = require('fs');
const path = require('path');
const multer = require("multer")
const bodyParser = require("body-parser");
const session = require('express-session');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require("cors");
const morgan = require("morgan");
const db = require('./db');
const { json } = require("body-parser");
const { data } = require("jquery");
const { decode } = require("punycode");
const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(express.json());
var upload = multer({ dest: 'public/upload' }); //設定檔案儲存位置
app.listen(3000)
var middlware = express.static('./public')
app.use(middlware)
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
app.get('/menu', function (req, res) {
    db.exec(
        "SELECT * FROM `Menu`",
        [],
        function (result, err) {
            console.log(err)
            return res.send(result);
        }
    )
})
//上傳圖片
app.post('/api/upload-image', upload.single('image'), (req, res) => {
    try {
        // 將圖片檔案存儲到硬碟中
        console.log(req.file)
        const imagePath = req.file.path;
        const IMGName = req.file.filename
        const extension = path.extname(req.file.originalname);
        const newImagePath = imagePath + extension;
        var IMGURL = `http://localhost:3000/upload/${IMGName}${extension}`
        fs.renameSync(imagePath, newImagePath);
        return res.json({ status: 200, message: '上傳成功', IMG_Path: IMGURL })
    } catch (err) {
        console.log(err);
        return res.json({ status: 400, message: '上傳失敗' })
    }
});
//User登入
app.post('/user_login', function (req, res) {
    try {
        console.log(req.body)
        if (!req.body.User_Account || !req.body.User_Password) {
            return res.json({ status: 400, message: '請輸入帳號和密碼' });
        }
        var sql = `SELECT * FROM  User WHERE User_Account = ? and User_Password = ?;`
        var data = [req.body.User_Account, req.body.User_Password]
        db.exec(sql, data, function (result, fields, err) {
            if (err) {
                console.log(err)
                return res.json({ status: 500, message: '伺服器內部錯誤', error: err.message })
            } else if (!result || result.length === 0) {
                return res.json({ status: 400, message: '帳號或密碼錯誤' })
            } else {
                console.log(result)
                var User = {
                    UserID: result[0].UserID,
                    User_Account: result[0].User_Account,
                    User_Password: result[0].User_Password,
                    User_Phone: result[0].User_Phone
                }
                const payload = {
                    UserID: User.UserID,
                    User_Account: User.User_Account,
                    User_Password: User.User_Password,
                    User_Phone: User.User_Phone,
                }
                const token = jwt.sign(payload, 'demo');
                return res.json({ status: 200, message: '登入成功', token: token, UserID: User.UserID })
            }
        })
    } catch (err) {
        return res.json({ status: 500, message: '伺服器內部錯誤', error: err.message })
    }

})
//取得登入使用者的資料
app.get('/User', function (req, res) {
    try {
        var UserID = req.query.UserID
        var sql = `SELECT * FROM User WHERE UserID = ${UserID};`
        db.exec(sql, [], function (result, fields, err) {
            if (err) {
                return res.json({ status: 400, message: '查詢失敗', error: err.message });
            } else {
                return res.json({ status: 200, message: '成功', data: result[0] });
            }
        })
    } catch (err) {
        return res.json({ status: 500, message: '伺服器內部錯誤', error: err.message })
    }
})
//User註冊
app.post('/UserRegister', function (req, res) {
    console.log(req.body)
    const { User_Name, User_Account, User_Password, User_Phone } = req.body
    if (!User_Account || !User_Password) {
        return res.json({ status: 400, message: '請輸入帳號或密碼' })
    }
    try {
        db.exec(`SELECT User_Account FROM User WHERE User_Account = ?`, [User_Account], function (result, fields, err) {
            if (result[0]) {
                return res.json({ status: 400, message: '信箱已註冊' })
            } else {
                var sql = `INSERT INTO User SET ?;`
                db.exec(sql, {
                    User_Name: req.body.User_Name,
                    User_Account: req.body.User_Account,
                    User_Password: req.body.User_Password,
                    User_Phone: req.body.User_Phone,
                    User_Rights: req.body.User_Rights
                }, function (result, fields, err) {
                    if (err) {
                        return res.json({ status: 400, message: '註冊失敗', error: err.message });
                    }
                    return res.json({ status: 200, message: '註冊成功', data: result[0] })
                })
            }
        })
    } catch (err) {
        return res.json({ status: 500, message: '伺服器錯誤' })
    }
})
//確認使用者登入
app.post('/shop_check', function (req, res) {
    const token = req.headers.authorization;
    if (!token) {
        return res.json({ status: 400, message: '請重新登錄' })
    } else {
        jwt.verify(token, 'demo', (err, decode) => {
            if (err) {
                console.log(err)
                return res.json({ status: 400, message: '驗證失敗' })
            } else {
                req.session.user = {
                    Shop_ManagerID: decode.payload.Shop_ManagerID,
                    Shop_Manager_Account: decode.payload.Shop_Manager_Account,
                    Shop_Manager_Password: decode.payload.Shop_Manager_Password,
                    isLoginL: true
                }
                return res.json({ status: 200, message: '豋入成功', Shop_ManagerID: decode.payload.Shop_ManagerID })
            }
        })
    }
})
app.get('/api/shop_user', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.json({ status: 400, message: '請重新登錄' })
    } else {
        jwt.verify(token, 'demo', (err, decode) => {
            if (err) {
                console.log(err)
                return res.json({ status: 400, message: '驗證失敗' })
            } else {
                return res.json({ status: 200, message: '驗證成功', Shop_ManagerID: decode.payload.Shop_ManagerID })
            }
        })
    }
});
//商店管理員登入
app.post('/shop_login', function (req, res) {
    console.log(req.body)
    var sql = `SELECT * FROM  Shop_Manager WHERE Shop_Manager_Account = ? and  Shop_Manager_Password = ?;`
    var data = [req.body.Shop_Manager_Account, req.body.Shop_Manager_Password]
    db.exec(sql, data, function (result, fields, err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ status: 500, message: '伺服器內部錯誤', error: err.message });
        }
        else if (result === undefined || result.length === 0) {
            return res.status(400).json({ status: 400, message: '帳號或密碼錯誤' })
        } else {
            console.log(result)
            var Shop_Manager = {
                Shop_ManagerID: result[0].Shop_ManagerID,
                Shop_Manager_Account: result[0].Shop_Manager_Account,
                Shop_Manager_Password: result[0].Shop_Manager_Password,
                Shop_Manager_Phone: result[0].Shop_Manager_Phone
            }
            const payload = {
                Shop_ManagerID: Shop_Manager.Shop_ManagerID,
                Shop_Manager_Account: Shop_Manager.Shop_Manager_Account,
                Shop_Manager_Password: Shop_Manager.Shop_Manager_Password,
                Shop_Manager_Phone: Shop_Manager.Shop_Manager_Phone,
                isLogin: false
            }
            const expiresIn = 60 * 20; // 10 分鐘
            const token = jwt.sign({ payload, exp: Math.floor(Date.now() / 1000) + expiresIn }, 'demo');
            return res.json({ status: 200, message: '登入成功', token, exp: expiresIn })
        }
    })
})
//店家人員註冊
app.post('/ShopRegister', function (req, res) {
    console.log(req.body)
    var sql = `INSERT INTO Shop_Manager SET ?;SELECT LAST_INSERT_ID()`
    db.exec(sql, {
        Shop_Manager_Name: req.body.Shop_Manager_Name,
        Shop_Manager_Account: req.body.Shop_Manager_Account,
        Shop_Manager_Password: req.body.Shop_Manager_Password,
        Shop_Manager_Phone: req.body.Shop_Manager_Phone,
        Shop_Manager_Rights: req.body.Shop_Manager_Rights
    }, function (result, fields, err) {
        if (err) {
            console.log(err)
            return res.json({ status: 400, message: '註冊失敗' })
        } else {
            console.log(result[0].insertId)
            return res.json({ status: 200, message: '註冊成功', Shop_ManagerID: result[0].insertId })
        }
    })
})
//註冊商店
app.post('/restaurant', function (req, res) {
    console.log(req.body)
    var sql = `INSERT INTO Shop SET ?;`
    db.exec(sql, {
        Shop_ManagerID: req.body.Shop_ManagerID,
        Shop_Name: req.body.Shop_Name,
        Shop_Description: req.body.Shop_Description,
        Shop_IMGURL: req.body.Shop_IMGURL,
        Shop_delivery: req.body.Shop_delivery,
        Shop_Address: req.body.Shop_Address,
        Shop_Type: req.body.Shop_Type
    }, function (result, fields, err) {
        if (err) {
            console.log(err)
            return res.json({ status: 500, message: '註冊失敗', error: err.message });
        }
        return res.json({ status: 200, message: '註冊成功' })
    })
})
//後台取店家資料
app.get('/shop', function (req, res) {
    console.log(req.query.Shop_ManagerID)
    const Shop_ManagerID = req.query.Shop_ManagerID
    var sql = `SELECT * FROM Shop WHERE Shop_ManagerID = ${Shop_ManagerID}`
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            console.log(err)
            return res.json({ status: 500, message: '失敗', error: err.message });
        }
        return res.json({ status: 200, message: '成功', data: result[0] })
    })
})
//前台取店家資料
app.get('/api/shop', function (req, res) {
    console.log(req.query.ShopID)
    const ShopID = req.query.ShopID
    var sql = `SELECT * FROM Shop WHERE ShopID = ${ShopID}`
    db.exec(sql, [], function (result, fields) {
        return res.json({ status: 200, message: '成功', data: result[0] })
    })
})
//取得所有店家資料
app.get('/all-shop', function (req, res) {
    var sql = "SELECT * FROM `Shop`"
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            console.log(err)
            return res.json({ status: 500, message: '失敗', error: err.message });
        }
        return res.json({ status: 200, message: '成功', data: result })
    })
})
//更新店家資料
app.put('/upadte-shop', function (req, res) {
    var ShopID = req.body.ShopID
    console.log(ShopID)
    const { Shop_Name, Shop_Description, Shop_IMGURL, Shop_delivery, Shop_Address } = req.body
    var sql = `UPDATE Shop SET  Shop_Name = ?, Shop_Description = ?, Shop_IMGURL = ?, Shop_delivery = ?, Shop_Address = ? WHERE ShopID = ${ShopID}`
    db.exec(sql, [Shop_Name, Shop_Description, Shop_IMGURL, Shop_delivery, Shop_Address], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '更新失敗' })
        } else if (!result) {
            return res.json({ status: 400, message: '更新失敗' })
        }
        return res.json({ status: 200, message: '更新成功' })
    })
})
//新增商品
app.post('/add-product', function (req, res) {
    console.log(req.body)
    var ShopID = req.body.ShopID;
    var Product_IMGURL = req.body.Product_IMGURL || 'https://cn-geo1.uber.com/static/mobile-content/eats/placeholder_images/placeholder_image_grocery_300x300.png'
    var is_enabled = req.body.is_enabled || '1'
    const { Product_Type, Product_Name, Product_Price, Product_Description } = req.body.data
    var sql = `INSERT INTO Product SET ShopID = ?,Product_Type = ?, Product_Name = ?, Product_Price = ?, Product_Description = ?, Product_IMGURL = ? , is_enabled  = ?;`
    db.exec(sql, [ShopID, Product_Type, Product_Name, Product_Price, Product_Description, Product_IMGURL, is_enabled], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '新增失敗' })
        }
        return res.json({ status: 200, message: '新增成功' })
    })
})
//更新商品資料
app.put('/upadte-product', function (req, res) {
    var ProductID = req.body.data.ProductID
    console.log(req.body)
    const { Product_Type, Product_Name, Product_Price, Product_Description, Product_IMGURL, is_enabled } = req.body.data
    var sql = `UPDATE Product SET Product_Type = ?,  Product_Name = ?, Product_Description = ?, Product_Price = ?, Product_IMGURL = ?, is_enabled = ? WHERE ProductID = ${ProductID}`
    db.exec(sql, [Product_Type, Product_Name, Product_Description, Product_Price, Product_IMGURL, is_enabled], function (result, fields, err) {
        if (err) {
            console.error(err)
            return res.status(500).json({ status: 500, message: '更新失敗' })
        }
        return res.json({ status: 200, message: '更新成功' })
    })
})
//後台取得商品資料
app.get('/get-all-product', function (req, res) {
    console.log(req.body)
    var ShopID = req.query.ShopID
    var sql = `SELECT * FROM Product WHERE ShopID = ${ShopID}`
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '查詢失敗' })
        }
        return res.json({ status: 200, message: '成功', data: result })
    })
})
//前台取得商品資料
app.get('/get-product', function (req, res) {
    var ShopID = req.query.ShopID
    var sql = `SELECT * FROM Product WHERE ShopID = ${ShopID} AND is_enabled = 1`
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '查詢失敗' })
        }
        return res.json({ status: 200, message: '查詢成功', data: result })
    })
})
//取得單一商品資訊
app.get('/product', function (req, res) {
    var ProductID = req.query.ProductID
    var sql = `SELECT * FROM Product WHERE ProductID = ${ProductID}`
    db.exec(sql,[], function(result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '查詢失敗' })
        }
        return res.json({ status: 200, message: '查詢成功', data: result })
    })
})
//刪除商品
app.delete('/del-product', function (req, res) {
    var ProductID = req.query.ProductID
    var sql = `DELETE FROM Product WHERE ProductID = ${ProductID}`
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '查詢失敗' })
        }
        return res.json({ status: 200, message: '刪除成功' })
    })
})
// 前台取得商品型別
app.get('/product-type', function (req, res) {
    var sql = `SELECT * FROM Product_Type`
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '查詢失敗' })
        }
        return res.json({ status: 200, message: '查詢成功', data: result })
    })
})
//後台取得商品型別
app.get('/api/product-type', function (req, res) {
    var ShopID = req.query.ShopID
    var sql = `SELECT * FROM Product_Type WHERE ShopID = ${ShopID}`
    db.exec(sql, [], function (result, fields, err) {
        if (err) {
            return res.json({ status: 400, message: '查詢失敗' })
        }
        return res.json({ status: 200, message: '查詢成功', data: result })
    })
})
//新增商品型別
app.post('/add_product-type', function (req, res) {
    console.log(req.body)
    const Type = req.body.data.Type
    const ShopID = req.body.data.ShopID
    var sql = `INSERT INTO Product_Type SET ShopID = ?,Type = ?;`
    if (!Type || !ShopID) {
        return res.json({ status: 400, message: '請輸入文字' })
    } else
        db.exec(sql, [ShopID, Type], function (result, fields, err) {
            if (err) {
                return res.json({ status: 400, message: '新增失敗' })
            }
            return res.json({ status: 200, message: '新增成功', data: result })
        })
})