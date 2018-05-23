'use strict';

// setup modules
const express = require('express');
const parser = require('body-parser');
const http = require('http');
const port = process.env.PORT || 3000;

// setup express app
const app = express();
app.set('view engine', 'ejs');
app.set('views', './src/views');
require('./routes.js')(app);
app.use(parser.json());
app.use(express.static(`${__dirname}/public`));

// launch server
const server = http.createServer(app).listen(port, () => {
	console.info(`Express server listening on port ${port}`);
});
