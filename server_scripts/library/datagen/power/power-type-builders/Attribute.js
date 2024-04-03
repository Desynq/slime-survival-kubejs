// priority: 2147483646

/**
 * @typedef AttributePowerTypeJson
 * @property {String} type
 * @property {AttributedAttributeModifierJson} [modifier]
 * @property {Array<AttributedAttributeModifierJson>} [modifiers]
 */

/**
 * @constructor
 */
PowerV2.PowerTypeBuilders.Attribute = function () {
	/** @type {AttributePowerTypeJson} */
	this.json = {
		type: 'origins:attribute'
	};
};



/**
 * @callback ModifierBuilderCallback
 * @param {PowerV2.DataTypeBuilders.AttributedAttributeModifier} modifierBuilder
 */

/**
 * @optional
 * @param {ModifierBuilderCallback} modifierCallback
 */
PowerV2.PowerTypeBuilders.Attribute.prototype.setModifier = function (modifierCallback) {
	const modifierBuilder = new PowerV2.DataTypeBuilders.AttributedAttributeModifier();
	this.json.modifier = modifierCallback(modifierBuilder);
	return this;
}

/**
 * @optional
 * @param {Array<ModifierBuilderCallback>} modifierCallbackArray
 */
PowerV2.PowerTypeBuilders.Attribute.prototype.setModifiers = function (modifierCallbackArray) {
	this.json.modifiers = modifierCallbackArray.map(
		modifierCallback => modifierCallback(new PowerV2.DataTypeBuilders.AttributedAttributeModifier())
	);
	return this;
}



/**
 * @return {AttributePowerTypeJson}
 */
PowerV2.PowerTypeBuilders.Attribute.prototype.build = function () {
	return this.json;
}