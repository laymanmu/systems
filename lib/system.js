
const Vec3 = require('./vec3.js').Vec3;

exports.System = class System {

	constructor(bodies=[]) {
		this.bodies = bodies;
	}

	addBody(body) {
		this.bodies.push(body);
	}

	removeBody(body) {
		let index = this.bodies.indexOf(body);
		if (index > -1) {
			this.bodies.splice(index, 1);
		}
	}

	getBodyById(id) {
		for (let i=0; i<this.bodies.length; i++) {
			if (this.bodies[i].id === id) {
				return this.bodies[i];
			}
		}
		return null;
	}
};