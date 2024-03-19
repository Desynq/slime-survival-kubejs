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
	playerManaSystem.resetMana();
});



/**
 * Reset mana when player chooses an origin
 */
PlayerEvents.advancement(event => {
	const { player } = event;
	const advancement = event.advancement.advancement;

	const advancementIdString = advancement.getId().toString();

	const playerManaSystem = new PlayerManaSystem(player);

	if (advancementIdString.startsWith('slimesurvival:triggers/chose_origin/')) {
		player.tell('chose origin moment');
		playerManaSystem.resetMana();
		Advancement.revoke(player, advancement);
	}
});


EntityEvents.death(event => {
	const { entity, player } = event;
	if (entity instanceof $Player) {
		player.tell('imagine dying bozo');
	}
});