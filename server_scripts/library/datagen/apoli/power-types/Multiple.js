// priority: 2147483646



/**
 * Modifies one or more attributes using Attributed Attribute Modifiers
 * @constructor
 * @augments PowerType.Template
 */
PowerType.Multiple = function () {
	PowerType.Template.call(this, 'origins:multiple');
}
PowerType.Multiple.prototype.getJson = PowerType.Template.prototype.getJson;
PowerType.Multiple.prototype.constructor = PowerType.Multiple;


/**
 * @param {String} powerKey
 * @param {PowerType} powerType
 */
PowerType.Multiple.prototype.addPower = function (powerKey, powerType) {
	this.json[powerKey] = powerType.getJson();
	return this;
}