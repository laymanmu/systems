
const uuid = require('uuid');
const vec3 = require('./vec3.js');

exports.System = class System {

	constructor(bodies=[], size=100, position=vec3.new()) {
		this.data          = {};
		this.data.id       = uuid();
		this.data.bodies   = bodies;
		this.data.size     = size;
		this.data.position = position;
	}

	// getters:
	get id()       { return this.data.id;       }
	get bodies()   { return this.data.bodies;   }
	get size()     { return this.data.size;     }
	get position() { return this.data.position; };

	// setters:
	set bodies(b)   { this.data.bodies   = b; }
	set size(n)     { this.data.size     = n; }
	set position(v) { this.data.position = v; }

	// interface:

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