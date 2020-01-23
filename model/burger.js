var orm = require("../config/orm.js");

module.exports = {
  getAllBurgers: function(callback) {
    orm.selectAll("burgers", callback);
  },
  addBurger: function(name, callback) {
    orm.insertOne("burgers", "burger_name", name, callback);
  },
  devourBurger: function(id, callback) {
    orm.updateOne("burgers", "completed", true, id, callback);
  }
};
