var express = require("express");
var router = express.Router();
var heroAdapter = require("./heroAdapter");

router.get("/", async (req, res) => {
  heroAdapter.get("pokemon/ditto").then((response) => {
    res.json(response.data);
  });
});

router.post("/newHero", (req, res) => {
  heroAdapter.get("pokemon/ditto").then((response) => {
    res.json(response.data);
  });
});

router.post("/newHero", (req, res) => {
  heroAdapter.get("pokemon/ditto").then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
