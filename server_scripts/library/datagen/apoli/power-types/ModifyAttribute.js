// priority: 2147483646



/**
 * Modifies one or more attributes using Attributed Attribute Modifiers
 * @constructor
 * @augments PowerType.Template
 * @param {String} attribute The namespace and ID of the attribute to apply the modifier(s) to.
 */
PowerType.ModifyAttribute = function (attribute) {
	PowerType.Template.call(this, 'origins:modify_attribute');
	this.json['attribute'] = attribute;
}
PowerType.ModifyAttribute.prototype = PowerType.Template.prototype;
PowerType.ModifyAttribute.prototype.constructor = PowerType.ModifyAttribute;



/**
 * @param {ApoliDataTypes.AttributeModifier} modifier
 */
PowerType.ModifyAttribute.prototype.modifier = function (modifier) {
	this.json['modifier'] = modifier.getJson();
	return this;
}
/**
 * @param {Array<ApoliDataTypes.AttributeModifier>} modifiers
 */
PowerType.ModifyAttribute.prototype.modifiers = function (modifiers) {
	modifierJsons = modifiers.map(modifier => modifier.getJson());
	this.json['modifiers'] = modifierJsons;
	return this;
}