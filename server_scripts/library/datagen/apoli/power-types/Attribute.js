// priority: 2147483646



/**
 * Modifies one or more attributes using Attributed Attribute Modifiers
 * @constructor
 * @augments PowerType.Template
 */
PowerType.Attribute = function () {
	PowerType.Template.call(this, 'origins:attribute');
}
PowerType.Attribute.prototype = PowerType.Template.prototype;
PowerType.Attribute.prototype.constructor = PowerType.Attribute;



/**
 * @param {ApoliDataTypes.AttributedAttributeModifier} modifier
 */
PowerType.Attribute.prototype.modifier = function (modifier) {
	this.json['modifier'] = modifier.getJson();
	return this;
}
/**
 * @param {Array<ApoliDataTypes.AttributedAttributeModifier>} modifiers
 */
PowerType.Attribute.prototype.modifiers = function (modifiers) {
	modifierJsons = modifiers.map(modifier => modifier.getJson());
	this.json['modifiers'] = modifierJsons;
	return this;
}
/**
 * @param {Boolean} boolean
 */
PowerType.Attribute.prototype.update_health = function (boolean) {
	this.json['update_health'] = boolean;
	return this;
}