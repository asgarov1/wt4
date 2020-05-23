const mysql = require('mysql2');

const pool = mysql.createPool({
        host: 'localhost',
        port: 3306,
        user: 'asgarov',
        database: 'mysqldb',
        password: 'password'
    });

module.exports = pool.promise();