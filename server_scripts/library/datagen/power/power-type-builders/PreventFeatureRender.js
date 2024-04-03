// priority: 2147483646

/**
 * @param {PowerV2.Builder} powerBuilder
 */
PowerV2.PowerTypeBuilders.PreventFeatureRender = function (powerBuilder) {
	this.powerBuilder = powerBuilder;
	this.json = {
		type: 'origins:prevent_feature_render'
	};
};

/**
 * @param {FeatureRender} feature
 */
PowerV2.PowerTypeBuilders.PreventFeatureRender.prototype.addFeature = function (feature) {
	this.json['feature'] = feature;
	return this;
}

PowerV2.PowerTypeBuilders.PreventFeatureRender.prototype.build = function () {
	mergeObject(this.json, this.powerBuilder.json);
	return this.powerBuilder;
}