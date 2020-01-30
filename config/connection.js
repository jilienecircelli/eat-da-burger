var mysql = require("mysql");


var connection = mysql.createConnection({
    host: "k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    username: "dks4b2wzta4dhqhv",
    password: "ph4ugq2r8ac5pnrs",
    database: "fgmtkq6ztf198yem"
})

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;