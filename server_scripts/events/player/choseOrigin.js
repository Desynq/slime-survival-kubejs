// priority: 1


(function () {
	/**
	 * @param {String} advancementIdString
	 */
	function getOriginId(advancementIdString) {
		const regex = /slimesurvival:triggers\/chose_origin\/(.*)/;
		return `slimesurvival:${advancementIdString.match(regex)[1]}`;
	}

	/**
	 * Reset mana and hunger when player chooses an origin
	 */
	PlayerEvents.advancement(event => {
		const { player } = event;

		const advancement = event.advancement.advancement;
		const advancementIdString = advancement.getId().toString();
		if (!advancementIdString.startsWith('slimesurvival:triggers/chose_origin/')) {
			event.exit();
		}

		const originId = getOriginId(advancementIdString);
		const mana = new PlayerManaSystem(player);
		const { foodData: hunger } = player;

		mana.resetMana();
		hunger.foodLevel = 20;
		hunger.saturation = 5;
		hunger.exhaustion = 0;
		player.tell(`chose ${originId}`);

		Advancement.revoke(player, advancement);
	});
})();