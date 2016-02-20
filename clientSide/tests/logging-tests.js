/*global requirejs, describe, it,logger, chai, chromeTransport, htmlTransport, mocha*/
(function(){

	requirejs(['../../lib/index.js',
				'../../clientSideTransports/chromeTransport',
				'../../clientSideTransports/htmlTransport'], function(util) {

		mocha.setup('bdd');

		//console.log('loaded', logger);
		var expect = chai.expect;

		// var logger = require('../../../lib/index.js');
		// var chromeTransport = require('../../../lib/clientSideTransports/chromeTransport');
		// var htmlTransport = require('../../../lib/clientSideTransports/htmlTransport');

		describe('logger', function() {

			it('should have info function', function() {
				expect(logger.info).to.not.be.undefined;
			});

			it('should have warn function', function() {
				expect(logger.warn).to.not.be.undefined;
			});

			it('should have error function', function() {
				expect(logger.error).to.not.be.undefined;
			});

			// it('should successfully log with info', function() {
			// 	expect(logger.info('this is an information')).to.not.throw;
			// });

			// it('should successfully log with warn', function() {
			// 	expect(logger.warn('this is a warning')).to.not.throw;
			// });

			// it('should successfully log with error', function() {
			// 	expect(logger.error('this is an error')).to.not.throw;
			// });

			it('should successfully log message using Chrome transport', function() {

				var transports = [
					chromeTransport
				];

				logger.init(transports);
				logger.log('___________ test: log message using Chrome transport ___________');
				
				var msg = 'this is an information';
				expect(logger.silly(msg)).to.not.throw;
				expect(logger.debug(msg)).to.not.throw;
				expect(logger.info(msg)).to.not.throw;
				expect(logger.warn(msg)).to.not.throw;
				expect(logger.error(msg)).to.not.throw;
				expect(logger.cyan(msg)).to.not.throw;
			});
			
			it('should successfully log messager and data using Chrome transport', function() {

				var transports = [
					chromeTransport
				];

				logger.init(transports);
				logger.log('___________ test: log message and data using Chrome transport ___________');
				
				var msg = 'this is an information';
				var data = { name: 'This is some javascript object or other data structure' };
				expect(logger.silly(msg, data)).to.not.throw;
				expect(logger.debug(msg, data)).to.not.throw;
				expect(logger.info(msg, data)).to.not.throw;
				expect(logger.warn(msg, data)).to.not.throw;
				expect(logger.error(msg, data)).to.not.throw;
				expect(logger.cyan(msg, data)).to.not.throw;
			});

			it('should successfully log message using html transport', function() {

				var divLog = document.getElementById('divLog');
				htmlTransport.setDomElement(divLog);
				//console.log('divLog', divLog);

				var transports = [
					htmlTransport
				];

				logger.init(transports);
				logger.log('___________ test: log message using html transport ___________');
				
				var msg = 'this is an information';
				expect(logger.silly(msg)).to.not.throw;
				expect(logger.debug(msg)).to.not.throw;
				expect(logger.info(msg)).to.not.throw;
				expect(logger.warn(msg)).to.not.throw;
				expect(logger.error(msg)).to.not.throw;
				expect(logger.cyan(msg)).to.not.throw;
			});
			
			it('should successfully log message and data using html transport', function() {

				var divLog = document.getElementById('divLog');
				htmlTransport.setDomElement(divLog);
				//console.log('divLog', divLog);

				var transports = [
					htmlTransport
				];

				logger.init(transports);
				logger.log('___________ test: log message and data using html transport ___________');
				
				var msg = 'this is an information';
				var data = { name: 'This is some javascript object or other data structure' };
				expect(logger.silly(msg, data)).to.not.throw;
				expect(logger.debug(msg, data)).to.not.throw;
				expect(logger.info(msg, data)).to.not.throw;
				expect(logger.warn(msg, data)).to.not.throw;
				expect(logger.error(msg, data)).to.not.throw;
				expect(logger.cyan(msg, data)).to.not.throw;
			});

		});

		mocha.run();
	});

}());
