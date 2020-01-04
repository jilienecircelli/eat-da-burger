var orm = require("../config/orm.js");

var burger = {
    select: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insert: function(burger_name, devoured, cb) {
        orm.insertOne("burgers", burger_name, devoured, function(res) {
            cb(res)
        });
    },
    update: function(devoured, cb) {
        orm.updateOne("burgers", devoured, function(res) {
            cb(res)
        })
    }
}

module.exports = burger;©
2020 GitHub, Inc.