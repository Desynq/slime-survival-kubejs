// priority: 2147483646

PowerV2.Builder = function () {
	this.resourceLocation = undefined;
	this.json = {};
	this.defaultOrigins = [];
}

PowerV2.Builder.prototype.setResourceLocation = function (resourceLocation) {
	this.resourceLocation = resourceLocation;
}

/**
 * @param {String} name
 */
PowerV2.Builder.prototype.setName = function (name) {
	this.json['name'] = name;
	return this;
}

/**
 * @param {String} description
 */
PowerV2.Builder.prototype.setDescription = function (description) {
	this.json['description'] = description;
	return this;
}

/**
 * @param {Boolean} boolean
 */
PowerV2.Builder.prototype.setHidden = function (boolean) {
	this.json['hidden'] = boolean;
	return this;
}

PowerV2.Builder.prototype.addTooltipBadge = function () {
	return new PowerV2.BadgeBuilders.Tooltip(this);
}



/**
 * @typedef {'slimesurvival:arachnid' | 'slimesurvival:draconian' | 'slimesurvival:sludge'} SlimeSurvivalOrigins
 */

/**
 * Custom data that isn't added to the JSON file but useful for registering origins
 * @param {...SlimeSurvivalOrigins}
 */
PowerV2.Builder.prototype.setDefaultOrigins = function () {
	this.defaultOrigins = Array.from(arguments);
	return this;
}



PowerV2.Builder.prototype.build = function () {
	if (this.resourceLocation === undefined) {
		throw 'Error: Tried to build power with an undefined resource location'
	}
	return new PowerV2(this.resourceLocation, this.json, this.defaultOrigins);
}





PowerV2.Builder.prototype.setPowerType = function () {
	return new PowerV2.PowerTypeChooser(this);
};





/**
 * @param {PowerV2.Builder} powerBuilder
 */
PowerV2.PowerTypeChooser = function (powerBuilder) {
	this.powerBuilder = powerBuilder;
}

PowerV2.PowerTypeChooser.prototype.PreventFeatureRender = function () {
	return new PowerV2.PowerTypeBuilders.PreventFeatureRender(this.powerBuilder);
}



/**
 * @callback AttributePowerBuilderCallback
 * @param {PowerV2.PowerTypeBuilders.Attribute} builder
 * @returns {Object} JSON-serializable object from building the callback builder
 */

/**
 * @param {AttributePowerBuilderCallback} attributePowerBuilderCallback
 */
PowerV2.PowerTypeChooser.prototype.Attribute = function (attributePowerBuilderCallback) {
	const builder = new PowerV2.PowerTypeBuilders.Attribute();
	const powerTypeJson = attributePowerBuilderCallback(builder);
	mergeObject(powerTypeJson, this.json);
	return this;
}

new PowerV2.Builder()
	.setPowerType().Attribute(attrPower => {
		attrPower.setModifier(modifier => {
			modifier.setAttribute('minecraft:generic.max_health')
			.setOperation('addition')
			.setValue(-5)
			.setName('Arachnid fragile power')
			.build()
		})
		.build()
	})