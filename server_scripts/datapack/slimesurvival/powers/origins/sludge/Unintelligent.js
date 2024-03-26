// priority: 101

(function () {
	const format = Color.TEXT;
	const defaultMaxMana = SlimeSurvivalClasses.$ModEntityAttributes.MAX_MANA.defaultValue;
	const targetMaxMana = 25;

	const resourceLocation = 'slimesurvival:powers/origins/sludge/unintelligent.json';

	let powerJson = {
		name: 'Unintelligent',
		description: 'Sludges are nothing more than just a single-cell amoeba with one pre-programmed instructions (eat). Therefore, it comes to reason that their magical prowess is, well, bad would be putting it lightly.',
		badges: [
			{
				type: 'origins:tooltip',
				sprite: 'slimesurvival:textures/item/zombie_brain.png',
				text: `${format.red}Base max mana is ${targetMaxMana} (good luck casting any spells)`
			}
		],

		type: 'origins:attribute',
		modifier: {
			name: 'Sludge Unintelligent Debuff',
			attribute: 'slimesurvival:max_mana',
			value: targetMaxMana - defaultMaxMana,
			operation: 'addition'
		}
	};

	new ApoliPower(resourceLocation, powerJson, ['slimesurvival:sludge']);

})();