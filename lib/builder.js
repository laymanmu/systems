
const three  = require('three');
const Body   = require('./body.js').Body;
const System = require('./system.js').System;
const vec3   = require('./vec3.js');

exports.createSystem = function(size=100, numBodies=100, position=null, geometry=null, material=null) {
	geometry   = geometry || new three.BoxBufferGeometry(1,1,1);
	material   = material || new three.MeshBasicMaterial({color:0xffff00});
	let bodies = [];
	for (let i=0; i<size; i++) {
		let mesh      = new three.Mesh(geometry, material);
		mesh.position = vec3.random(0, size);
		bodies.push(new Body(mesh));
	}
	return new System(bodies, size, position);
};
