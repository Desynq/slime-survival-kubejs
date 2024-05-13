// priority: 0

PlayerEvents.respawned(event => new PlayerRespawnedEvent(event));

PlayerEvents.inventoryChanged(event => new PlayerInventoryChangedEvent(event));

PlayerEvents.tick(event => {
	const { player } = event;
	new PlayerAdventureModeCheck(player);
});