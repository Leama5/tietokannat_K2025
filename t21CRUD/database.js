const mysql = require('mysql2');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'test_user1',
  password: 'xxxx',
  database: 'test_1'
});
module.exports = connection;