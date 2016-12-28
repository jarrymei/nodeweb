
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'trouble_maker',
    user: 'root',
    password: 'meijiajie'
})

connection.connect();

connection.query('select * from xx_article', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is:', rows);
})

connection.end();