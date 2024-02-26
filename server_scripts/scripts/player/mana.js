// priority: 1




/**
 * Mana regeneration go brrr
 */
PlayerEvents.tick(event => {
	const {player, server} = event;
	const maxMana = player.attributes.getValue('slimesurvival:max_mana');
	const passiveManaRegenRate = player.attributes.getValue('slimesurvival:passive_mana_regen_rate');

	let currentMana = player.persistentData.current_mana ?? 0;

	if (currentMana < maxMana) {
		currentMana = Math.min(maxMana, currentMana + passiveManaRegenRate);
		player.persistentData.current_mana = currentMana;
	};

	player.paint({
		mana_display: {
			type: 'text',
			text: 'Current Mana: ' + Math.round(currentMana),
			color: 'blue',
			shadow: true,
			alignX: 'center',
			alignY: 'bottom',
			x: 0,
			y: -100,
			w: 0,
			h: 0
		}
	});
});