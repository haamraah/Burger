// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "a07yd3a6okcidwap.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "kazn3ftkb59i1v87",
  password: "pmm40igkm82ew53a",
  database: "g5r4ycx0kb5fj4ry"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
