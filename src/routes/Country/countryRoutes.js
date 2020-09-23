var express = require("express");
var router = express.Router();
var countryAdapter = require("./countryAdapter");

router.get("/", (req, res) => {
  countryAdapter.get("pokemon/ditto").then((response) => {
    res.json(response.data);
  });
});

router.post("/newCountry", (req, res) => {
  countryAdapter.post("pokemon/ditto", req.body).then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
