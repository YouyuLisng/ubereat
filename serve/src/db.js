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

    connection.query(sql, data, function (error, result, fields) {
        if (error) {
            console.log(error)
        };
        callback(result, fields);
    })
    connection.end();
}