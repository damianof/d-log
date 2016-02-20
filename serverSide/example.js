'use strict'

var stderrTransport = require('../serverSideTransports/stderrTransport')
	, logger = require('../lib/index');

stderrTransport.level = 'silly';
stderrTransport.levelOnly = false;

var transports = [
	stderrTransport
];

logger.init(transports);

// should not log data because we are not passing it (it should not print 'undefined')
console.log('following should not print "undefined" for data as we are not passing it');
logger.log('test log');
logger.silly('test silly');
logger.debug('test debug');
logger.info('test info');
logger.warn('test warn');
logger.error('test error');
logger.cyan('test cyan');

// should log data as 'udnefined' because we are passing it but is not defined
console.log('following should print "undefined" for data because we are passing it and it\'s not defined');
var data; // should print 'undefined'
logger.log('test log', data);
logger.silly('test silly', data);
logger.debug('test debug', data);
logger.info('test info', data);
logger.warn('test warn', data);
logger.error('test error', data);
logger.cyan('test cyan', data);

// should log data because we are passing it and it is defined
console.log('following should print our data object as serialized JSON');
data = { name: 'This is some test js object' }; // should print this a serialized JSON
logger.log('test log', data);
logger.silly('test silly', data);
logger.debug('test debug', data);
logger.info('test info', data);
logger.warn('test warn', data);
logger.error('test error', data);
logger.cyan('test cyan', data);

