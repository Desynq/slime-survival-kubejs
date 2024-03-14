// priority: 2147483647

/**
 * @typedef {Object} Icon
 * @property {string} item
 */

/**
 * @param {string} resourceLocation
 * @param {string[]} defaultPowers
 * @param {Icon} icon
 * @param {number} order
 * @param {number} impact
 * @param {string} name
 * @param {string} description
 * @constructor
 */
function Origin(resourceLocation, defaultPowers, icon, order, impact, name, description) {
	this.resourceLocation = resourceLocation;
	this.defaultPowers = defaultPowers;
	this.icon = icon;
	this.order = order;
	this.impact = impact;
	this.name = name;
	this.description = description;

	Origin.instances.push(this);
};

/**
 * @type {Origin[]}
 */
Origin.instances = [];



Origin.prototype.getResourceLocation = function () {
	return this.resourceLocation;
};

Origin.prototype.getJson = function () {
	return {
		powers: this.defaultPowers,
		icon: this.icon,
		order: this.order,
		impact: this.impact,
		name: this.name,
		description: this.description
	}
};

Origin.prototype.getOriginId = function () {
	/**
	 * The origin identifier is made up of a namespace and path.
	 * The identifier is derived from the resource location but omits the first directory after the namespace ('slimesurvival').
	 * This is because the first directory serves to identify what type the identifier is ('origins' in this case).
	 * Additionally, '.json' is omitted as identifiers don't require the .json extension to function in-game
	 * I.e., 'slimesurvival:origins/arachnid.json' => 'slimesurvival:arachnid'
	 */
	return this.resourceLocation.replace(/^([^:]+):[^/]+\/([^\.]+)\.json$/, '$1:$2');
};