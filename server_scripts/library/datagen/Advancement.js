// priority: 2147483647



/**
 * @param {String} resourceLocation
 * @param {Object} json
 * @constructor
 */
function Advancement(resourceLocation, json) {
	this.resourceLocation = resourceLocation;
	this.json = json;

	Advancement.instances.push(this);
}

/**
 * @static
 * @type {Advancement[]}
 */
Advancement.instances = [];

/**
 * @static
 * @param {Internal.ServerPlayer} player
 * @param {Internal.Advancement} advancement
 * @returns {Boolean}
 */
Advancement.revoke = function (player, advancement) {
	const advancementProgress = player.advancements.getOrStartProgress(advancement);
	if (!advancementProgress.hasProgress()) {
		return false;
	}
	advancementProgress.completedCriteria.forEach(criteria => {
		player.advancements.revoke(advancement, criteria);
	});
	return true;
}



/**
 * @returns {String}
 */
Advancement.prototype.getResourceLocation = function () {
	return this.resourceLocation;
}

/**
 * @returns {Object}
 */
Advancement.prototype.getJson = function () {
	return this.json
}