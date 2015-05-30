/**
	* @description
	* This is for client side logging within an html element
*/
/*global document, window, navigator*/
(function(exports){

	var domElement
		, colors = {
			silly: 'background-color:purple;color:white'
			, debug: 'background-color:blue;color:white'
			, info: 'background-color:green;color:white'
			, warn: 'background-color:orange;color:white'
			, error: 'background-color:red;color:white'
			, cyan: 'background-color:cyan;color:black'
		};

	var write = function(timestamp, level, msg, data){
		//console.log('htmlTransport', colors[level]);
		
		var message;
		if (data){
			// you can stringify data if is JSON, or remove this if block
			// and just pass data to console. i.e. console.log(msg, data)
			message = msg + ' ' + JSON.stringify(data);
		} else {
			message = msg;
		}
		
		var formatLevel = '<span style="' + colors[level] + '">' + level.toUpperCase() + '</span>';
		domElement.innerHTML += timestamp + ' ' + formatLevel + ': ' + message + '<br/>';
	};

	var htmlTransport = {
		name: 'Html',
		level: 'silly',
		levelOnly: false,
		write: write,
		setDomElement: function(domEl){
			domElement = domEl;
		}
	};

	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports.htmlTransport = module.exports = htmlTransport;
		}
		exports.htmlTransport = htmlTransport;
	} else {
		window.htmlTransport = htmlTransport;
	}

})(this);