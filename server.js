var express = require('express');
var app = new express();
var bodyParser = require('body-parser');
var config = require(__dirname + '/config/config');
var port = process.env.PORT || config.get('port');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.listen(port);