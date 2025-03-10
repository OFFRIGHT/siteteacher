const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'repetitor_diary'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Подключено к базе данных');
});

module.exports = db;
