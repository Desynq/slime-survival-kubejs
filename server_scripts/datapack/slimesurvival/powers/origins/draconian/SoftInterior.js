// priority: 101



(function () {
	const defaultMaxHealth = $Attributes.MAX_HEALTH.defaultValue;
	const targetMaxHealth = 5;



	const attributeModifier = new ApoliDataTypes.AttributedAttributeModifier(
		'minecraft:generic.max_health',
		'addition',
		targetMaxHealth - defaultMaxHealth,
		'Draconian Soft Interior'
	);
	const powerType = new PowerType.Attribute().modifier(attributeModifier);

	const badges = [
		new ApoliBadgeType.Tooltip('minecraft:textures/item/porkchop.png', `Base max health is ${targetMaxHealth}`)
	]

	new Power('slimesurvival:powers/origins/draconian/soft-interior.json', powerType)
		.name('Soft Interior')
		.description('Dragon flesh is relatively soft and easy to cut and damage, making armor a necessity')
		.badges(badges)
		.defaultOrigins('slimesurvival:draconian');
})();