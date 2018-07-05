
const assert = require('assert');
const lib    = require('../lib');
const three  = require('three');

describe("Body", () => {
	it("should get default values", () => {

		let geometry = new three.BoxBufferGeometry(1,1,1);
		let material = new three.MeshBasicMaterial({color:0xffff00});
		let mesh     = new three.Mesh(geometry, material);

		for (let i=0; i<100; i++) {
			let body = new lib.Body(mesh);
			assert.equal(body.id.length, 36, "id should be 16 characters");

			assert.equal(body.position.x, 0, "should have position = 0");
			assert.equal(body.position.y, 0, "should have position = 0");
			assert.equal(body.position.z, 0, "should have position = 0");

			assert.equal(body.velocity.x, 0, "should have zero = 0");
			assert.equal(body.velocity.y, 0, "should have zero = 0");
			assert.equal(body.velocity.z, 0, "should have zero = 0");

			assert.equal(body.spin.x, 0, "should have spin = 100");
			assert.equal(body.spin.y, 0, "should have spin = 100");
			assert.equal(body.spin.z, 0, "should have spin = 100");
		}
	});
});