// priority: 1



/**
 * Mana regeneration go brrr
 */
PlayerEvents.tick(event => {
	const {player, server} = event;

	const playerManaSystem = new PlayerManaSystem(player);

	playerManaSystem.applyPassiveManaRegen();
	playerManaSystem.displayMana();
});



PlayerEvents.respawned(event => {
	const { player } = event;
	
	const playerManaSystem = new PlayerManaSystem(player);
	playerManaSystem.updateMana(playerManaSystem.getMaxMana());
});