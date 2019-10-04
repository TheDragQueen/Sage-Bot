module.exports = {
    connect: function(){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            return "Database Connected";
          });
    }
};
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "remotemysql.com:3306",
  user: "zeX8IlFg7t",
  password: "qLyQWVkO8l"
});
