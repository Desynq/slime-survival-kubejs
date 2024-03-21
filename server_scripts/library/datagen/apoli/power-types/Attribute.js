// priority: 2147483647



/**
 * Modifies one or more attributes using Attributed Attribute Modifiers
 * @constructor
 */
PowerType.Attribute = function() {
	this.json = {
		type: 'origins:attribute',
		'update_health': true
	};
}

/**
 * @param {ApoliDataTypes.AttributedAttributeModifier} modifier
 */
PowerType.Attribute.prototype.modifier = function(modifier) {
	this.json['modifier'] = modifier.getJson();
	return this;
}
/**
 * @param {Array<ApoliDataTypes.AttributedAttributeModifier>} modifiers
 */
PowerType.Attribute.prototype.modifiers = function(modifiers) {
	modifierJsons = modifiers.map(modifier => modifier.getJson());
	this.json['modifiers'] = modifierJsons;
	return this;
}
/**
 * @param {Boolean} boolean
 */
PowerType.Attribute.prototype.update_health = function(boolean) {
	this.json['update_health'] = boolean;
	return this;
}



/**
 * @returns {Object}
 */
PowerType.Attribute.prototype.getJson = function() {
	return this.json;
}