// priority: 101

/**
 * @constructor
 */
function DraconianScalyPower() {
	this.modifierUUID = UUID.fromString('72ca04d7-b2ae-4454-9ac8-23fa29b7fcbc');
	this.modifierName = 'Draconian scaly power'

	this.powerType = new PowerType.PreventFeatureRender()
		.setFeature('armor')
	;
	this.resourceLocation = 'slimesurvival:powers/origins/draconian/scaly.json';

	this.power = new Power(this.resourceLocation, this.powerType)
		.name('Scaly')
		.description('Armor is transmuted to scales that cover your skin.')
		.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/item/glass_bottle.png',
			'Worn armor is invisible'
		))
		.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/item/iron_chestplate.png',
			'+1 Max Health per 1 Armor'
		))
		.defaultOrigins('slimesurvival:draconian')
	;
};

DraconianScalyPower.INSTANCE = new DraconianScalyPower();



PlayerEvents.tick(event => {
	const { player } = event;

	const util = new AttributeModifierUtil(player, $Attributes.MAX_HEALTH, DraconianScalyPower.INSTANCE.modifierUUID, DraconianScalyPower.INSTANCE.modifierName);

	const hasPower = OriginsLibrary.isPowerActive(player, 'slimesurvival:origins/draconian/scaly');
	const armor = player.attributes.getValue($Attributes.ARMOR);

	if (util.hasModifier && (!hasPower || util.modifierValue !== armor)) {
		util.removeModifier();
	}
	if (!util.hasModifier && hasPower) {
		util.addPermanentModifier(armor, 'addition').updateHealth();
	}
});