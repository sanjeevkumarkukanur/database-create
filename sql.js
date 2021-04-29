const mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "roots", 
  password: ""
});

con.connect((err)=> {
  if (err) {console.log(err);}
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) {console.log(err);}
    console.log("Database created");
  });
});