// priority: 101


(function () {
	const powerType = new PowerType.Simple();

	const badges = [
		new ApoliBadgeTypes.Tooltip('minecraft:textures/item/glass_pane.png', 'Worn armor is invisible'),
		new ApoliBadgeTypes.Tooltip('minecraft:textures/item/iron_chestplate.png', '+1 Max Health per 1 Armor')
	];

	new Power('slimesurvival:powers/origins/draconian/scaled.json', powerType)
		.name('Scaled')
		.description('Armor is transmuted to scales that cover your skin.')
		.badges(badges)
		.defaultOrigins('slimesurvival:draconian');
})();

PlayerEvents.tick(event => {
	const { player } = event;

	const modifierUUID = UUID.fromString('72ca04d7-b2ae-4454-9ac8-23fa29b7fcbc');

	const hasPower = OriginsLibrary.isPowerActive(player, 'slimesurvival:origins/draconian/scaled');
	const hasModifier = player.attributes.hasModifier($Attributes.MAX_HEALTH, modifierUUID);
	const modifierValue = hasModifier ? player.attributes.getModifierValue($Attributes.MAX_HEALTH, modifierUUID) : 0;
	const armorValue = player.attributes.getValue($Attributes.ARMOR);
	const valueIsDifferent = modifierValue !== armorValue;

	if (hasModifier && (!hasPower || valueIsDifferent)) {
		player.attributes.getInstance($Attributes.MAX_HEALTH).removeModifier(modifierUUID);
	}
	if (!hasModifier && hasPower) {
		player.attributes.getInstance($Attributes.MAX_HEALTH).addPermanentModifier(new $AttributeModifier(modifierUUID, 'Draconian scaled power', armorValue, 'addition'));
	}
});