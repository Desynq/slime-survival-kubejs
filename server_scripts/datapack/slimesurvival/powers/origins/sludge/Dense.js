// priority: 101

(function () {
	const format = Color.TEXT;
	const defaultMaxHealth = $Attributes.MAX_HEALTH.defaultValue;
	const targetMaxHealth = 30;

	const resourceLocation = 'slimesurvival:powers/origins/sludge/dense.json';

	let powerJson = {
		name: 'Dense',
		description: 'Sludges are composed of a large thick mucus layer that gives them a higher constitution.',
		badges: [
			{
				type: 'origins:tooltip',
				sprite: 'slimesurvival:textures/item/zombie_brain.png',
				text: `${format.red}Base max health is ${targetMaxHealth}`
			}
		],

		type: 'origins:attribute',
		modifier: {
			name: 'Sludge Dense Buff',
			attribute: 'minecraft:generic.max_health',
			value: targetMaxHealth - defaultMaxHealth,
			operation: 'addition'
		}
	};

	new ApoliPower(resourceLocation, powerJson, ['slimesurvival:sludge']);

})();