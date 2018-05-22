'use strict';

module.exports = (app) => {

	// home page
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});

	// installer bootstrapper
	app.get('/boot', (req, res) => {
		res.redirect('https://raw.githubusercontent.com/keggsmurph21/etc/master/installers/live/bootstrap.sh');
	});

};
