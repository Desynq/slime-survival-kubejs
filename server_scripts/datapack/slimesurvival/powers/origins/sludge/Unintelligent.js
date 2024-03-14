// priority: 10

(function () {
	let format = Color.TEXT;
	let defaultMaxMana = 100;
	let targetMaxMana = 25;

	let powerJson = {
		name: 'Unintelligent',
		description: 'Sludges are nothing more than just a single-cell amoeba with one pre-programmed instructions (eat). Therefore, it comes to reason that their magical prowess is, well, bad would be putting it lightly.',
		badges: [
			{
				type: 'origins:tooltip',
				sprite: 'origins:textures/gui/badge/info.png',
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

	new ApoliPower(
		'slimesurvival:powers/origins/sludge/unintelligent.json',
		powerJson
	);

})();