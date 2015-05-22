/*global process, require*/

var prefix = ' \033[',
	suffix = '\033[m: ',
	stderrColors = {
		error: '31m', // red
		info: '32m', // green
		warn: '33m', // yellow
		debug: '34m', // blue
		silly: '35m', // magenta
		cyan: '36m', // cyan
		white: '37m' // white
	};


var write = function(timestamp, level, message){
	process.stderr.write(timestamp + prefix + stderrColors[level] + level + suffix + message + '\n');
};

module.exports = {
	name: 'Console',
	level: 'silly',
	levelOnly: false,
	write: write
};
