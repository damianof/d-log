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

var write = function(timestamp, level, msg, data){
	var messagePrefix = timestamp + prefix + stderrColors[level] + level + suffix;
	
	// console.log, or process.stderr.write or process.stdout.write etc
	//process.stderr.write(messagePrefix + message + '\n');
	if (data){
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
