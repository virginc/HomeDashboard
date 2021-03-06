/**
 * Created by Virginia on 5/2/2014.
 * Sets up and configures Express app
 */

var util = require('./util'),
	config = require('./config'),
	express = require('express'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	expressValidator = require('express-validator'),
	appPath = process.cwd();

module.exports = function (app, db) {
	app.set('showStackError', true);

	app.use(express.static(config.appPath));

	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	}

	app.use(expressValidator());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(methodOverride());

	util.walk(appPath + '/server/routes', '/middlewares', function (path) {
		require(path)(app);
	});
};