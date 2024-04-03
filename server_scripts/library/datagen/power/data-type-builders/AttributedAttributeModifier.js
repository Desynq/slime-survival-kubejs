// priority: 2147483646

/**
 * @typedef {'addition' | 'multiply_base' | 'multiply_total'} AttributedAttributeModifierOperation
 */

/**
 * @typedef AttributedAttributeModifierJson
 * @property {String} attribute
 * @property {AttributedAttributeModifierOperation} operation
 * @property {Number} value
 * @property {String} [name]
 */

/**
 * @constructor
 */
PowerV2.DataTypeBuilders.AttributedAttributeModifier = function () {
	this.requiredProperties = PowerV2.DataTypeBuilders.AttributedAttributeModifier.REQUIRED_PROPERTIES;
	/** @type {AttributedAttributeModifierJson} */
	this.json = {};
}
PowerV2.DataTypeBuilders.AttributedAttributeModifier.REQUIRED_PROPERTIES = ['attribute', 'operation', 'value'];

/**
 * @param {String} attribute
 */
PowerV2.DataTypeBuilders.AttributedAttributeModifier.prototype.setAttribute = function (attribute) {
	this.json.attribute = attribute;
	return this;
}

/**
 * @param {AttributedAttributeModifierOperation} operation
 */
PowerV2.DataTypeBuilders.AttributedAttributeModifier.prototype.setOperation = function (operation) {
	this.json.operation = operation;
	return this;
}

/**
 * @param {Number} value
 */
PowerV2.DataTypeBuilders.AttributedAttributeModifier.prototype.setValue = function (value) {
	this.json.value = value;
	return this;
}

/**
 * @optional
 * @param {String} name
 */
PowerV2.DataTypeBuilders.AttributedAttributeModifier.prototype.setName = function (name) {
	this.json.name = name;
	return this;
}



/**
 * Returns a JSON-serializable object of the data type
 * @returns {Object}
 */
PowerV2.DataTypeBuilders.AttributedAttributeModifier.prototype.build = function () {
	const missingProps = this.requiredProperties.filter(prop => !this.json.hasOwnProperty(prop));
	if (missingProps.length > 0) {
		throw `Missing the following properties for Attributed Attribute Modifier data type builder: ${missingProps.join(', ')}`
	}

	return this.json
}