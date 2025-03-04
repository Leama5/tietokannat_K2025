const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user1',
  password: 'xxxx',
  database: 'kirjasto'
});
module.exports = connection;