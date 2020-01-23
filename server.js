var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controller/burgers_controller.js");
var PORT = process.env.PORT || 3000;

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use("/", router);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
