var express = require("express");
var exphbs = require("express-handlebars");
var router = require("./controller/burgers_controller.js");
var PORT = process.env.PORT || 3000;

var app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
