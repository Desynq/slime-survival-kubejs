// priority: 1



/**
 * Mana regeneration go brrr
 */
PlayerEvents.tick(event => {
	const { player } = event;

	const mana = new PlayerManaSystem(player);

	mana.applyPassiveManaRegen();
	mana.displayMana();
});



PlayerEvents.respawned(event => {
	const { player } = event;
	
	const mana = new PlayerManaSystem(player);
	mana.resetMana();
});