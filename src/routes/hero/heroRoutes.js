var express = require("express");
var router = express.Router();
var heroAdapter = require("./heroAdapter");

router.get("/", (req, res) => {
  heroAdapter.get("/").then((response) => {
    res.json(response.data);
  });
});

router.post("/newHero", (req, res) => {
  heroAdapter.post("pokemon/ditto", req.body).then((response) => {
    res.json(response.data);
  });
});

router.post("/newHero", (req, res) => {
  heroAdapter.post("pokemon/ditto", req.body).then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
