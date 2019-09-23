var assert = require('assert');
var authController = require('../../controller/auth.controller');

describe('AuthController', function(){
	describe('isAuthorized', function() {
		it('should return false if not authorized', function() {
			assert.equal(false, authController.isAuthorized(['user'], 'admin'));
		})
	})
});
