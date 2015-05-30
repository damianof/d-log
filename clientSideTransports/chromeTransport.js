/**
	* @description
	* This is for client side logging within Chrome javascript console.
*/
/*global document, window, navigator*/
(function(exports){

	var prefix = '%c ',
		colors = {
			silly: 'background: purple; color: white'
			, debug: 'background: blue; color: white'
			, info: 'background: green; color: white'
			, warn: 'background: orange; color: white'
			, error: 'background: red; color: white'
			, cyan: 'background: cyan;'
		};

	var isChrome = /chrome/gi.test(navigator.userAgent);

	var write = function(timestamp, level, msg, data){
		var message;
		if (data){
			// you can stringify data if is JSON, or remove this if block
			// and just pass data to console. i.e. console.log(msg, data)
			message = msg + ' ' + JSON.stringify(data);
		} else {
			message = msg;
		}

		if (isChrome){
			console.log(timestamp + ' ' + prefix + level + ': ' + message, colors[level]);
		} else {
			console.log(timestamp + ' ' + level + ': ' + message);
		}
	};

	var chromeTransport = {
		name: 'Chrome',
		level: 'silly',
		levelOnly: false,
		write: write
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports.chromeTransport = module.exports = chromeTransport;
		}
		exports.chromeTransport = chromeTransport;
	} else {
		window.chromeTransport = chromeTransport;
	}

})(this);