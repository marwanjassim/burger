var connection = require("./connection.js");

// ?? for columns and tables, ? for everything else
var orm = {
  selectAll: function(tableInput, callback) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], callback);
  },
  selectById: function(tableInput, idInput, callback) {
    var queryString = "SELECT * FROM ?? WHERE id=?";
    connection.query(queryString, [tableInput, idInput], callback);
  },
  insertOne: function(tableInput, colInput, valInput, callback) {
    var queryString = "INSERT INTO ?? (??) VALUES (?)";
    connection.query(queryString, [tableInput, colInput, valInput], callback);
  },
  updateOne: function(tableInput, colInput, valInput, idInput, callback) {
    var queryString = "UPDATE ?? SET ??=? WHERE id=?";
    connection.query(
      queryString,
      [tableInput, colInput, valInput, idInput],
      callback
    );
  }
};
