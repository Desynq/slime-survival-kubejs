// priority: 100000



/**
 * @param {Internal.Player} player
 * @constructor
 */
function PlayerManaSystem(player) {
	this.player = player;
}



PlayerManaSystem.prototype.getCurrentMana = function() {
	return this.player.persistentData.current_mana ?? 0;
};

PlayerManaSystem.prototype.getMaxMana = function() {
	return this.player.attributes.getValue('slimesurvival:max_mana');
};

PlayerManaSystem.prototype.getPassiveManaRegenRate = function () {
	return this.player.attributes.getValue('slimesurvival:passive_mana_regen_rate');
};



PlayerManaSystem.prototype.updateMana = function(newAmount) {
	this.player.persistentData.current_mana = newAmount;
};





PlayerManaSystem.prototype.applyPassiveManaRegen = function() {
	const maxMana = this.getMaxMana();
	const passiveManaRegenRate = this.getPassiveManaRegenRate();
	let currentMana = this.getCurrentMana();

	if (currentMana < maxMana) {
		currentMana = Math.min(maxMana, currentMana + passiveManaRegenRate);
		this.updateMana(currentMana);
	}
};





PlayerManaSystem.prototype.displayMana = function() {
	let currentMana = this.getCurrentMana();
	let maxMana = this.getMaxMana();

	this.player.paint({
		mana_display: {
			type: 'text',
			text: 'Mana: ' + Math.round(currentMana) + ' / ' + Math.round(maxMana),
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
};