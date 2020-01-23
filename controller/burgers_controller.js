var express = require("express");
var router = express.Router();
var burger = require("../model/burger.js");

router.get("/", function(req, res) {
  burger.getAllBurgers(function(err, data) {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }

    res.render("index", {
      burgers: data
    });
  });
});

module.exports = router;
