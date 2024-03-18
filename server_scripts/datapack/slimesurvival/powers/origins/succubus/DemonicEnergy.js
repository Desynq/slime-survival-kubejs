// priority: 101

(function () {
	let format = Color.TEXT;
	let defaultMaxMana = SlimeSurvivalClasses.$ModEntityAttributes.MAX_MANA.defaultValue;
	let targetMaxMana = 250;

	let resourceLocation = 'slimesurvival:powers/origins/succubus/demonic-energy.json';

	let powerJson = {
		name: 'Demonic Energy',
		description: 'Demons are able to control mana throughout their entire body and therefore can store mana far more easily.',
		badges: [
			{
				type: 'origins:tooltip',
				sprite: 'origins:textures/gui/badge/info.png',
				text: `${format.red}Base max mana is ${targetMaxMana}`
			}
		],

		type: 'origins:attribute',
		modifier: {
			name: 'Succubus Demonic Energy Buff',
			attribute: 'slimesurvival:max_mana',
			value: targetMaxMana - defaultMaxMana,
			operation: 'addition'
		}
	};

	new ApoliPower(resourceLocation, powerJson, ['slimesurvival:succubus']);
})();