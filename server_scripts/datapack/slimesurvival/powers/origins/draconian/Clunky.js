// priority: 101


var Clunky = {};
DATAGEN.powers.origins.draconian.Clunky = Clunky;

Clunky.coefficient = -0.04;
Clunky.modifierAttribute = CombatRollClasses.$EntityAttributes_CombatRoll.DISTANCE;
Clunky.modifierUUID = UUID.fromString('ef314a4e-54e0-484e-8b53-d1e96399613a');
Clunky.modifierName = 'Draconian clunky power'

Clunky.resourceLocation = 'slimesurvival:powers/origins/draconian/clunky.json';
Clunky.powerType = new PowerType.Simple();
Clunky.power = new Power(Clunky.resourceLocation, Clunky.powerType)
	.name('Clunky')
	.description('Your scales lower your flexibility and make it more difficult to roll around and dodge attacks.')
	.defaultOrigins('slimesurvival:draconian')
	.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/mob_effect/slowness.png', `${Clunky.coefficient * 100 + '%'} combat roll distance per armor point`))
;





PlayerEvents.tick(event => {
	const { player } = event;
	const Clunky = DATAGEN.powers.origins.draconian.Clunky;

	const util = new AttributeModifierUtil(player, Clunky.modifierAttribute, Clunky.modifierUUID, Clunky.modifierName);

	const hasPower = OriginsLibrary.isPowerActive(player, 'slimesurvival:origins/draconian/clunky');
	const armor = player.attributes.getValue($Attributes.ARMOR);
	const value = armor * Clunky.coefficient;

	util.conditional(
		!hasPower || util.modifierValue !== value,
		hasPower,
		value,
		'multiply_total'
	);
});