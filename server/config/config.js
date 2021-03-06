/**
 * Created by Virginia on 5/2/2014.
 * Sets the environment, loads its config and base config
 */
'use strict';

var _ = require('lodash');

process.env.NODE_ENV = 'development';

var allConfig = require('./env/all'),
	envConfig = require('./env/' + process.env.NODE_ENV) || {};

module.exports = _.extend(
	allConfig,
	envConfig
);