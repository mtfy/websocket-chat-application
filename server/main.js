//const { config } = require('dotenv');

const Helpers = require('../includes/core/helpers');

require('dotenv').config();

const Winston 			=	require('winston'),
		Chalk			=	require('chalk'),
		SetConsoleTitle =	require('node-bash-title'),
		System			=	require('os'),
		Wait			=	require('timers/promises').setTimeout;
		config			=	process.env,
		IsValidConfig	=	(typeof config === 'object' && config !== null) ? true : false;
		debug			=	(IsValidConfig && config.hasOwnProperty('DEBUG') && typeof config.DEBUG === 'string' && config.debug === '1') ? true : false;

	

SetConsoleTitle(`Initializing...`);
console.log(Chalk.green(Helpers.validateConfig(config)));