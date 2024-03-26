// priority: 2147483647

/**
 * @typedef {PowerType.Attribute | PowerType.ModifyAttribute | PowerType.Multiple | PowerType.Resource | PowerType.ModifyDamageTaken | PowerType.DisableRegen} PowerType
 */

/**
 * Basic prototype for power types to inherit from
 * @constructor
 * @param {String} type The power type string
 */
PowerType.Template = function(type) {
	this.json = {
		type: type
	};
}

/**
 * @returns {Object}
 */
PowerType.Template.prototype.getJson = function() {
	return this.json;
}