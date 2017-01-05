'use strict';

const express = require('express');
const path = require('path');
const https  = require('https');
const http = require('http');

let app = express();

// express configuation 
app.use(express.static('public'));

app.get('/', function(req, res, next){
	res.sendFile(path.resolve(__dirname + '/public/react/index.html'));
})

// http & https handling

app.listen(process.env.PORT || 3000);