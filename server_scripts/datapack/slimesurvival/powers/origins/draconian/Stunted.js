// priority: 101

function DraconianStuntedPower() {
	this.resourceLocation = 'slimesurvival:powers/origins/draconian/stunted.json';

	this.powerType = new PowerType.DisableRegen();
	this.power = new Power(this.resourceLocation, this.powerType)
		.name('Stunted')
		.description('Having been polymorphed into a human, you are unable to naturally heal and must use magic in order to repair wounds.')
		.defaultOrigins('slimesurvival:draconian')
		.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/mob_effect/regeneration.png',
			'No natural regeneration (can only heal using magic)'
		))
	;
}

DraconianStuntedPower.INSTANCE = new DraconianStuntedPower();