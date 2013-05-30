var express = require('express');
var util = require('util');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(3000);
util.log('Listening on port 3000');