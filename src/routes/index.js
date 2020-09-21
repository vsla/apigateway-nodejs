var express = require('express');
var router = express.Router()
var heroService = require('./heroRoutes')


router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(heroService)


module.exports = router