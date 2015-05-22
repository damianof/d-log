//'use strict';
var config;

var getMessage = function(msg, data){
	if (data){
		return msg + ' ' + JSON.stringify(data);
	} else {
		return msg;
	}
};

var timestamp = function() {
	return new Date();
};

var canProceed = function(transportLevel, transportLevelOnly, level){
	var proceed = false;

	if (!transportLevelOnly) {
		// log from level specified in transPOrt level and higher
		if (transportLevel == 'silly' || transportLevel == 'cyan'){
			proceed = true;
		} else if (transportLevel == 'debug' && ['cyan', 'silly'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'info' && ['cyan', 'silly', 'debug'].indexOf(level) == -1){
			proceed = true;
		} else if (transportLevel == 'warn' && ['cyan', 'silly', 'debug', 'info'].indexOf(level) == -1){
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

var transportsWrite = function(level, msg, data){
	// safeConsoleLog(level, msg, data);
	// safeOtherTransport(level, msg, data);
	//console.log('transportsWrite', level, msg);

	for (var t in config.transports){
		var trans = config.transports[t];
		//console.log('transportsWrite', trans);
		if (canProceed(trans.level, trans.levelOnly, level)){
			var message = getMessage(msg, data);
			trans.write(timestamp(), level, message);
		}
	}
};

var init = function(transports){
	config = {}
	config.transports = transports;
};

var logger =  {
	init: init,
	silly: function(msg, data){
		transportsWrite('silly', msg, data);
	},
	debug: function(msg, data){
		transportsWrite('debug', msg, data);
	},
	info: function(msg, data){
		transportsWrite('info', msg, data);
	},
	warn: function(msg, data){
		transportsWrite('warn', msg, data);
	},
	error: function(msg, data){
		transportsWrite('error', msg, data);
	},
	cyan: function(msg, data){
		transportsWrite('cyan', msg, data);
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

