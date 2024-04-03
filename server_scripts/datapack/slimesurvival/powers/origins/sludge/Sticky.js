// priority: 101

function SludgeStickyPower() {
	this.resourceLocation = 'slimesurvival:powers/origins/sludge/sticky.json';
	this.powerType = undefined;
	this.power = new Power(this.resourceLocation, this.powerType)
		.name('Sticky')
		.description('You find it difficult to move while on the ground')
		.defaultOrigins('slimesurvival:sludge')
		.addBadge(new ApoliBadgeType.Tooltip('minecraft:textures/item/iron_boots.png',
			'You are unable to sprint while on the ground'
		))
	;
}

SludgeStickyPower.INSTANCE = new SludgeStickyPower();