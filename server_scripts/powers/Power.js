// priority: 0

/**
 * @param {String} resourceLocation
 * @param {Object} json
 * @param {Array<String>} defaultOrigins
 */
const PowerV3 = function (resourceLocation, json, defaultOrigins) {
	this.resourceLocation = resourceLocation;
	this.json = json;
	this.defaultOrigins = defaultOrigins;
};