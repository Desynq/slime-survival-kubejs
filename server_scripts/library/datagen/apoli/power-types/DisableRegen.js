// priority: 2147483646



/**
 * @constructor
 */
PowerType.DisableRegen = function () {
	this.json = {};
	this.json['type'] = 'origins:disable_regen'
}
PowerType.DisableRegen.prototype.getJson = function () {
	return this.json;
}