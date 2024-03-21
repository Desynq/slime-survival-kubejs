// priority: 2147483647

/**
 * Data template for powers
 * @constructor
 * @param {String} resourceLocation
 * @param {PowerType.Attribute} powerType
 */
function Power(resourceLocation, powerType) {
	this.resourceLocation = resourceLocation;
	this.json = {};

	// add keys from powerTypeJson to powerJson
	const powerTypeJson = powerType.getJson();
	for (let key in powerTypeJson) {
		if (powerTypeJson.hasOwnProperty(key)) this.json[key] = powerTypeJson[key];
	}

	Power.instances.push(this);
}

/**
 * @type {Array<Power>}
 */
Power.instances = [];




/**
 * @param {String} name
 */
Power.prototype.name = function(name) {
	this.json['name'] = name;
	return this;
}
/**
 * @param {String} description
 */
Power.prototype.description = function(description) {
	this.json['description'] = description;
	return this;
}
/**
 * @param {Boolean} boolean
 */
Power.prototype.hidden = function(boolean) {
	this.json['hidden'] = boolean;
	return this;
}
/**
 * TODO: Make this an object enum thing
 * @param {Object} condition
 */
Power.prototype.condition = function(condition) {
	this.json['condition'] = condition;
	return this;
}
/**
 * @param {Array<ApoliBadgeType.Tooltip>} badges
 */
Power.prototype.badges = function(badges) {
	this.json['badges'] = badges.map(badge => badge.getJson());
	return this;
}
/**
 * Custom data that isn't added to the JSON file but useful for registering origins
 * @param {...'slimesurvival:arachnid' | 'slimesurvival:draconian' | 'slimesurvival:sludge'}
 */
Power.prototype.defaultOrigins = function() {
	this.defaultOrigins = Array.from(arguments);
	return this;
}






/**
 * @returns {Object}
 */
Power.prototype.getJson = function() {
	return this.json;
}

/**
 * @returns {Array<String>|Array<>}
 */
Power.prototype.getDefaultOrigins = function() {
	return this.defaultOrigins ?? [];
}

/**
 * @returns {String}
 */
Power.prototype.getId = function() {
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
 * Registers all instances of Power to the datapack event
 * @static
 * @param {Internal.DataPackEventJS} event
 */
Power.register = function(event) {
	Power.instances.forEach(power => power.register(event))
}

/**
 * @param {Internal.DataPackEventJS} event
 */
Power.prototype.register = function(event) {
	event.addJson(this.resourceLocation, this.getJson());
	JsonIO.write('kubejs/generated/temp.json', this.getJson());
}