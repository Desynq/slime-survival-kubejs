// priority: 1

ServerEvents.highPriorityData(event => {
	ApoliPower.register(event);
	Origin.register(event);

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
	player.connection.disconnect('Reloading data-driven assets...');
}

ServerEvents.tick(event => {
	const { server } = event;
	if (EventFlags.hasReloaded) {
		server.playerList.players.forEach(player => kickPlayerAfterReload(player));
		EventFlags.hasReloaded = false;
	}
});