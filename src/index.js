var express = require('express');
var app = express();
var router = require('./routes')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.use(router)

console.log("Simple API Gateway run on localhost:8080")

app.listen(8080);