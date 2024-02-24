// priority: 100

global.powers = [];

/**
 * Constructs an ApoliPower instance and adds it to the global list of apoli powers.
 * @param {string} resourceLocation
 * @param {Object} json
 * @constructor
 */
function ApoliPower(resourceLocation, json) {
	this.resourceLocation = resourceLocation;
	this.json = json;

	global.powers.push(this);
};


ApoliPower.prototype.getResourceLocation = function() {
	return this.resourceLocation;
};

/**
 * @returns {Object}
 */
ApoliPower.prototype.getJson = function() {
	return this.json;
};