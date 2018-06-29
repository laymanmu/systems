
exports.Vec3 = class Vec3 {
	constructor(x=0, y=0, z=0) {
		this._x = x;
		this._y = y;
		this._z = z;
	}

	get x() { return this._x; }
	get y() { return this._y; }
	get z() { return this._z; }

	set x(v) { this._x = v; }
	set y(v) { this._y = v; }
	set z(v) { this._z = v; }

	toString() {
		return `{${this.x},${this.y},${this.z}}`;
	}

	distance(other) {
		return Math.sqrt((this.x-other.x)*(this.x-other.x) + (this.y-other.y)*(this.y-other.y) + (this.z-other.z)*(this.z-other.z));
	}

	// static:

	static random(inclusiveMax=100) {
		inclusiveMax++;
		let x = Math.floor(Math.random()*inclusiveMax);
		let y = Math.floor(Math.random()*inclusiveMax);
		let z = Math.floor(Math.random()*inclusiveMax);
		return new Vec3(x, y, z);
	}
};