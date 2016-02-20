'use strict'

var stderrTransport = require('../serverSideTransports/stderrTransport')
	, logger = require('../lib/index');

stderrTransport.level = 'silly';
stderrTransport.levelOnly = false;

var transports = [
	stderrTransport
];

logger.init(transports);

logger.silly('test silly', {});
logger.debug('test debug');
logger.info('test info');
logger.warn('test warn');
logger.error('test error');
logger.cyan('test cyan');

