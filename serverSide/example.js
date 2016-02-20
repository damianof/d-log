'use strict'

var stderrTransport = require('../serverSideTransports/stderrTransport')
	, logger = require('../lib/index');

stderrTransport.level = 'silly';
stderrTransport.levelOnly = false;

var transports = [
	stderrTransport
];

logger.init(transports);

logger.log('test log');
logger.log('test log', {});
logger.silly('test silly', {});
logger.debug('test debug');
logger.info('test info');
logger.warn('test warn');
logger.error('test error');
logger.cyan('test cyan');

