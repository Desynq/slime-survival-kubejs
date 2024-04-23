// priority: -1

ServerEvents.highPriorityData(event => {
	/** @deprecated */
	ApoliPower.register(event);

	Origin.register(event);

	/** @deprecated */
	Power.register(event);

	/**
	 * @see Advancement
	 */
	Advancement.instances.forEach(advancement => {
		event.addJson(advancement.getResourceLocation(), advancement.getJson())
	});

	EventFlags.hasReloaded = true;
});



/**
 * @param {Internal.ServerPlayer} player
 * @returns {void}
 */
function kickPlayerAfterReload(player) {
	if (player.tags.contains('reload_immune')) return;
	player.connection.disconnect('Reloading data-driven assets...');
}

ServerEvents.tick(event => {
	const { server } = event;
	if (EventFlags.hasReloaded) {
		server.playerList.players.forEach(player => kickPlayerAfterReload(player));
		EventFlags.hasReloaded = false;
	}
});