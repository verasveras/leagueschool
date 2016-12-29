'use strict';

const express = require('express');
const path = require('path');

let app = express();
app.use(express.static('public'))

app.listen(process.env.PORT || 3000);
app.get('/', function(req, res, next){
	res.sendFile(path.resolve(__dirname + '/public/react/index.html'));
})