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

	var write = function(timestamp, level, message, data){
		//console.log('htmlTransport', colors[level]);
		
		var outData, outHtml;
		if (data){
			// you can stringify data if is JSON, or remove this if block
			// and just pass data to console. i.e. console.log(msg, data)
			outData = JSON.stringify(data);
		} else {
			outData = data;
		}
		
		if (level != 'log'){
			var formatLevel = '<span style="' + colors[level] + '">' + level.toUpperCase() + '</span>';
			outHtml = timestamp + ' ' + formatLevel + ': ' + message + ': ' + outData + '<br/>';
		} else {
			outHtml = timestamp + ' ' + level + ': ' + message + ': ' + outData + '<br/>';
		}
		
		domElement.innerHTML += outHtml;
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