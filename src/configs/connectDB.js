// const mysql = require('mysql2');
import mysql from 'mysql2'

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//     console.log('check sql')
//     console.log(results); // results contains rows returned by server
//     let rows = results.map((row) => {
//         return row;
//     });
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// with placeholder
// connection.query(
//   'SELECT * FROM `` WHERE `name` = ? AND `age` > ?',
//   ['Page', 45],
//   function(err, results) {
//     console.log(results);
//   }
// );
module.exports = connection;