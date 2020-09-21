var express = require('express');
var router = express.Router()

router.get('/hero', (req, res) => {
  res.send(req.path + " called")
})


router.post('/feeds', (req, res) => {
  res.send(req.path + " called")
})

module.exports = router