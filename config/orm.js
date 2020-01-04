var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

var orm = {
        selectAll: function() {
            var queryString = "SELECT * FROM burgers";
            connection.query(queryString, [], function(err, result) {
                if (err) throw err;
                console.log(result);
            })
        },
        insertOne: function() {
            var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)";
            connection.query(queryString, [burger_name, devoured], function(err, result) {
                if (err) throw err;
                console.log(result);
            })
        },
        updateOne: function() {
            var queryString = "";
            connection.query(queryString, [], function(err, result) {
                if (err) throw err;
                console.log(result);
            })
        }
    }
    /////// previous examples
    {
        selectWhere: function(tableInput, colToSearch, valOfCol) {
            var queryString = "SELECT * FROM ?? WHERE ?? = ?";
            connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },
        selectAndOrder: function(whatToSelect, table, orderCol) {
            var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
            console.log(queryString);
            connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
                if (err) throw err;
                console.log(result);
            });
        },
        findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
            var queryString =
                "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

            connection.query(
                queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
                function(err, result) {
                    if (err) throw err;
                    console.log(result);
                }
            );
        }
    };

module.exports = orm;