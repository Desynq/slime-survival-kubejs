// priority: 1000



/**
 * ! PlayerManaSystem should be renewed whenever the player's origin changes
 * @param {Internal.Player} player
 * @constructor
 */
function PlayerManaSystem(player) {
	this.player = player;
	this.origin = OriginsLibrary.getOriginIdentifier(this.player);
	/**
	 * Arachnids use hunger for mana
	 */
	this.isArachnid = this.origin === 'slimesurvival:arachnid';
}



PlayerManaSystem.prototype.DEFAULT_MAX_MANA = SlimeSurvivalClasses.$ModEntityAttributes.MAX_MANA.defaultValue;
PlayerManaSystem.prototype.MAX_HUNGER = 20;
PlayerManaSystem.prototype.MAX_SATURATION = 20;
PlayerManaSystem.prototype.ARACHNID_MANA_COEFFICIENT = 5;




/**
 * @returns {number}
 */
PlayerManaSystem.prototype.getCurrentMana = function() {
	const { player } = this;
	if (this.isArachnid) {
		return (player.foodLevel + player.saturation) * this.ARACHNID_MANA_COEFFICIENT;
	}
	return player.persistentData.current_mana ?? 0;
}

/**
 * @returns {number}
 */
PlayerManaSystem.prototype.getMaxMana = function() {
	if (this.isArachnid) {
		return (this.MAX_HUNGER + this.MAX_SATURATION) * this.ARACHNID_MANA_COEFFICIENT;
	}
	return this.player.attributes.getValue('slimesurvival:max_mana');
}

/**
 * @returns {number}
 */
PlayerManaSystem.prototype.getPassiveManaRegenRate = function () {
	return this.player.attributes.getValue('slimesurvival:passive_mana_regen_rate');
}




/**
 * Resets the player's mana to their max mana
 * @returns {void}
 */
PlayerManaSystem.prototype.resetMana = function () {
	this.updateMana(this.getMaxMana());
}

/**
 * Changes current mana to a different value
 * @param {number} newAmount
 * @returns {void}
 */
PlayerManaSystem.prototype.updateMana = function (newAmount) {
	const { player } = this;
	if (this.isArachnid) {
		/**
		 * The arachnid mana system is kind of complex, so we're just deferring it to a helper function entirely
		 */
		this.arachnidUpdateMana(newAmount);
		return;
	}
	player.persistentData.current_mana = newAmount;
}

/**
 * @private
 * @param {number} newAmount
 * @returns {void}
 */
PlayerManaSystem.prototype.arachnidUpdateMana = function (newAmount) {
	const { player } = this;

	let newAmountAsFood = Math.floor(newAmount / this.ARACHNID_MANA_COEFFICIENT);
	let totalFood = player.foodLevel + player.saturation;

	/**
	 * No need to perform a change in hunger if there is no change in the first place
	 */
	if (totalFood === newAmountAsFood) return;
	/**
	 * If food is lower than new amount:
	 * TODO: still haven't figured out the best way of doing artificial hunger regeneration using mana
	 */
	if (totalFood < newAmountAsFood) {
		return;
	}
	/**
	 * If food is higher than new amount:
	 * * Decrease saturation first until exhausted or 0, then decrease hunger until exhausted or 0
	 */
	if (totalFood > newAmountAsFood) {
		player.saturation = $Mth.clamp(newAmountAsFood - 20, 0, 20);
		player.foodLevel = $Mth.clamp(newAmountAsFood - player.saturation, 0, 20);
	}
}



/**
 * @returns {void}
*/
PlayerManaSystem.prototype.applyPassiveManaRegen = function() {
	const passiveManaRegenRate = this.getPassiveManaRegenRate();
	if (passiveManaRegenRate <= 0) return; // no point in regenerating mana if you can't in the first place

	const maxMana = this.getMaxMana();
	let currentMana = this.getCurrentMana();

	if (currentMana < maxMana) {
		currentMana = Math.min(maxMana, currentMana + passiveManaRegenRate);
		this.updateMana(currentMana);
	}
}



/**
 * Draws mana statistics on HUD
 * @returns {void}
 */
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
}