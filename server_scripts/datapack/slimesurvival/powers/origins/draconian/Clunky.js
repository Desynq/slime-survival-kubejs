// priority: 101



let Clunky = DATAGEN.powers.origins.draconian.Clunky = {};

Clunky.coefficient = -0.04;

Clunky.resourceLocation = 'slimesurvival:powers/origins/draconian/clunky.json';
Clunky.powerType = new PowerType.Simple();
Clunky.power = new Power(Clunky.resourceLocation, Clunky.powerType)
	.name('Clunky')
	.description('Your scales lower your flexibility and make it more difficult to roll around and dodge attacks.')
	.defaultOrigins('slimesurvival:draconian')
	.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/mob_effect/slowness.png', `${Clunky.coefficient * 100 + '%'} combat roll distance per armor point`));


PlayerEvents.tick(event => {
	const { player } = event;
	const Clunky = DATAGEN.powers.origins.draconian.Clunky;

	const attribute = CombatRollClasses.$EntityAttributes_CombatRoll.DISTANCE;
	const modifierUUID = UUID.fromString('ef314a4e-54e0-484e-8b53-d1e96399613a');

	const hasPower = OriginsLibrary.isPowerActive(player, 'slimesurvival:origins/draconian/clunky');
	const hasModifier = player.attributes.hasModifier(attribute, modifierUUID);

	const modifierValue = hasModifier ? player.attributes.getModifierValue(attribute, modifierUUID) : 0;
	const armor = player.attributes.getValue($Attributes.ARMOR);
	const value = armor * Clunky.coefficient;

	if (hasModifier && (!hasPower || modifierValue !== value)) {
		player.attributes.getInstance(attribute).removeModifier(modifierUUID);
	}
	if (!hasModifier && hasPower) {
		player.attributes.getInstance(attribute).addPermanentModifier(new $AttributeModifier(modifierUUID, 'Draconian clunky power', value, 'multiply_total'));
	}
});