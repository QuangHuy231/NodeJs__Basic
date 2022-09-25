// const mysql = require('mysql2');
import mysql from 'mysql2/promise'

// create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'nodejsbasic'
// });
// Create the connection pool. The pool-specific settings are the defaults
console.log("connect pool");
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

module.exports = pool;