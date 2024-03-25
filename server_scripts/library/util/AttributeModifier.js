// priority: 2147483647



/**
 * @param {Internal.LivingEntity} entity
 * @param {Internal.Attribute} attribute
 * @param {Internal.UUID} modifierUUID
 * @param {String} modifierName
 * @constructor
 */
function AttributeModifierUtil(entity, attribute, modifierUUID, modifierName) {
	this.entity = entity;
	this.attribute = attribute;
	this.modifierUUID = modifierUUID;
	this.modifierName = modifierName;
}

/**
 * @returns {Internal.AttributeInstance}
 */
Object.defineProperty(AttributeModifierUtil.prototype, 'attributeInstance', {
	get: function () {
		return this.entity.attributes.getInstance(this.attribute);
	}
});

/**
 * @returns {Boolean}
 */
Object.defineProperty(AttributeModifierUtil.prototype, 'hasModifier', {
	get: function () {
		return this.entity.attributes.hasModifier(this.attribute, this.modifierUUID);
	}
});

/**
 * @returns {Number}
 */
Object.defineProperty(AttributeModifierUtil.prototype, 'modifierValue', {
	get: function () {
		return this.hasModifier ? this.entity.attributes.getModifierValue(this.attribute, this.modifierUUID) : 0;
	}
});


AttributeModifierUtil.prototype.removeModifier = function () {
	this.attributeInstance.removeModifier(this.modifierUUID);
}

/**
 * @param {Number} value
 * @param {Internal.AttributeModifier$Operation_} operation
 */
AttributeModifierUtil.prototype.addPermanentModifier = function (value, operation) {
	const modifier = new $AttributeModifier(this.modifierUUID, this.modifierName, value, operation);
	this.attributeInstance.addPermanentModifier(modifier);
}


/**
 * Removes and/or adds attribute modifier based on two respective booleans.
 * Useful for conditional attribute modifiers.
 * @param {Boolean} shouldRemove Boolean determining whether modifier should be removed.
 * @param {Boolean} shouldAdd Boolean determing whether modifier should be added.
 * @param {Number} value
 * @param {Internal.AttributeModifier$Operation_} operation
 * @returns {Boolean} Returns whether the attribute modifier was added or not
 */
AttributeModifierUtil.prototype.conditional = function (shouldRemove, shouldAdd, value, operation) {
	const hasModifier = this.hasModifier;
	if (hasModifier && shouldRemove) this.removeModifier();
	if (!hasModifier && shouldAdd) {
		this.addPermanentModifier(value, operation)
		return true;
	};
	return false;
}