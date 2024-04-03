// priority: 2147483646

/**
 * @param {PowerV2.Builder} powerBuilder
 */
PowerV2.BadgeBuilders.Tooltip = function (powerBuilder) {
	this.powerBuilder = powerBuilder;
	this.json = {
		type: 'origins:tooltip'
	}
}

/**
 * @param {String} sprite
 */
PowerV2.BadgeBuilders.Tooltip.prototype.setSprite = function (sprite) {
	this.json.sprite = sprite;
	return this;
}

/**
 * @param {String} text
 */
PowerV2.BadgeBuilders.Tooltip.prototype.setText = function (text) {
	this.json.text = text;
	return this;
}

PowerV2.BadgeBuilders.Tooltip.prototype.build = function () {
	const powerJson = this.powerBuilder.json;

	if (!Array.isArray(powerJson['badges'] )) {
		powerJson['badges'] = [];
	}
	powerJson['badges'].push(this.json);

	return this.powerBuilder;
}