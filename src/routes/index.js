var express = require("express");
var router = express.Router();
var heroService = require("./hero/heroRoutes");
var countryService = require("./Country/countryRoutes");

router.use("/hero", heroService);
router.use("/country", countryService);

module.exports = router;
