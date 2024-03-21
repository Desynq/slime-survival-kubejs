// priority: 2147483646



/**
 * @constructor
 * @param {String} attribute ID of the attribute which will be modified by this modifier.
 * @param {'addition' | 'multiply_base' | 'multiply_total'} operation The operation which will be performed by this modifier.
 * @param {Number} value
 * @param {String} [name]
 */
ApoliDataTypes.AttributedAttributeModifier = function(attribute, operation, value, name) {
	this.json = {};
	this.json['attribute'] = attribute;
	this.json['operation'] = operation;
	this.json['value'] = value;
	if (typeof name !== 'undefined') this.json['name'] = name;
}

/**
 * Builds the data type into a JSON object.
 * @returns {Object}
 */
ApoliDataTypes.AttributedAttributeModifier.prototype.getJson = function() {
	return this.json;
}