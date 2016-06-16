//'use strict';
var config;

var timestamp = function() {
	return new Date();
};

var canProceed = function(transportLevel, transportLevelOnly, level){
	var proceed = false;

	if (!transportLevelOnly) {
		// log from level specified in transPOrt level and higher
		if (transportLevel == 'log'){
			proceed = true;
		} else if (transportLevel == 'silly'){
			proceed = true;
		} else if (transportLevel == 'debug' && ['silly'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'info' && ['silly', 'debug'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'warn' && ['silly', 'debug', 'info'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'cyan' && ['silly', 'debug', 'info', 'warn'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'yellow' && ['silly', 'debug', 'info', 'warn', 'cyan'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'orange' && ['silly', 'debug', 'info', 'warn', 'cyan', 'yellow'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'error' && level == 'error'){
			proceed = true;
		}
	} else {
		// log only the level specified in transportLevel
		proceed = transportLevel == level;
	}

	return proceed;
};


var transportsWrite = function(level, msg, data, includesData){
	// safeConsoleLog(level, msg, data);
	// safeOtherTransport(level, msg, data);
	//console.log('transportsWrite', level, msg);

	for (var t in config.transports){
		var trans = config.transports[t];
		//console.log('transportsWrite', trans);
		if (canProceed(trans.level, trans.levelOnly, level)){
			
			if (includesData){
				trans.write(timestamp(), level, msg, data);
			} else {
				trans.write(timestamp(), level, msg);
			}
		}
	}
};

var init = function(transports){
	config = {}
	config.transports = transports;
};

var logger =  {
	init: init,
	log: function(msg, data){
		transportsWrite('log', msg, data, arguments.length === 2);
	},
	silly: function(msg, data){
		transportsWrite('silly', msg, data, arguments.length === 2);
	},
	debug: function(msg, data){
		transportsWrite('debug', msg, data, arguments.length === 2);
	},
	info: function(msg, data){
		transportsWrite('info', msg, data, arguments.length === 2);
	},
	warn: function(msg, data){
		transportsWrite('warn', msg, data, arguments.length === 2);
	},
	cyan: function(msg, data){
		transportsWrite('cyan', msg, data, arguments.length === 2);
	},
	yellow: function(msg, data){
		transportsWrite('yellow', msg, data, arguments.length === 2);
	},
	orange: function(msg, data){
		transportsWrite('orange', msg, data, arguments.length === 2);
	},
	error: function(msg, data){
		transportsWrite('error', msg, data, arguments.length === 2);
	}
};

if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports.logger = module.exports = logger;
	}
	exports.logger = logger;
} else {
	window.logger = logger;
}

