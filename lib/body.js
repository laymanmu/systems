
const uuid = require('uuid');
const Vec3 = require('./vec3.js').Vec3;

class Body {
	constructor() {
		this.id       = uuid();
		this.position = new Vec3()
	}
}