/*global process, require*/

var prefix = ' \033[',
	suffix = '\033[m: ',
	stderrColors = {
		error: '31m', // red
		info: '32m', // green
		warn: '33m', // yellow
		debug: '34m', // blue
		silly: '35m', // magenta
		white: '37m', // white
		cyan: '36m', // cyan
		yellow: '7;32m', // green background
		orange: '7;33m' // yellow background
	};

var write = function(timestamp, level, msg, data){
	
	var messagePrefix;
	if (level != 'log'){
		messagePrefix = timestamp + prefix + stderrColors[level] + level + suffix;
	} else {
		messagePrefix = timestamp + suffix;
	}

	// console.log, or process.stderr.write or process.stdout.write etc
	//process.stderr.write(messagePrefix + message + '\n');
	if (arguments.length === 4){
		console.log(messagePrefix + msg, data);
	} else {
		console.log(messagePrefix + msg);
	}
};

module.exports = {
	name: 'Console',
	level: 'silly',
	levelOnly: false,
	write: write
};
