// priority: 2147483646



/**
 * Modifies one or more attributes using Attributed Attribute Modifiers
 * @constructor
 * @augments PowerType.Template
 */
PowerType.Simple = function () {
	PowerType.Template.call(this, 'origins:simple');
}
PowerType.Simple.prototype.getJson = PowerType.Template.prototype.getJson;
PowerType.Simple.prototype.constructor = PowerType.Simple;