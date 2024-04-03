// priority: 2147483646



/**
 * @constructor
 */
PowerType.PreventSprinting = function () {
	this.json = {};
	this.json['type'] = 'origins:prevent_sprinting'
}
PowerType.PreventSprinting.prototype.getJson = function () {
	return this.json;
}

/**
 * @param {} condition
 */
PowerType.PreventSprinting.prototype.setCondition = function (condition) {
	this.json['condition'] = condition.getJson();
}