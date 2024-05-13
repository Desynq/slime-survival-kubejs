// priority: 2147483647

/**
 * @param {Internal.ServerPlayer} player
 */
const PlayerAdventureModeCheck = function (player) {
	this.player = player;

	this.setGameMode();
}

PlayerAdventureModeCheck.prototype.checkForAdventureMarker = function () {
	const player = this.player;

	let entities = player.level.getEntitiesWithin(AABB.of(player.x - 256, player.y - 256, player.z - 256, player.x + 256, player.y + 256, player.z + 256));

	for (let i = 0; i < entities.size(); i++) {
		let entity = entities.get(i);
		if (!(entity.type === 'minecraft:marker' && entity.tags.contains('adventure_marker'))) continue;

		let distance = entity.nbt.getCompound('data').getInt('distance');
		return player.distanceToEntity(entity) <= distance;
	}
}



PlayerAdventureModeCheck.prototype.setGameMode = function () {
	const shouldBeInAdventureMode = this.checkForAdventureMarker();

	/** @see {Internal.ServerPlayerGameMode} */
	const gamemode = this.player.gameMode.getGameModeForPlayer().getName();

	if (gamemode === 'survival' && shouldBeInAdventureMode) {
		this.player.setGameMode('adventure');
		return;
	}

	if (gamemode === 'adventure' && !shouldBeInAdventureMode) {
		this.player.setGameMode('survival');
		return;
	}
}