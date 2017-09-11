'use strict'

const os = require('os');
const prettyMs = require('pretty-ms');
const prettyBytes = require('pretty-bytes');

function getOsStats() {
	
	const stats = {
		cpus: os.cpus(),
		freeMemory: prettyBytes(os.freemem()),
		totalMemory: prettyBytes(os.totalmem()),
		loadavg: os.loadavg(),
		platform: os.platform(),
		release: os.release(),
		type: os.type(),
		uptime: prettyMs(os.uptime() * 1000)
	}

	const statsString = 'OS Stats\n' + JSON.stringify(stats, null, 2);
	return statsString;
}

module.exports = getOsStats;