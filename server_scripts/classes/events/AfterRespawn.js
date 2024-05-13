// priority: 2147483647

/**
 * @param {Internal.SimplePlayerEventJS} event
 */
const PlayerRespawnedEvent = function (event) {
	this.event = event;
	this.player = event.player;
	this.server = event.server;

	this.server.scheduleInTicks(1, callback => {
		this.player.heal(this.getMaxHealth());
	});
};


PlayerRespawnedEvent.prototype.getTimeSinceDeath = function () {
	return this.player.stats.timeSinceDeath;
}

PlayerRespawnedEvent.prototype.getMaxHealth = function () {
	return this.player.attributes.getValue($Attributes.MAX_HEALTH);
}