// priority: 2147483646

/**
 * @typedef {'add_base_early' | 'multiply_base_additive' | 'multiply_base_multiplicative' | 'add_base_late' | 'min_base' | 'max_base' | 'set_base' | 'multiply_total_additive' | 'multiply_total_multiplicative' | 'min_total' | 'max_total' | 'set_total'} AttributeModifierOperation
 */


/**
 * @constructor
 * @param {AttributeModifierOperation} operation The operation which will be performed by this modifier.
 * @param {Number} value The value to use for the modifier operation.
 * @param {String} [resource] If specified, the value of this power will be used instead of the value specified in the @param value field.
 * @param {String} [name] A descriptive name for the modifier, describing where it comes from.
 * @param {ApoliDataTypes.AttributeModifier} [modifier]
 */
ApoliDataTypes.AttributeModifier = function(operation, value, resource, name, modifier) {
	this.json = {};
	this.json['operation'] = operation;
	this.json['value'] = value;
	if (typeof resource !== 'undefined') this.json['resource'] = resource;
	if (typeof name !== 'undefined') this.json['name'] = name;
	if (typeof modifier !== 'undefined') this.json['modifier'] = modifier.getJson();
}

/**
 * @returns {Object}
 */
ApoliDataTypes.AttributeModifier.prototype.getJson = function() {
	return this.json;
}