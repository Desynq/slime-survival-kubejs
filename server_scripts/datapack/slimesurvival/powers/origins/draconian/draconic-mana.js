// priority: 101

(function () {
	let format = Color.TEXT;
	let defaultMaxMana = SlimeSurvivalClasses.$ModEntityAttributes.MAX_MANA.defaultValue;
	let targetMaxMana = 200;

	let resourceLocation = 'slimesurvival:powers/origins/draconian/draconic-mana.json';

	let powerJson = {
		name: 'Draconic Mana',
		description: 'As a dragon, your mana knew no bounds; now, cursed as a human, your mana pool is greatly diminished yet still significant.',
		badges: [
			{
				type: 'origins:tooltip',
				sprite: 'origins:textures/gui/badge/info.png',
				text: `${format.blue}Base max mana is ${targetMaxMana}`
			}
		],

		type: 'origins:attribute',
		modifier: {
			name: 'Draconian Max Mana Buff',
			attribute: 'slimesurvival:max_mana',
			value: targetMaxMana - defaultMaxMana,
			operation: 'addition'
		}
	};

	new ApoliPower(resourceLocation, powerJson, ['slimesurvival:draconian']);
})();