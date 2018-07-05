
const assert = require('assert');
const vec3   = require('../lib/vec3.js');

describe("Vec3", () => {

	it("should have a custom toString()", () => {
		let v = vec3.new();
		assert.equal(v.toString(), "{0,0,0}", "should just print values in braces");
	});

	it("should return random values in expected bounds for vec3.random()", () => {
		let max       = 5;
		let count     = 5000;
		let foundMax  = false;
		let foundZero = false;
		for (let i=0; i<count; i++) {
			let v = vec3.random(0, max);
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