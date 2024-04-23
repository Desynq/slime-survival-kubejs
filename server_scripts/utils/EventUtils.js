// priority: 0

const EventUtils = {};

/**
 * @param {Internal.Player} player
 */
EventUtils.KickPlayerAfterReload = function (player) {
	if (player.tags.contains('reload_immune')) {
		return
	}

	player.connection.disconnect('Reloading data-driven assets...');
}





const EventFlags = {};