var express = require("express");
var router = express.Router();
var countryAdapter = require("./countryAdapter");

router.get("/", async (req, res) => {
  countryAdapter.get("pokemon/ditto").then((response) => {
    res.json(response.data);
  });
});

router.post("/newCountry", (req, res) => {
  countryAdapter.get("pokemon/ditto").then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
