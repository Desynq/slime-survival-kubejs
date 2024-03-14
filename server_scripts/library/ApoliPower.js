// priority: 2147483647

/**
 * Constructs an ApoliPower instance and adds it to the global list of apoli powers.
 * @param {string} resourceLocation
 * @param {Object} json
 * @param {string[]} origins which origins the power is automatically assigned to
 * @constructor
 */
function ApoliPower(resourceLocation, json, origins) {
	this.resourceLocation = resourceLocation;
	this.json = json;
	this.origins = origins;

	ApoliPower.instances.push(this);
};

/**
 * @type {ApoliPower[]}
 */
ApoliPower.instances = [];


ApoliPower.prototype.getResourceLocation = function () {
	return this.resourceLocation;
};

/**
 * @returns {Object}
 */
ApoliPower.prototype.getJson = function () {
	return this.json;
};