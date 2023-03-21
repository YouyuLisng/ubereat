const mysql = require('mysql');

exports.exec = (sql, data, callback) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Ubereat',
        multipleStatements: true
    })
    connection.connect();

    connection.query(sql, data, function (err, result, fields) {
        if (err) {
            console.log(err)
        };
        callback(result, fields);
    })
    connection.end();
}