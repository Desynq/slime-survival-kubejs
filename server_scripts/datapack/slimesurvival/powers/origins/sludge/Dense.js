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
				sprite: 'minecraft:textures/item/slime_ball.png',
				text: `${format.blue}Base max health is ${targetMaxHealth}`
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




function SludgeDensePower() {
	this.defaultMaxHealth = $Attributes.MAX_HEALTH.defaultValue;
	this.targetMaxHealth = 30;

	new PowerV2.Builder()
		.setPowerType().Attribute(this.attributePowerType)
		.setName('Dense')
		.setDescription('Sludges are composed of a large thick mucus layer that gives them a higher constitution.')
		.setDefaultOrigins('slimesurvival:sludge')
		.setResourceLocation('slimesurvival:powers/origins/sludge/dense.json')
		.addTooltipBadge()
		.build();
}

/**
 * @param {PowerV2.PowerTypeBuilders.Attribute} powerTypeBuilder
 */
SludgeDensePower.prototype.attributePowerType = function (powerTypeBuilder) {
	powerTypeBuilder
		.setModifier(modifier => {
			modifier
				.setAttribute('minecraft:generic.max_health')
				.setOperation('addition')
				.setValue(this.targetMaxHealth - this.defaultMaxHealth);
		})
		.build();
}

SludgeDensePower.INSTANCE = new SludgeDensePower();