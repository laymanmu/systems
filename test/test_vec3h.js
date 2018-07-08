
const assert = require('assert');
const lib    = require('../lib');

describe("vec3h", () => {

	it("should create a custom toString()", () => {
		let v = lib.vec3h.new();
		assert.equal(v.toString(), "{0,0,0}", "should just print values in braces");
	});

	it("should return random values in expected bounds for vec3h.random()", () => {
		let max       = 5;
		let count     = 5000;
		let foundMax  = false;
		let foundZero = false;
		for (let i=0; i<count; i++) {
			let v = lib.vec3h.random(0, max);
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