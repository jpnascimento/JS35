var mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'casadocodigo',
    connectionLimit: 15
});
    

function createConnection() {

    return pool;
};

module.exports = function() { return createConnection };
