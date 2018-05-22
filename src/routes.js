'use strict';

module.exports = (app) => {

	// home page
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});

};
