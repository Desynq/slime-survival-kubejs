// priority: 2147483647



/**
 * Constructs an ApoliPower instance and adds it to the global list of apoli powers.
 * @param {string} resourceLocation
 * @param {Object} json
 * @param {string[]} defaultOriginIds which origins the power is automatically assigned to
 * @constructor
 */
function ApoliPower(resourceLocation, json, defaultOriginIds) {
	this.resourceLocation = resourceLocation;
	this.json = json;
	this.defaultOriginIds = defaultOriginIds ?? [];

	ApoliPower.instances.push(this);
};

/**
 * @type {ApoliPower[]}
 */
ApoliPower.instances = [];


/**
 * @returns {String}
 */
ApoliPower.prototype.getResourceLocation = function () {
	return this.resourceLocation;
}

/**
 * @returns {Object}
 */
ApoliPower.prototype.getJson = function () {
	return this.json;
}

/**
 * @returns {String[]}
 */
ApoliPower.prototype.getDefaultOrigins = function () {
	return this.defaultOriginIds;
}

/**
 * @returns {String}
 */
ApoliPower.prototype.getId = function () {
	/**
	 * The power identifier is made up of a namespace and path.
	 * The identifier is derived from the resource location but omits the first directory after the namespace ('slimesurvival').
	 * This is because the first directory serves to identify what type the identifier is ('powers' in this case).
	 * Additionally, '.json' is omitted as identifiers don't require the .json extension to function in-game
	 * I.e., 'slimesurvival:powers/arachnid/fragile.json' => 'slimesurvival:arachnid/fragile'
	 */
	return this.resourceLocation.replace(/^([^:]+):[^/]+\/([^\.]+)\.json$/, '$1:$2');
}



/**
 * Registers all instances of Origin to the datapack event
 * @param {Internal.DataPackEventJS} event
 * @static
 * @returns {void}
 */
ApoliPower.register = function (event) {
	ApoliPower.instances.forEach(power => power.register(event))
}

/**
 * @param {Internal.DataPackEventJS} event
 * @returns {void}
 */
ApoliPower.prototype.register = function (event) {
	event.addJson(this.resourceLocation, this.getJson());
}