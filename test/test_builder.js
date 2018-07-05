
const builder = require('../lib/builder.js');
const assert  = require('assert');

describe('Builder', () => {
	it('should create systems with expected defaults', () => {
		let system = builder.createSystem();

		assert.equal(system.bodies.length, 100, "should have 100 bodies");
		assert.equal(system.size, 100,          "should have size 100");

		system.bodies.forEach((body) => {
			assert(body.position.x >= 0,   "body position should be in bounds");
			assert(body.position.x <= 100, "body position should be in bounds");
			assert(body.position.y >= 0,   "body position should be in bounds");
			assert(body.position.y <= 100, "body position should be in bounds");
			assert(body.position.z >= 0,   "body position should be in bounds");
			assert(body.position.z <= 100, "body position should be in bounds");
		})
	});
});