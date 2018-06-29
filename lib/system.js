
const Vec3 = require('./vec3.js').Vec3;

class System {

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

	findBody(query) {
		let keys  = Object.keys(query);
		let found = [];
		this.bodies.forEach((body) => {
			let matches = true;
			for (let i=0; i<keys.length; i++) {
				if (body[key] !== query[key]) {
					matches = false;
					break;
				}
			}
			if (matches) {
				found.push(body);
			}
		});
		return found;
	}
}