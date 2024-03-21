// priority: 2147483646



/**
 * Modifies one or more attributes using Attributed Attribute Modifiers
 * @constructor
 * @augments PowerType.Template
 * @param {Number} min
 * @param {Number} max
 */
PowerType.Resource = function (min, max) {
	PowerType.Template.call(this, 'origins:resource');
	this.json['min'] = min;
	this.json['max'] = max;
}
PowerType.Resource.prototype = PowerType.Template.prototype;
PowerType.Resource.prototype.constructor = PowerType.Resource;



/**
 * @param {Number} startValue
 */
PowerType.Resource.prototype.startValue = function (startValue) {
	this.json['start_value'] = startValue;
	return this;
}