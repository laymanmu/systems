
const assert = require('assert');
const lib    = require('../lib');

describe("Body", () => {
	it("should get default values", () => {
		for (let i=0; i<100; i++) {
			let body = new lib.Body();
			assert.equal(body.id.length, 36, "id should be 16 characters");

			assert.equal(body.velocity.x, 0, "should have zero velocity");
			assert.equal(body.velocity.y, 0, "should have zero velocity");
			assert.equal(body.velocity.z, 0, "should have zero velocity");

			assert(body.position.x >= 0, "should have position >= 0");
			assert(body.position.y >= 0, "should have position >= 0");
			assert(body.position.z >= 0, "should have position >= 0");

			assert(body.position.x <= 100, "should have position <= 100");
			assert(body.position.y <= 100, "should have position <= 100");
			assert(body.position.z <= 100, "should have position <= 100");
		}
	});
});