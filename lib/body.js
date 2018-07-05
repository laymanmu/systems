
const uuid  = require('uuid');
const vec3  = require('./vec3.js');

exports.Body = class Body {
	constructor(mesh) {
		this.data          = {};
		this.data.id       = uuid();
		this.data.mesh     = mesh;
		this.data.velocity = vec3.new();
		this.data.spin     = vec3.new();
	}

	// getters:
	get id()       { return this.data.id;            }
	get mesh()     { return this.data.mesh;          }
	get position() { return this.data.mesh.position; }
	get velocity() { return this.data.velocity;      }
	get spin()     { return this.data.spin;          }

	// setters:
	set mesh(m)     { this.data.mesh          = m; }
	set position(v) { this.data.mesh.position = v; }
	set velocity(v) { this.data.velocity      = v; }
	set spin(v)     { this.data.spin          = v; }
};