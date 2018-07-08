
const uuid  = require('uuid');

exports.Body = class Body {
	constructor(mesh) {
		this.data      = {};
		this.data.id   = uuid();
		this.data.mesh = mesh;
	}

	// getters:
	get id()       { return this.data.id;            }
	get mesh()     { return this.data.mesh;          }
	get position() { return this.data.mesh.position; }

	// setters:
	set mesh(m)     { this.data.mesh          = m; }
	set position(v) { this.data.mesh.position = v; }
};