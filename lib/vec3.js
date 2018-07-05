
const three = require('three');

exports.random = function(inclusiveMin=0, inclusiveMax=100) {
	inclusiveMax++;
	let x = Math.floor(Math.random()*inclusiveMax) + inclusiveMin;
	let y = Math.floor(Math.random()*inclusiveMax) + inclusiveMin;
	let z = Math.floor(Math.random()*inclusiveMax) + inclusiveMin;
	return exports.new(x,y,z);
};

exports.new = function(x=0, y=0, z=0) {
	let vec3 = new three.Vector3(x,y,z);
	vec3.toString = function() {
		return `{${this.x},${this.y},${this.z}}`;
	};
	return vec3;
};
