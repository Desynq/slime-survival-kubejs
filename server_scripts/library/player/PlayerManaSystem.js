// priority: 1000



/**
 * @param {Internal.Player} player
 * @constructor
 */
function PlayerManaSystem(player) {
	this.player = player;
}


PlayerManaSystem.prototype.DEFAULT_MAX_MANA = SlimeSurvivalClasses.$ModEntityAttributes.MAX_MANA.defaultValue;
PlayerManaSystem.prototype.MAX_HUNGER = 20;
PlayerManaSystem.prototype.MAX_SATURATION = 20;
PlayerManaSystem.prototype.ARACHNID_MANA_COEFFICIENT = 5;



/**
 * @returns {String}
 */
Object.defineProperty(PlayerManaSystem.prototype, 'origin', {
	get: function () {
		return OriginsLibrary.getOriginIdentifier(this.player);
	}
});

/**
 * @returns {Boolean}
 */
Object.defineProperty(PlayerManaSystem.prototype, 'isArachnid', {
	get: function () {
		return this.origin === 'slimesurvival:arachnid';
	}
});

/**
 * @returns {number}
 */
Object.defineProperty(PlayerManaSystem.prototype, 'currentMana', {
	get: function () {
		if (this.isArachnid) {
			return (this.player.foodLevel + this.player.saturation) * this.ARACHNID_MANA_COEFFICIENT;
		}
		return this.player.persistentData.getInt('current_mana');
	}
});

/**
 * @returns {Number}
 */
Object.defineProperty(PlayerManaSystem.prototype, 'maxMana', {
	get: function () {
		if (this.isArachnid) {
			return (this.MAX_HUNGER + this.MAX_SATURATION) * this.ARACHNID_MANA_COEFFICIENT;
		}
		return this.player.attributes.getValue(SlimeSurvivalClasses.$ModEntityAttributes.MAX_MANA);
	}
});

/**
 * @returns {Number}
 */
Object.defineProperty(PlayerManaSystem.prototype, 'passiveManaRegenRate', {
	get: function () {
		return this.player.attributes.getValue(SlimeSurvivalClasses.$ModEntityAttributes.PASSIVE_MANA_REGEN_RATE);
	}
});




/**
 * Resets the player's mana to their max mana
 * @returns {void}
 */
PlayerManaSystem.prototype.resetMana = function () {
	this.updateMana(this.maxMana);
}

/**
 * Changes current mana to a different value
 * @param {number} newAmount
 * @returns {void}
 */
PlayerManaSystem.prototype.updateMana = function (newAmount) {
	if (this.isArachnid) {
		/**
		 * The arachnid mana system is kind of complex, so we're just deferring it to a helper function entirely
		 */
		this.arachnidUpdateMana(newAmount);
		return;
	}
	this.player.persistentData.putInt('current_mana', newAmount);
}

/**
 * @private
 * @param {number} newAmount
 * @returns {void}
 */
PlayerManaSystem.prototype.arachnidUpdateMana = function (newAmount) {
	let newAmountAsFood = Math.floor(newAmount / this.ARACHNID_MANA_COEFFICIENT);
	let totalFood = this.player.foodLevel + this.player.saturation;

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
		this.player.saturation = $Mth.clamp(newAmountAsFood - 20, 0, 20);
		this.player.foodLevel = $Mth.clamp(newAmountAsFood - this.player.saturation, 0, 20);
	}
}



/**
 * @returns {void}
*/
PlayerManaSystem.prototype.applyPassiveManaRegen = function() {
	if (this.passiveManaRegenRate <= 0) return; // no point in regenerating mana if you can't in the first place

	if (this.currentMana < this.maxMana) {
		let newMana = Math.min(this.maxMana, this.currentMana + this.passiveManaRegenRate);
		this.updateMana(newMana);
	}
}



/**
 * Draws mana statistics on HUD
 * @returns {void}
 */
PlayerManaSystem.prototype.displayMana = function() {
	this.player.paint({
		mana_display: {
			type: 'text',
			text: 'Mana: ' + Math.round(this.currentMana) + ' / ' + Math.round(this.maxMana),
			color: this.currentMana <= this.maxMana / 2 ? 'red' : 'blue',
			shadow: true,
			alignX: 'left',
			alignY: 'top',
			x: 10,
			y: 25,
			scale: 2
		}
	});
}