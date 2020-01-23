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

router.post("/devour/:id", function(req, response) {
  burger.devourBurger(req.params.id, function(err, result) {
    if (err) {
      console.log(err);
      return response.status(404).end();
    }

    // Redirect back to home
    response.redirect("/");
  });
});

router.post("/add", function(req, response) {
  burger.addBurger(req.body.name, function(err, result) {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }

    response.redirect("/");
  });
});
module.exports = router;
