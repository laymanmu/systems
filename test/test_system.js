
const assert = require('assert');
const lib    = require('../lib');

describe("System", () => {
	it("should find bodies by id", () => {
		let system = new lib.System();
		let body   = new lib.Body();
		system.addBody(body);
		for (let i=0; i<10; i++) {
			system.addBody(new lib.Body());
		}

		let found = system.getBodyById(body.id);
		assert.equal(found.id, body.id, "should find same body");
	});

	it("should allow bodies to be removed", () => {
		let system = new lib.System();
		let body   = new lib.Body();
		system.addBody(body);
		assert.equal(system.bodies.length, 1, "should have 1 body");

		system.removeBody(body);
		assert.equal(system.bodies.length, 0, "should have 0 bodies");
	});
});