'use strict';

const bot = require('./groupme-bot');
const texts = [
	'lepidopterology',
	'damp-dirt-dust',
	'musings-on-museums'
];
const etc = 'https://raw.githubusercontent.com/keggsmurph21/etc/master';

module.exports = (app) => {

	app.get('/.well-known/acme-challenge/mWWcu3NL0z_0I4D7hSIS59VIJvrg9byivCMJDVqXN30', (req, res) => {
		res.send('mWWcu3NL0z_0I4D7hSIS59VIJvrg9byivCMJDVqXN30.6hXgxEs2WZWPOb4c4dj-Jo_cpcW10BizUWfwti3eHKA');
	})

	// redirects
	app.get('/boot', (req, res) => {
		res.redirect(`${etc}/installers/live/bootstrap.sh`);
	});
	app.get('/botmaker', (req, res) => {
		res.redirect(`${etc}/make-groupme-bot`);
	});

	// WhatsApp bot callback
	app.post('/bot', (req, res) => {
		const response = bot.listen(req, res);
		console.log('response');
		console.log(response);
	});

	// texts :)
	app.get('/texts', (req, res) => {
		res.render('texts/index.ejs');
	});
	texts.forEach((text) => {
		app.get(`/texts/${text}`, (req, res) => {
			res.render(`texts/${text}.ejs`);
		});
	});

	// home page
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});

};
