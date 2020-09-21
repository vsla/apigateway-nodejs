var express = require("express");
var router = express.Router();
var heroService = require("./hero/heroRoutes");

router.use(
  "/hero",
  function (req, res, next) {
    next();
  },
  heroService
);

module.exports = router;
