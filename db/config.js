var mysql = require('mysql');

module.exports = {};

module.exports.dbConnection = mysql.createConnection({
    user: process.env.RDS_USERNAME ||'root',
    password: process.env.RDS_PASSWORD || '',
    database: 'flicker',
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT
});

// module.exports.dbConnection.connect();