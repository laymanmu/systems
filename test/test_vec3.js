
const assert = require('assert');
const Vec3   = require('../lib/vec3.js').Vec3;

describe("Vec3", () => {

	it("should have default values", () => {
		let v = new Vec3();
		assert.equal(v.x, 0, "should be zero");
		assert.equal(v.y, 0, "should be zero");
		assert.equal(v.z, 0, "should be zero");
	});

	it("should allow changes", () => {
		let v = new Vec3();
		assert.equal(v.x, 0, "should be zero");
		v.x = 1;
		assert.equal(v.x, 1, "should be one");
	});

	it("should have a custom toString()", () => {
		let v = new Vec3();
		assert.equal(v.toString(), "{0,0,0}", "should just print values in braces");
	});

	it("should have a distance()", () => {
		let v1 = new Vec3(1,2,3);
		let v2 = new Vec3(11,2,3);
		assert.equal(v1.distance(v2), v2.distance(v1), "distances should be the same");
		assert.equal(v1.distance(v2), 10, "distance should be 10");
	});

	it("should return random values for Vec3.random()", () => {
		let max       = 5;
		let count     = 5000;
		let foundMax  = false;
		let foundZero = false;
		for (let i=0; i<count; i++) {
			let v = Vec3.random(max);
			assert(v.x<=max, "should be less than or equal to provided max: "+ max);
			assert(v.x>=0,   "should be equal to or greater than zero");
			assert(v.y<=max, "should be less than or equal to provided max: "+ max);
			assert(v.y>=0,   "should be equal to or greater than zero");
			assert(v.z<=max, "should be less than or equal to provided max: "+ max);
			assert(v.z>=0,   "should be equal to or greater than zero");

			if (v.x == max || v.y == max || v.z == max) {
				foundMax = true;
			}
			if (v.x == 0 || v.y == 0 || v.z == 0) {
				foundZero = true;
			}
		}
		assert(foundMax,  "should find max value at least once out of "+ count +" random instances");
		assert(foundZero, "should find zero value at least once out of "+ count +" random instances");
	});
});