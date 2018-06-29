
const uuid = require('uuid');
const Vec3 = require('./vec3.js').Vec3;

exports.Body = class Body {
	constructor(props={}) {
		this.id       = props.id       || uuid();
		this.position = props.position || Vec3.random();
		this.velocity = props.velocity || new Vec3(0,0,0);
	}
};