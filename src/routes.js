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
	app.put('/bot/identify', (req, res) => {
		console.log('PUT /bot/identify');
		const data = bot.identify(req.body);
		res.status(data.code).json(data.message);
	});
	app.post('/bot/callback', (req, res) => {
		console.log('POST /bot/callback');
		const data = bot.callback(req.body);
		res.status(data.code).json(data.message);
	});
	app.get('/bot/queue', (req, res) => {
		const data = bot.queue(req.body);
		res.status(data.code).json(data.messages);
	});
	app.post('/bot/process', (req, res) => {
		console.log('POST /bot/callback');
		const data = bot.process(req.body);
		res.status(data.code).json(data.message);
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
