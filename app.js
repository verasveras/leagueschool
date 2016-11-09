'use strict';

import express from 'express';
import path from 'path';

app = express();

app.listen(3000);
app.get('/', function(req, res, next){
	res.sendFile(path.resolve(__dirname + '/react/index.html');
})