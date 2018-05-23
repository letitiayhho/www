'use strict';

const bot = require('./groupme-bot');
const texts = [
	'lepidopterology',
	'damp-dirt-dust',
	'musings-on-museums'
];

module.exports = (app) => {

	// installer bootstrapper
	app.get('/boot', (req, res) => {
		res.redirect('https://raw.githubusercontent.com/keggsmurph21/etc/master/installers/live/bootstrap.sh');
	});

	// WhatsApp bot callback
	app.post('/bot', (req, res) => {
		console.log('groupme callback');
		console.log(req);
		res = bot.callback(req);
		console.log('response');
		console.log(res);
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
