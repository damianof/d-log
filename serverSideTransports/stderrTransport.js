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
	var message;
	if (data){
		// you can stringify data if is JSON, or remove this if block
		// and just pass data to console. i.e. console.log(msg, data)
		message = msg + ' ' + JSON.stringify(data);
	} else {
		message = msg;
	}
	
	var messagePrefix = timestamp + prefix + stderrColors[level] + level + suffix;
	
	// console.log, or process.stderr.write or process.stdout.write etc
	//process.stderr.write(messagePrefix + message + '\n');
	console.log(messagePrefix + message);
};

module.exports = {
	name: 'Console',
	level: 'silly',
	levelOnly: false,
	write: write
};
